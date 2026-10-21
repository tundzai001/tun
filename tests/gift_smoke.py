"""Browser regression check. Run with Playwright installed and the site served on :4173."""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_URL = os.environ.get('GIFT_TEST_URL', 'http://127.0.0.1:4173')
ARTIFACTS = Path(os.environ.get('GIFT_TEST_ARTIFACTS', '/private/tmp/gift-review'))
ARTIFACTS.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--enable-webgl', '--use-gl=angle', '--use-angle=swiftshader'])
    page = browser.new_page(viewport={'width': 1440, 'height': 900}, device_scale_factor=1)
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(BASE_URL, wait_until='networkidle')
    page.screenshot(path=str(ARTIFACTS / 'entrance.png'))
    page.get_by_role('button', name='Chạm để mở quà').click()
    page.wait_for_function("document.querySelector('#gift-webgl-canvas').dataset.state === 'open'")
    assert page.url.rstrip('/') == BASE_URL
    assert page.locator('#entrance').evaluate('(e) => getComputedStyle(e).visibility') == 'hidden'
    assert page.locator('#gift-webgl-canvas').is_visible()
    assert page.locator('#scene-status').is_hidden(), '3D scene failed to initialize'
    page.screenshot(path=str(ARTIFACTS / 'desktop.png'))
    page.get_by_role('button', name='Đọc thư anh viết').click()
    assert page.locator('#letter-dialog').evaluate('(e) => e.open')
    page.keyboard.press('Escape')
    assert not page.locator('#letter-dialog').evaluate('(e) => e.open')
    for i in range(5):
        page.locator(f'[data-photo="{i}"]').click()
        assert page.locator('#portrait').evaluate('(e) => e.complete && e.naturalWidth > 0')
        assert page.locator(f'[data-photo="{i}"]').get_attribute('aria-pressed') == 'true'
    page.get_by_role('button', name='Xem nguyên ảnh').click()
    page.keyboard.press('ArrowRight')
    assert page.locator('#full-number').inner_text() == '01 / 05'
    page.screenshot(path=str(ARTIFACTS / 'gallery.png'))
    page.keyboard.press('Escape')
    # Replaying mid-animation must cancel the old timeline cleanly.
    page.get_by_role('button', name='Mở lại').click()
    page.wait_for_timeout(250)
    page.get_by_role('button', name='Mở lại').click()
    page.wait_for_function("document.querySelector('#gift-webgl-canvas').dataset.state === 'open'")
    assert page.locator('#scene-status').is_hidden()
    canvas = page.locator('#gift-webgl-canvas').bounding_box()
    page.mouse.move(canvas['x'] + canvas['width']/2, canvas['y'] + canvas['height']/2)
    page.mouse.down()
    page.mouse.move(canvas['x'] + canvas['width'] - 20, canvas['y'] + 30, steps=12)
    page.mouse.up()
    page.wait_for_timeout(300)
    page.screenshot(path=str(ARTIFACTS / 'rotated.png'))
    for width, height in [(375,812),(768,1024),(1024,768),(1440,900),(812,375)]:
        page.set_viewport_size({'width':width, 'height':height})
        page.wait_for_timeout(500)
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
        stage = page.locator('.gift-stage').bounding_box()
        assert stage['height'] < max(height, 700), f'Canvas expands its container at {width}'
        page.screenshot(path=str(ARTIFACTS / f'layout-{width}.png'), full_page=True)
    page.emulate_media(reduced_motion='reduce')
    page.goto(BASE_URL + '/gift.html', wait_until='networkidle')
    assert page.locator('#entrance').count() == 0
    page.wait_for_function("document.querySelector('#gift-webgl-canvas').dataset.state === 'open'")
    assert page.locator('#scene-status').is_hidden()
    assert not errors, errors
    # A device without WebGL must still offer the letter and complete album.
    fallback = browser.new_page(viewport={'width':375,'height':812})
    fallback.add_init_script('''const original = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function(type, ...args) {
        return type.startsWith('webgl') ? null : original.call(this, type, ...args);
      };''')
    fallback.goto(BASE_URL + '/gift.html', wait_until='networkidle')
    assert fallback.locator('.scene-fallback').count() == 1
    fallback.get_by_role('button', name='Đọc thư anh viết').click()
    assert fallback.locator('#letter-dialog').evaluate('(e) => e.open')
    fallback.screenshot(path=str(ARTIFACTS / 'letter-mobile.png'))
    browser.close()
    print('PASS: tap opens gift, WebGL, 5 photos, dialogs, keyboard, repeated replay, 5 viewports, reduced motion, direct gift route; no JS errors.')
