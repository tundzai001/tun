document.addEventListener('DOMContentLoaded', function() {
    // =================================================================
    // PHẦN 1: KHAI BÁO BIẾN VÀ DOM ELEMENTS
    // =================================================================
    const bodyEl = document.body;
    const galaxy = document.getElementById('galaxy');
    const shootingStarsContainer = document.getElementById('shooting-stars');
    const audio = document.getElementById('bg-music');
    const overlay = document.getElementById('music-overlay');
    const songTitleEl = document.getElementById('song-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const favoriteBtn = document.getElementById('favorite-btn');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const loadingScreen = document.getElementById('loading-screen');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const volumeSlider = document.getElementById('volume-slider');
    const waveformContainer = document.getElementById('waveform');
    const waveformControls = document.getElementById('waveform-controls');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const infoCard = document.getElementById('planet-info-card');
    const infoCardTitle = document.getElementById('info-card-title');
    const infoCardFact = document.getElementById('info-card-fact');
    const infoCardMessage = document.getElementById('info-card-message');
    const closeInfoBtn = document.getElementById('close-info-btn');
    const canvas = document.getElementById('webgl-canvas');
    const letterContainer = document.getElementById('letter-container');

    // =================================================================
    // PHẦN 2: DỮ LIỆU CÁ NHÂN HÓA VÀ CÀI ĐẶT
    // =================================================================
    // LƯU Ý: Dán nội dung các mảng dài của bạn vào các vị trí dưới đây.
    
    const birthdayData = { 
            day: 9, month: 6,
                letter: { title: "Gửi em, cô gái tuyệt vời nhất từng được sinh ra =))) nghe hơi sến tí nhưng mà thôi kệ di hehee", content: `<p>Hôm nay là ngày sinh nhật của em, là ngày mà mẹ em đã sinh ra em =))) anh biết nhưng mà ý là kiểu ngày mà mẹ em đẻ ra thiên thần luôn rồi ấy kiểu em tuyệt vời mà xinh xắn lại còn giỏi giang nữa omg</p><p> Có lẽ nếu xét về tình cảm dành cho em chắc anh thua mỗi mẹ em thôi ấy, anh yêu em nhiều lắm luôn í. Thôi anh nhắn v th tại anh viết thư tay cho em rồi mà =)) đọc thư tay nó mới tình cảm hơn chứ <p>Chúc em sinh nhật vui vẻ!</p></p>` },
                song: { file: "https://treuah.netlify.app/ordinary.mp3", title: "Ordinary - Alex Warren" }
    };
    const mainPlaylist = [
        { file: "https://treuah.netlify.app/leduong.mp3", title: "Lễ đường - Kai Đinh" }, 
        { file: "https://treuah.netlify.app/dieforyou.mp3", title: "Die For You - The Weeknd" },
        { file: "https://treuah.netlify.app/ordinary.mp3", title: "Ordinary - Alex Warren" },
        { file: "https://treuah.netlify.app/supernatural.mp3", title: "supernatural - Ariana Grande" },
        { file: "https://treuah.netlify.app/youngandbeautiful.mp3", title: "Young and Beautiful - Lana Del Rey" },
        { file: "https://treuah.netlify.app/tumblrgirls.mp3", title: "Tumblr Girls - G-Eazy" },
        { file: "https://treuah.netlify.app/sayyeslocopunch.mp3", title: "Say Yes - Loco x Punch" },
        { file: "https://treuah.netlify.app/carryyouhome.mp3", title: "Carry You Home - Alex Warren" },
        { file: "https://treuah.netlify.app/prada.mp3", title: "Prada - Cassö x Raye x D Block Europe" },
        { file: "https://treuah.netlify.app/phepmau.mp3", title: "Phép Màu - MAYDAYs ft.Minh Tốc" },
        { file: "https://treuah.netlify.app/paris.mp3", title: "Paris - The Chainsmokers" },
        { file: "https://treuah.netlify.app/wefoundlove.mp3", title: "We Found Love - Rihanna ft.Calvin Harris" },
        { file: "https://treuah.netlify.app/daylight.mp3", title: "Day Light - Taylor Swift" },
        { file: "https://treuah.netlify.app/angelnumbers.mp3", title: "Angel Numbers / Ten Toes - Chris Brown" },
        { file: "https://treuah.netlify.app/oneofthegirls.mp3", title: "One Of The Girls - The Weeknd, JENNIE, Lily-Rose Depp" },
        { file: "https://treuah.netlify.app/treatyoubetter.mp3", title: "Treat you better - Shawn Mendes " },
        { file: "https://treuah.netlify.app/goodforyou.mp3", title: "Good For You - Selena Gomez" },
        { file: "https://treuah.netlify.app/birdsofafeather.mp3", title: "Birds Of a Feather - Billie Eilish" },
        { file: "https://treuah.netlify.app/ladykillers.mp3", title: "Lady Killers II - G-Eazy" },
        { file: "https://treuah.netlify.app/allthestars.mp3", title: "All The Stars - Kendrick Lamar x SZA" },
    ];

    const dailySongs = [
        { day: 1, song: { file: "https://treuah.netlify.app/main/fever.mp3", title: "Fever - COLDZY" } },
        { day: 2, song: { file: "https://treuah.netlify.app/main/art.mp3", title: "Art - Tyla" } },
        { day: 3, song: { file: "https://treuah.netlify.app/main/nambenanh.mp3", title: "Nằm bên anh - Minh Đinh" } },
        { day: 4, song: { file: "https://treuah.netlify.app/main/Fantasize.mp3", title: "Fantasize - Ariana Grande" } },
        { day: 5, song: { file: "https://treuah.netlify.app/main/stillwithyou.mp3", title: "Still With You - Jung Kook" } },
        { day: 6, song: { file: "https://treuah.netlify.app/main/calloutmyname.mp3", title: "Call Out My Name - The Weeknd" } },
        { day: 7, song: { file: "https://treuah.netlify.app/main/khobaudanhroi.mp3", title: "Kho báu đánh rơi - tlinh" } },
        { day: 8, song: { file: "https://treuah.netlify.app/main/babyonemoretime.mp3", title: "Baby One More Time - Britney Spears" } },
        { day: 9, song: { file: "https://treuah.netlify.app/main/Snooze.mp3", title: "snooze - SZA" } },
        { day: 10, song: { file: "https://treuah.netlify.app/main/earnedit.mp3", title: "Earned It - The Weeknd" } }, 
        { day: 11, song: { file: "https://treuah.netlify.app/main/dearfuturehusband.mp3", title: "Dear Future Husband - Meghan Trainor" } },
        { day: 12, song: { file: "https://treuah.netlify.app/main/luther.mp3", title: "Luther - Kendrick Lamar & SZA" } },
        { day: 13, song: { file: "https://treuah.netlify.app/main/thegioithantien.mp3", title: "Thế giới thần tiên - tlinh" } },
        { day: 14, song: { file: "https://treuah.netlify.app/main/muathamlanggioi.mp3", title: "Mưa thâm lặng giời - BigDaddy ft.GREY D" } },
        { day: 15, song: { file: "https://treuah.netlify.app/main/afterlastnight.mp3", title: "After Last Night - Bruno Mars & Anderson Paak" } },
        { day: 16, song: { file: "https://treuah.netlify.app/main/Saturn.mp3", title: "Saturn - SZA" } },
        { day: 17, song: { file: "https://treuah.netlify.app/main/nuocmatdautheroiduoc.mp3", title: "Nước mắt đâu thể rơi được - 24kRight & tlinh" } },
        { day: 18, song: { file: "https://treuah.netlify.app/main/oldlove.mp3", title: "Old Love - Yuji ft. Putri Dahlia" } },
        { day: 19, song: { file: "https://treuah.netlify.app/main/only.mp3", title: "ONLY - LeeHi" } },
        { day: 20, song: { file: "https://treuah.netlify.app/main/detoiomembanggiaidieunay.mp3", title: "Để tôi ôm em bằng giai điệu này - Kai Dinh x Min x Grey D" } },
        { day: 21, song: { file: "https://treuah.netlify.app/main/lamlanhchuatinh.mp3", title: "Làm lành chữa tình - tlinh" } },
        { day: 22, song: { file: "https://treuah.netlify.app/main/SexyBack.mp3", title: "SexyBack - Justin Timberlake" } },
        { day: 23, song: { file: "https://treuah.netlify.app/main/duaemvenha.mp3", title: "đưa em về nhà - Grey D x Chillies" } },
        { day: 24, song: { file: "https://treuah.netlify.app/main/sayyes.mp3", title: "Say Yes - OgeNus x Pia Linh" } },
        { day: 25, song: { file: "https://treuah.netlify.app/shhhhhhh...mp3", title: "shhhhhhh.. - wean" } },
        { day: 26, song: { file: "https://treuah.netlify.app/main/Water.mp3", title: "Water - Tyla" } },
        { day: 27, song: { file: "https://treuah.netlify.app//main/standingnexttoyou.mp3", title: "Standing Next To You - Jung Kook" } },
        { day: 28, song: { file: "https://treuah.netlify.app/main/chamhoa.mp3", title: "Chăm Hoa - Mono" } },
        { day: 29, song: { file: "https://treuah.netlify.app/main/freakydeaky.mp3", title: "Freaky Deaky - Tyga x Doja Cat" } },
        { day: 30, song: { file: "https://treuah.netlify.app/openarms.mp3", title: "Open Arms - SZA" } },
        { day: 31, song: { file: "https://treuah.netlify.app/main/theboyismine.mp3", title: "The boy is mine - Ariana Grande" } }
    ];
      const dailyLetters = [
        { day: 1, title: "hello cậu, ngày học đầu tiên của tháng kết thúc rồi", content: `<p>Vậy là một ngày nữa ở Thành Đô đã qua. Cậu đã vất vả, mệt mỏi rồi. Mọi thứ hôm nay vẫn ổn chứ? Có điều gì cậu muốn kể cho tớ nghe không?</p><p>Tuy là ở xa, nhưng mà tớ vẫn luôn ở đây lắng nghe cậu. Giờ thì nghỉ ngơi thôi nhé </p>` },
        { day: 2, title: "xin cả chào nhesee, ngày thứ hai của cậu mệt không?", content: `<p>Tan học rồi, chắc cậu mệt lắm. Đừng ôm hết mọi mệt mỏi một mình nhé, hãy chia sẻ với tớ. Tớ không ở cạnh để chăm sóc cậu được, nên chỉ có thể lắng nghe thôi và an ủi cậu thôi.</p><p>Hôm nay của tớ ở Việt Nam cũng hơi mệt mỏi một chút, nhưng mà kiểu có cậu ấy nên cảm giác thoải mái v =)) Có chuyện thì hãy kể tớ nhé, tớ luôn ở đây ❤️</p>` },
        { day: 3, title: "Gửi cậu, ngày thứ ba, lại một ngày nỗ lực rồi", content: `<p>Tớ biết việc học và thích nghi với môi trường mới, các bạn mới không dễ dàng. Tớ tự hào về cậu nhiều lắm. Mỗi ngày trôi qua, cậu lại càng giỏi giang hơn một chút đấy.</p><p>Hôm nay có gì vui hay có gì khiến cậu mệt mỏi, tức giận không? Kể cho tớ nghe, lov u so much luôn</p>` },
        { day: 4, title: "Ngày thứ 4, tớ lại nhớ khoảng khắc đấy =))) dyeu v", content: `<p>Tối nay, tớ lại nghĩ về chiếc huy chương cậu đưa tớ, kiểu nó làm cảm giác như cậu đang ở gần tớ vô cùng luôn ấy =)) cảm giác nhớ cậu v</p><p>Ngày hôm nay của cậu thế nào thế? Việc học có căng thẳng, khó không thế? Cố lên dii, im alws here </p><p> Có chuyện gì hãy nói với tớ nhé </p>` },
        { day: 5, title: "Tan học rồi, gác lại mọi thứ và thư giãn thôi", content: `<p>Một ngày nữa đã qua, cậu đã làm rất tốt rồi. Bây giờ là thời gian để nghỉ ngơi. Cậu đã ăn tối chưa? Nhớ đừng bỏ bữa nhé.</p><p>Tớ hy vọng những dòng chữ này có thể xoa dịu đi phần nào mệt mỏi của cậu. Ngủ thật ngon để mai có nhiều năng lượng nhé.</p>` },
        { day: 6, title: "Gửi cậu, hôm nay là thứ 2 đầu tuần", content: `<p>Tuần mới vui vẻ nhé !!!! Cậu đang làm rất tốt rồi, cố gắng lên. Ngày đầu tuần phải luôn thật vui vẻ nhé để cả tuần mới akelo okela được </p><p>Đầu tuần có chuyện gì không thế? Bị thích nghe cậu kể chuyện ấy =)) Chúc cậu buổi tối vui vẻ and love me 2 =)) </p>` },
        { day: 7, title: "Gửi cậu, tối thứ bảy ở Thành Đô...", content: `<p>Ngày nghỉ đầu tiên của cậu thế nào? Có đi đâu chơi hay khám phá được món gì ngon không? Tớ tò mò về cuộc sống của cậu ở bên đó lắm.</p><p>Dù chúng ta xa nhau, nhưng được nghe cậu kể về một ngày của mình làm tớ cảm thấy khoảng cách như ngắn lại. Chúc cậu ngủ ngon.</p>` },
        { day: 8, title: "helo bae, ê í là cậu yêu vkl =)) ", content: `<p>Thế là đầu tuần cuối cùng ở Việt Nam =))) nghe cứ hụt hẫng tdn ấy cậu ơi nma tớ hy vọng cậu đừng khóc nhé =)) nhớ lời tớ dặn về khóc khi nào rồi đấy =))) .</p><p>Đừng lo lắng quá nhé, Bên cạnh cậu còn gia đình, còn tớ nữa. Tớ luôn tin ở cậu. Mạnh mẽ lên !!! love u so much luôn </p>` },
        { day: 9, title: "Hê và lô cậu =))) ê nma cậu yêu vl ", content: `<p>Hoa đẹp chứ? Ê ý là thấy tone màu đấy hợp cả cậu vl =)) kiểu xinh xinh lại còn dịu dàng nữa omg tuyệt. Cậu alws phải vui vẻ, same cái vibe với bông hoa nhé =)) kiểu là luôn tươi cười, vui vẻ như cách bông hoa nở rộ nhé. Tớ yêu cậu nhiều lắm luôn ý </p>` },
        { day: 10, title: "Gửi cậu, còn 3 ngày nữa là cậu lên đường rùi", content: `<p>Công nhận thời gian trôi nhanh thật =))) mới ngày nào còn mới nói chuyện vậy mà đã chuẩn bị đi rồi huhu không phải buồn 1 chút nữa rồi mà buồn nhiều nhiều chút. Nhưng mà trộm vía mỗi tối được nói chuyện với cậu là kiểu vui vl ấy =))  Love you so so so so so.... much luôn.</p>` },
        { day: 11, title: "Còn 2 ngày nữa, ối giời ơi...", content: `<p>ê sao trôi nhanh thế dcm , nhớ ơi nhớ, nhớ b hà nhiều chút =))) chắc không phải bạn nữa rồi khả năng giờ phải lên wife luôn, chứ yêu quá rồi đấy =)))) Nhớ nhiều nhiều chút =)) ước được bên cạnh suốt ngày =))))))))))))) </p>` },
        { day: 12, title: "Nhanh thật chưa gì còn hơn 20 tiếng nữa...", content: `<p>Cố lên, không buồn tớ vẫn luôn ở đây với cậu mà, cố lên nào, không được khóc nhé. Tớ thương cậu nhiều lắm luôn í, nhớ lời tớ dặn không được khóc khi không có tớ ở bên, mạnh mẽ lên!!!!</p>` },
        { day: 13, title: "Thế là bay rùi, omg sao dcm nhanh thế", content: `<p>Buồn quá, vợ đi rồi buồn vl, không dám nói tại sao không gặp sớm hơn, nhưng mà biết đâu số phận sắp đặt để lần này có thể tiến xa idk =))) but i want to say that  i love u so much, i miss u. Nhưng mà sang đấy phải cố gắng lên nhé, tớ luôn ở bên cạnh cậu mà</p>` },
        { day: 14, title: "Chắc cậu đến rùi nhỉ?", content: `<p>Mới hôm qua còn gặp, mà giờ đã bên nước khác rồi omg sao mà nhanh v trời ơi, ê í là bị buồn í, cảm giác hụt hẫng vl =)) bị nhớ nhiều chút vợ ơi... i miss u so much luôn, sang bên đấy nhớ ăn uống đầy đủ nhé đặc biệt là nhớ phải uống nước đầy đủ nhé tại vợ bị đau dạ dày đấy !!! nhớ nhee, yêu lắm í .</p>` },
        { day: 15, title: "Gửi cậu, giữa tháng rồi này...", content: `<p>Nửa tháng rồi! Mỗi tối đọc thư là một lần tớ cảm thấy chúng ta gần nhau hơn. Đừng ngần ngại kể cho tớ nghe mọi thứ nhé, tớ luôn ở đây. Hôm nay của cậu thế nào?</p>` },
        { day: 16, title: "Gửi cậu, tối thứ Bảy an lành", content: `<p>Ngày nghỉ thứ Bảy của cậu trôi qua vui vẻ chứ? Có khám phá được điều gì mới mẻ không? Kể tớ nghe với, tớ muốn được nhìn Thành Đô qua lời kể của cậu.</p>` },
        { day: 17, title: "Gửi cậu, tối Chủ nhật, sẵn sàng cho tuần mới", content: `<p>Hy vọng cậu đã có một cuối tuần thật ý nghĩa. Giờ thì sạc đầy pin và chuẩn bị cho tuần mới nhé. Đừng lo, dù tuần mới có thế nào thì tối nào cũng có tớ ở đây đợi cậu. Ngủ ngon.</p>` },
        { day: 18, title: "Gửi cậu, ngày thứ mười tám...", content: `<p>Tuần mới bắt đầu rồi. Cậu đã vất vả cả ngày hôm nay. Giờ thì gác lại mọi lo toan và nghỉ ngơi thôi. Có điều gì khiến cậu bận tâm không?</p>` },
        { day: 19, title: "Gửi cậu, ngày thứ mười chín...", content: `<p>Tớ thích nghe giọng cậu, nhưng tớ cũng thích đọc những dòng tin nhắn cậu kể về một ngày của mình. Cảm giác rất bình yên. Hôm nay của cậu thế nào? Ổn cả chứ?</p>` },
        { day: 20, title: "Gửi cậu, ngày thứ hai mươi...", content: `<p>Hai mươi ngày rồi, thời gian trôi nhanh thật. Chắc hẳn việc học đôi khi cũng áp lực. Nhớ rằng cậu không bao giờ một mình nhé, luôn có tớ ở đây. Nghỉ ngơi thôi. Ngủ ngon nhé.</p>` },
        { day: 21, title: "Gửi cậu, ngày thứ hai mươi mốt...", content: `<p>Hôm nay cậu có cười nhiều không? Tớ hy vọng là có. Niềm vui của cậu cũng là niềm vui của tớ đó. Giờ thì nghỉ ngơi và mơ những giấc mơ thật đẹp nhé.</p>` },
        { day: 22, title: "Gửi cậu, ngày thứ hai mươi hai...", content: `<p>Lại sắp hết một tuần nữa rồi. Cậu đã làm việc rất chăm chỉ. Hãy tự hào về bản thân nhé. Tớ cũng tự hào về cậu. Chúc cậu một buổi tối thật thư giãn.</p>` },
        { day: 23, title: "Gửi cậu, ngày thứ hai mươi ba...", content: `<p>Hôm nay ở Việt Nam trời mưa, tớ lại nghĩ không biết ở Thành Đô thời tiết thế nào, cậu có mang đủ áo ấm không. Lo cho cậu quá. Hôm nay của cậu ổn chứ?</p>` },
        { day: 24, title: "Gửi cậu, tối Chủ nhật cuối cùng của tháng", content: `<p>Một ngày nghỉ nữa lại sắp qua. Hy vọng cậu đã có một ngày thật vui. Hãy ngủ một giấc thật sâu để tuần cuối cùng của tháng thật bùng nổ nhé. Ngủ ngon.</p>` },
        { day: 25, title: "Gửi cậu, ngày thứ hai mươi lăm...", content: `<p>Tuần cuối cùng của tháng rồi. Chắc hẳn cũng có nhiều bài vở cần hoàn thành. Cứ từ từ làm nhé, đừng vội. Mệt thì nghỉ, và nhớ là có tớ ở đây. Thương cậu.</p>` },
        { day: 26, title: "Gửi cậu, ngày thứ hai mươi sáu...", content: `<p>Tớ vừa xem ảnh Thành Đô trên mạng và tự hỏi không biết cậu đang ở góc nào của thành phố đó. Mong đến ngày tớ có thể đến đó cùng cậu. Hôm nay cậu đã vất vả rồi. Ngủ ngon nhé.</p>` },
        { day: 27, title: "Gửi cậu, ngày thứ hai mươi bảy...", content: `<p>Cảm ơn cậu vì đã luôn là một cô gái kiên cường. Yêu xa cần rất nhiều nỗ lực, và cậu đang làm rất tốt phần của mình. Tớ trân trọng điều đó lắm. Chúc cậu ngủ ngon.</p>` },
        { day: 28, title: "Gửi cậu, ngày thứ hai mươi tám...", content: `<p>Chỉ còn vài ngày nữa là hết tháng. Nhìn lại một tháng qua, cậu thấy mình đã trưởng thành hơn nhiều không? Với tớ, một tháng qua tớ thấy mình thương cậu nhiều hơn. Nghỉ ngơi đi nhé.</p>` },
        { day: 29, title: "Gửi cậu, ngày thứ hai mươi chín...", content: `<p>Hôm nay có điều gì làm cậu vui nhất? Kể cho tớ nghe đi, tớ muốn được vui cùng cậu. Sau một ngày dài, hãy để tâm trí được nghỉ ngơi nhé. Chúc cậu mơ đẹp.</p>` },
        { day: 30, title: "Gửi cậu, tối ngày áp chót của tháng", content: `<p>Ngày mai là hết tháng rồi. Cảm ơn cậu vì đã để tớ đồng hành trong suốt một tháng vừa qua. Mỗi tối nói chuyện với cậu đều là một điều quý giá. Hôm nay cậu đã làm rất tốt. Ngủ ngon nhé.</p>` },
        { day: 31, title: "Gửi cậu, khép lại một tháng xa nhau", content: `<p>Tháng 10 kết thúc rồi. Một tháng qua cậu đã rất kiên cường và giỏi giang. Tớ tự hào về cậu lắm. Cảm ơn vì đã luôn chia sẻ cùng tớ dù chúng ta ở xa. Cùng nhau chào đón tháng 11 nhé. Ngủ thật ngon, cô gái của tớ.</p>` },
    ];

    const daytimeLetters = [
        { day: 1, title: "Gửi cậu, ngày đầu tháng tốt lành nhé!", content: `<p>Bắt đầu tháng mới ở Thành Đô, chúc cậu mọi việc đều suôn sẻ. Tớ gửi một chút năng lượng từ Việt Nam qua cho cậu đây. Cố lên nhé!</p>` },
        { day: 2, title: "Gửi cậu, ngày thứ hai...", content: `<p>Chúc cậu một ngày học tập hiệu quả. Đừng quên uống đủ nước và cười thật tươi nha. Tối mình nói chuyện sau.</p>` },
        { day: 3, title: "Gửi cậu, ngày thứ ba...", content: `<p>Hôm nay cậu có môn gì khó không? Cứ bình tĩnh xử lý từng chút một nhé, tớ tin cậu làm được. Fighting!</p>` },
        { day: 4, title: "Gửi cậu, ngày thứ tư...", content: `<p>Chỉ là một lời nhắn nhỏ để nói rằng, tớ đang nghĩ đến cậu. Chúc cậu một ngày học vui vẻ!</p>` },
        { day: 5, title: "Gửi cậu, ngày thứ năm...", content: `<p>Cố lên sắp cuối tuần rồi! Mong cậu có một ngày thật nhiều năng lượng và niềm vui. Đừng để bị áp lực quá nhé.</p>` },
        { day: 6, title: "Gửi cậu, ngày thứ sáu trong tháng...", content: `<p>Ngày cuối cùng trong tuần học rồi, cố gắng nốt hôm nay nhé. Tớ ở đây đợi cậu "tan học" nè. Have a good day!</p>` },
        { day: 7, title: "Gửi cậu, ngày thứ bảy...", content: `<p>Cuối tuần rồi! Hôm nay cậu có dự định gì đặc biệt không? Dù làm gì cũng hãy thật vui nhé. Nhớ giữ gìn sức khỏe.</p>` },
        { day: 8, title: "Ê thứ 2 cuối cùng rồi đấy =)) í là t2 cuối ở đây =)) ", content: `<p>Chúc cậu một thứ hai vui vẻ và luôn là kiểu happy, và hehehe luôn có tớ bên cạnh cậu nhaa alws luôn. Tạm gác lại sách vở và yes chuẩn bị thôi nào =)) í là cái thư này cũng cũng bình thường thôi =))) nói lời vẫn cứ akelo hơn =)) </p>` },
        { day: 9, title: "Thứ 3 CUỐI rồi omg nhanh vkl ", content: `<p>Tuần cuối rồi, chúc cậu sang bên đấy mạnh khỏe và cố gắng học hành tốt nhé =)) mặc dù chưa đi đâu nma th kệ di cứ chúc. Cố lên cô gái của tớ =))) </p>` },
        { day: 10, title: "Gửi cậu, ngày giữa tuần cuối ở đây...", content: `<p>dcm sao nhanh thế kbt omg ê nhớ cậu qs đấy buồn vkl sắp di rồi kìa huhuhuhuhuhu buồn nhiều chút nha, nma ksao vẫn còn cậu bên cạnh tớ mà hehehe love u sm</p>` },
        { day: 11, title: "Gửi cậu, ngày thứ mười một...", content: `<p>Nếu giờ giải lao có mệt, hãy nghe một bản nhạc vui vẻ xem sao. Chúc cậu một ngày học hiệu quả!</p>` },
        { day: 12, title: "Gửi cậu, ngày thứ mười hai...", content: `<p>Giữa tuần rồi, cố lên nhé. Chỉ một lời nhắn để cậu biết là có người luôn nghĩ về cậu thôi. ^^</p>` },
        { day: 13, title: "Gửi cậu, ngày thứ mười ba...", content: `<p>Hôm nay học hành có thuận lợi không? Tớ tin là có. Chúc cậu một ngày tràn đầy tự tin!</p>` },
        { day: 14, title: "Gửi cậu, ngày thứ mười bốn...", content: `<p>Hai tuần rồi đó! Cố gắng nốt hôm nay rồi mai lại cuối tuần. Fighting!</p>` },
        { day: 15, title: "Gửi cậu, ngày giữa tháng!", content: `<p>Nhanh thật, đã nửa tháng rồi. Chúc cậu một ngày học tập hiệu quả. Nhớ cậu!</p>` },
        { day: 16, title: "Gửi cậu, ngày thứ mười sáu...", content: `<p>Cuối tuần của cậu thế nào? Kể tớ nghe vào tối nay nhé. Giờ thì chúc cậu một ngày thứ Bảy thật vui.</p>` },
        { day: 17, title: "Gửi cậu, ngày chủ nhật an lành", content: `<p>Hôm nay hãy cho phép bản thân được "lười" một chút nhé. Nạp thật nhiều năng lượng cho tuần mới nha cậu.</p>` },
        { day: 18, title: "Gửi cậu, ngày thứ mười tám...", content: `<p>Lại một tuần mới bắt đầu. Chúc cậu mọi sự hanh thông. Nhớ ăn trưa đúng bữa đó!</p>` },
        { day: 19, title: "Gửi cậu, ngày thứ mười chín...", content: `<p>Một lời nhắn nhỏ nhắc cậu đừng ngồi học lâu quá, thỉnh thoảng đứng dậy vươn vai một chút nhé. Tớ lo cho cậu đó.</p>` },
        { day: 20, title: "Gửi cậu, ngày thứ hai mươi...", content: `<p>2/3 chặng đường của tháng rồi. Cậu giỏi lắm. Chúc cậu một ngày học nhẹ nhàng.</p>` },
        { day: 21, title: "Gửi cậu, ngày thứ hai mươi mốt...", content: `<p>Chỉ muốn ghé qua đây và để lại một nụ cười cho cậu. :) Cố lên nhé!</p>` },
        { day: 22, title: "Gửi cậu, ngày thứ hai mươi hai...", content: `<p>Sắp cuối tháng rồi, thời gian bay nhanh thật. Chúc cậu ngày mới tốt lành. Tối mình gặp nhau qua màn hình nhé.</p>` },
        { day: 23, title: "Gửi cậu, ngày thứ hai mươi ba...", content: `<p>Hôm nay tớ... (kể một hoạt động ngắn của cậu). Còn cậu thì sao? Chúc cậu một ngày học vui vẻ, không áp lực.</p>` },
        { day: 24, title: "Gửi cậu, ngày thứ hai mươi bốn...", content: `<p>Chủ nhật vui vẻ nhé cậu. Hôm nay hãy làm điều gì đó khiến cậu thực sự hạnh phúc!</p>` },
        { day: 25, title: "Gửi cậu, ngày thứ hai mươi lăm...", content: `<p>Tuần cuối cùng của tháng rồi! Cố gắng lên nhé. Chúc cậu một ngày học thật hiệu quả để cuối tuần đi chơi.</p>` },
        { day: 26, title: "Gửi cậu, ngày thứ hai mươi sáu...", content: `<p>Thời tiết bên đó có lạnh không? Nhớ mặc đủ ấm nhé. Chúc cậu một ngày học tập ấm áp.</p>` },
        { day: 27, title: "Gửi cậu, ngày thứ hai mươi bảy...", content: `<p>Một lời nhắn gửi thật nhiều động lực cho cậu. Cậu là giỏi nhất! ^^</p>` },
        { day: 28, title: "Gửi cậu, ngày thứ hai mươi tám...", content: `<p>Đếm ngược những ngày cuối tháng. Cố lên nhé. Tớ luôn ở đây ủng hộ cậu.</p>` },
        { day: 29, title: "Gửi cậu, ngày thứ hai mươi chín...", content: `<p>Hôm nay có bài kiểm tra nào không? Chúc cậu làm bài thật tốt. Tự tin lên nhé!</p>` },
        { day: 30, title: "Gửi cậu, ngày áp chót của tháng", content: `<p>Ngày 30 rồi! Chúc cậu một ngày học nhẹ nhàng để chuẩn bị khép lại một tháng thật đẹp.</p>` },
        { day: 31, title: "Gửi cậu, ngày cuối cùng của tháng...", content: `<p>Chúc cậu một ngày học cuối tháng thật thành công để khép lại một tháng trọn vẹn nhé. Tối mình nói chuyện.</p>` },
    ];

    const assetPaths = {
        sun: 'images/sun.jpg',
        venus: 'images/venus.jpg',
        earth: 'images/earth.jpg',
        mars: 'images/mars.jpg',
        jupiter: 'images/jupiter.jpg',
        saturn: 'images/saturn.jpg',
        saturnRing: 'images/saturn-ring.jpg',
        neptune: 'images/neptune.jpg',
        stars: 'images/stars.jpg'
    };
    
    const celestialData = [
        { id: 'sun', type: 'star', name: 'Mặt Trời', texture: assetPaths.sun, size: 50, orbitRadius: 0, spinSpeed: 0.05, fact: "Năng lượng của mặt trời sưởi ấm cả vũ trụ này...", message: "...nhưng nụ cười của cậu mới là thứ sưởi ấm mùa đông này =))) ." },
        { id: 'venus', type: 'planet', name: 'Sao Kim', texture: assetPaths.venus, size: 4, orbitRadius: 80, orbitSpeed: 1.2, spinSpeed: 0.1, fact: "Sao Kim được đặt theo tên nữ thần tình yêu và sắc đẹp trong thần thoại La Mã...", message: "...điều đó giải thích tại sao tớ lại tìm thấy cậu ở đây hehe." },
        { id: 'earth', type: 'planet', name: 'Trái Đất', texture: assetPaths.earth, size: 5, orbitRadius: 120, orbitSpeed: 1.0, spinSpeed: 0.5, fact: "Trái Đất là hành tinh duy nhất được biết đến có sự sống...", message: "...và có lẽ chúng ta cũng mới bắt đầu một hành trình nhỏ." },
        { id: 'mars', type: 'planet', name: 'Sao Hỏa', texture: assetPaths.mars, size: 3, orbitRadius: 160, orbitSpeed: 0.8, spinSpeed: 0.4, fact: "Sao Hỏa được gọi là 'Hành tinh Đỏ' vì màu sắc của nó...", message: "...giống như những rung động mới mẻ trong tim của mình hehehehe, í là tim nó cứ đỏ rực th =)))) ." },
        { id: 'jupiter', type: 'planet', name: 'Sao Mộc', texture: assetPaths.jupiter, size: 20, orbitRadius: 250, orbitSpeed: 0.4, spinSpeed: 1.0, fact: "Sao Mộc là hành tinh lớn nhất...", message: "...giống tớ í là yêu cậu nhiều ấy =)))) ." },
        { id: 'saturn', type: 'planet', name: 'Sao Thổ', texture: assetPaths.saturn, ringTexture: assetPaths.saturnRing, size: 15, orbitRadius: 350, orbitSpeed: 0.3, spinSpeed: 0.9, fact: "Sao Thổ nổi tiếng với vành đai tuyệt đẹp của nó...", message: "...biết đâu sau này mình cũng có thêm nhiều kỷ niệm vòng quanh nhau ha =)))." },
        { id: 'neptune', type: 'planet', name: 'Sao Hải Vương', texture: assetPaths.neptune, size: 8, orbitRadius: 450, orbitSpeed: 0.2, spinSpeed: 0.6, fact: "Sao Hải Vương là hành tinh xa mặt trời nhất...", message: "...nhưng dù ở xa thế nào thì khoảng cách vẫn chưa bao giờ là vấn đề." }
    ];

    const isMobile = window.innerWidth <= 768;
    const config = { maxParticles: isMobile ? 30 : 50, particleInterval: isMobile ? 300 : 200 };
    const messages = ["U are the best", "Cố lên !!!", "Yêu cậu", "Love u so much", "nhớ cậu nhiều", "tớ luôn bên cạnh cậu", "💖", "💕", "🌟", "✨", "You're my angel", "Đừng bỏ cuộc nhé !!!", "I'm alws here", "😘", "🥰", "❤️", "💘", "💝", "💞"];
    const birthdayMessages = ["Happy Birthday!", "Chúc mừng sinh nhật!", "🎂", "🎉", "Tuổi mới vui vẻ!"];
    const heartSymbols = ["♥", "💖", "💕", "🌟", "✨"];
    const textStyles = ['love', 'date', 'special'];
    const activeParticles = new Set();
    
    let upNextPlaylist = []; let upNextIndex = 0;
    let isBirthdayMode = false; let isLetterModeActive = false; let typingInterval = null;
    let wavesurfer;
    let scene, camera, renderer, controls;
    let starfield;
    const planetObjects = [];
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const textureLoader = new THREE.TextureLoader();
    let isAnimatingCamera = false;
    let previousCameraState = null;

    // =================================================================
    // PHẦN 3: CÁC HÀM TIỆN ÍCH VÀ HIỆU ỨNG
    // =================================================================
    
    function shuffleArray(array) { let currentIndex = array.length, randomIndex; while (currentIndex != 0) { randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]; } return array; }
    function formatTime(seconds) { const minutes = Math.floor(seconds / 60); const secs = Math.floor(seconds % 60); return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; }
    function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    function createShootingStars(count = 4) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 80}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 7}s`;
            star.style.transform = `rotate(${Math.random() * 60 - 75}deg)`;
            shootingStarsContainer.appendChild(star);
        }
    }
    
    function animateCamera(targetPosition, targetLookAt, duration = 1500, onComplete = null) {
        if (isAnimatingCamera) return;
        isAnimatingCamera = true;
        const startPosition = camera.position.clone();
        const startLookAt = controls.target.clone();
        const clock = new THREE.Clock();
        function animate() {
            const elapsedTime = clock.getElapsedTime();
            const progress = Math.min(elapsedTime * 1000 / duration, 1);
            const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
            camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
            controls.target.lerpVectors(startLookAt, targetLookAt, easeProgress);
            if (progress < 1) { requestAnimationFrame(animate); } else { isAnimatingCamera = false; if (onComplete) onComplete(); }
        }
        animate();
    }
    
    function createTextParticle() {
        if (!galaxy || activeParticles.size >= config.maxParticles) return;
        const messagesToUse = isBirthdayMode ? birthdayMessages : messages;
        const isHeart = isBirthdayMode ? Math.random() > 0.5 : Math.random() > 0.7;
        const particle = document.createElement('div');
        if (isHeart) { particle.className = 'text-particle heart'; particle.textContent = isBirthdayMode ? getRandomItem(["🎉", "🎂", "💖"]) : getRandomItem(heartSymbols); } 
        else { const message = getRandomItem(messagesToUse); const style = isBirthdayMode ? 'birthday' : getRandomItem(textStyles); particle.className = `text-particle ${style}`; particle.textContent = message; }
        const xPos = Math.random() * 100; const zPos = (Math.random() - 0.5) * 500; const duration = Math.random() * 2 + 3;
        const size = isMobile ? 10 : 12; const variation = isMobile ? 5 : 6;
        particle.style.left = `${xPos}%`; particle.style.fontSize = `${Math.random() * variation + size}px`;
        galaxy.appendChild(particle); activeParticles.add(particle);
        const startY = -150; const endY = window.innerHeight + 150;
        const animation = particle.animate([
            { transform: `translate3d(0, ${startY}px, ${zPos}px) translateX(-50%)`, opacity: 0 },
            { opacity: 0.9, offset: 0.1 }, { opacity: 0.9, offset: 0.9 },
            { transform: `translate3d(0, ${endY}px, ${zPos}px) translateX(-50%)`, opacity: 0 }
        ], { duration: duration * 1000, easing: 'linear' });
        animation.onfinish = () => { particle.remove(); activeParticles.delete(particle); };
    }

    function setupGyroControls() {
        if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
            window.addEventListener('deviceorientation', (event) => {
                const { beta, gamma } = event; bodyEl.classList.add('gyro-active');
                const clampedBeta = Math.max(-45, Math.min(45, beta)); const clampedGamma = Math.max(-45, Math.min(45, gamma));
                bodyEl.style.setProperty('--gyro-rotate-x', `${clampedBeta * -0.3}deg`); bodyEl.style.setProperty('--gyro-rotate-y', `${clampedGamma * 0.3}deg`);
            });
        }
    }
    function setupMouseParallax() {
        if (!('ontouchstart' in window)) {
            window.addEventListener('mousemove', (event) => {
                const { clientX } = event; const width = window.innerWidth;
                const xPercent = (clientX / width - 0.5) * 2;
                bodyEl.style.setProperty('--parallax-x-far', `${xPercent * -5}px`); bodyEl.style.setProperty('--parallax-x-mid', `${xPercent * -15}px`); bodyEl.style.setProperty('--parallax-x-near', `${xPercent * -25}px`);
            });
        }
    }
    
    // =================================================================
    // PHẦN 4: LOGIC GIAO DIỆN NGƯỜI DÙNG (UI)
    // =================================================================
    
    function typewriterEffect(elementsToType, onComplete = () => {}) {
        if (typingInterval) clearInterval(typingInterval);
        let elementIndex = 0; let charIndex = 0;
        const type = () => {
            if (elementIndex >= elementsToType.length) { if (onComplete) onComplete(); return; }
            const currentItem = elementsToType[elementIndex]; const fullText = currentItem.text;
            if (fullText.charAt(charIndex) === '<') {
                const closingTagIndex = fullText.indexOf('>', charIndex);
                if (closingTagIndex !== -1) { currentItem.element.innerHTML += fullText.substring(charIndex, closingTagIndex + 1); charIndex = closingTagIndex + 1; }
            }
            if (charIndex < fullText.length) {
                const char = fullText.charAt(charIndex); currentItem.element.innerHTML += char; charIndex++;
                let speed = 50;
                if (char === '.' || char === '!') speed = 500;
                if (char === ',') speed = 250;
                typingInterval = setTimeout(type, speed);
            } else { elementIndex++; charIndex = 0; setTimeout(type, 500); }
        };
        const skipTyping = () => {
            clearTimeout(typingInterval);
            elementsToType.forEach(item => { item.element.innerHTML = item.text; });
            letterContainer.removeEventListener('click', skipTyping);
            if (onComplete) onComplete();
        };
        letterContainer.addEventListener('click', skipTyping, { once: true });
        elementsToType.forEach(item => item.element.innerHTML = '');
        type();
    }

    let fadeInterval = null;
    function stopFade() { if (fadeInterval) { clearInterval(fadeInterval); fadeInterval = null; } }
    function fadeOut(callback) {
        stopFade(); if (!wavesurfer) { if (callback) callback(); return; }
        const currentVolume = wavesurfer.getVolume(); if (currentVolume === 0) { wavesurfer.pause(); if (callback) callback(); return; }
        fadeInterval = setInterval(() => {
            let newVolume = wavesurfer.getVolume() - 0.1;
            if (newVolume <= 0) { newVolume = 0; stopFade(); wavesurfer.pause(); if (callback) callback(); }
            wavesurfer.setVolume(newVolume);
        }, 50);
    }
    function fadeIn() {
        stopFade(); if (!wavesurfer) return;
        const targetVolume = parseFloat(volumeSlider.value); wavesurfer.setVolume(0); wavesurfer.play();
        fadeInterval = setInterval(() => {
            let newVolume = wavesurfer.getVolume() + 0.1;
            if (newVolume >= targetVolume) { newVolume = targetVolume; stopFade(); }
            wavesurfer.setVolume(newVolume);
        }, 50);
    }
    
    function playTrack(track, isSpecialLetterTrack = false) {
        if (!track || !track.file) { console.error("Lỗi: Đang cố gắng phát một bài hát không hợp lệ.", track); playNextInMix(); return; }
        if (!wavesurfer) {
            wavesurfer = WaveSurfer.create({ container: waveformContainer, waveColor: 'rgba(200, 200, 200, 0.5)', progressColor: '#ff6b9d', height: 50, barWidth: 2, barRadius: 3, cursorWidth: 0, responsive: true, hideScrollbar: true, media: audio, });
            wavesurfer.on('finish', () => { if (isLetterModeActive) { isLetterModeActive = false; } if (isBirthdayMode && birthdayData) { playTrack(birthdayData.song); } else { playNextInMix(); } });
            wavesurfer.on('audioprocess', () => { currentTimeEl.textContent = formatTime(wavesurfer.getCurrentTime()); });
            wavesurfer.on('error', (err) => { console.error(`Lỗi WaveSurfer: ${err}`); songTitleEl.textContent = "Bài hát lỗi, tự chuyển bài..."; setTimeout(playNextInMix, 2000); });
            wavesurfer.on('play', () => playPauseBtn.textContent = '❚❚');
            wavesurfer.on('pause', () => playPauseBtn.textContent = '▶');
        }
        stopFade(); wavesurfer.pause();
        songTitleEl.textContent = "Đang tải bài hát..."; currentTimeEl.textContent = "0:00"; durationEl.textContent = "0:00";
        wavesurfer.load(track.file); updateFavoriteButton(track.file);
        wavesurfer.once('ready', () => {
            songTitleEl.textContent = track.title; durationEl.textContent = formatTime(wavesurfer.getDuration());
            if (isSpecialLetterTrack) { fadeIn(); } else { wavesurfer.play(); }
        });
    }

    function createDailyMix() { if (!mainPlaylist || mainPlaylist.length === 0) return; const playlistToShuffle = [...mainPlaylist]; upNextPlaylist = shuffleArray(playlistToShuffle); upNextIndex = 0; }
    function playNextInMix() { if (upNextPlaylist.length === 0) createDailyMix(); if (upNextPlaylist.length > 0) { playTrack(upNextPlaylist[upNextIndex]); upNextIndex = (upNextIndex + 1) % upNextPlaylist.length; } }
    function playPrevInMix() { if (upNextPlaylist.length === 0) return; upNextIndex -= 2; if (upNextIndex < 0) upNextIndex = upNextPlaylist.length + upNextIndex; playTrack(upNextPlaylist[upNextIndex]); upNextIndex = (upNextIndex + 1) % upNextPlaylist.length; }
    function fadeToSpecialTrack(specialSong) { isLetterModeActive = true; fadeOut(() => { playTrack(specialSong, true); }); }
    function getFavorites() { return JSON.parse(localStorage.getItem('favoriteSongs')) || []; }
    function saveFavorites(favorites) { localStorage.setItem('favoriteSongs', JSON.stringify(favorites)); }
    function updateFavoriteButton(file) { const favorites = getFavorites(); if (favorites.includes(file)) { favoriteBtn.classList.add('favorited'); } else { favoriteBtn.classList.remove('favorited'); } }
    function runBirthdayCheck() { if (!birthdayData) return false; const now = new Date(); if (now.getDate() === birthdayData.day && now.getMonth() + 1 === birthdayData.month) { isBirthdayMode = true; return true; } return false; }
    
    function activateBirthdayMode() {
        const btn = document.getElementById('special-day-btn'); btn.classList.remove('hidden');
        const celebrationOverlay = document.getElementById('birthday-celebration');
        setTimeout(() => { celebrationOverlay.classList.remove('hidden'); celebrationOverlay.style.opacity = '1'; }, 1000);
        setTimeout(() => { celebrationOverlay.style.opacity = '0'; setTimeout(() => celebrationOverlay.classList.add('hidden'), 1000); }, 5000);
        btn.addEventListener('click', () => openLetter(birthdayData.letter, birthdayData.song, true));
    }

    function getLetterForCurrentTime() {
        if (!dailyLetters || !dailySongs || !daytimeLetters) return null;
        const now = new Date(); const hour = now.getHours(); const day = now.getDate();
        const daytimeLetterData = daytimeLetters.find(l => l.day === day);
        if (daytimeLetterData && hour >= 0 && hour < 22) { return { letter: daytimeLetterData, song: null }; }
        const dailyLetterData = dailyLetters.find(l => l.day === day);
        const dailySongData = dailySongs.find(s => s.day === day);
        if (dailyLetterData && dailySongData && hour >= 22) { return { letter: dailyLetterData, song: dailySongData.song }; }
        return null;
    }

    function checkAndSetupLetterButton() {
        const btn = document.getElementById('special-day-btn');
        const letterInfo = getLetterForCurrentTime();
        if (letterInfo) { btn.classList.remove('hidden'); btn.addEventListener('click', () => openLetter(letterInfo.letter, letterInfo.song)); }
    }

    function openLetter(letterData, specialSong = null, isBirthday = false) {
        if (!letterContainer || !letterContainer.classList.contains('hidden')) return;
        const letterContentDiv = document.querySelector('.letter-content');
        const titleEl = document.createElement('h1'); const signatureEl = document.createElement('p'); signatureEl.className = 'signature';
        const closeBtn = document.createElement('button'); closeBtn.id = 'close-letter-btn'; closeBtn.innerHTML = '×';
        const tempDiv = document.createElement('div'); tempDiv.innerHTML = letterData.content;
        const pElements = Array.from(tempDiv.querySelectorAll('p'));
        letterContentDiv.innerHTML = ''; // Xóa sạch nội dung cũ
        letterContentDiv.append(closeBtn, titleEl, ...pElements, signatureEl);
        const signatureText = isBirthday ? 'Yêu cậu nhất luôn,<br>tun' : (specialSong ? 'Yêu cậu rất nhiều,<br>tun' : 'Luôn bên cạnh cậu,<br>tun');
        const elementsToType = [{ element: titleEl, text: letterData.title }];
        pElements.forEach(p => { elementsToType.push({ element: p, text: p.innerHTML }); });
        elementsToType.push({ element: signatureEl, text: signatureText });
        letterContainer.classList.remove('hidden');
        typewriterEffect(elementsToType);
        if (specialSong && !isBirthday) { fadeToSpecialTrack(specialSong); }
        closeBtn.addEventListener('click', () => {
            letterContainer.classList.add('hidden');
            if (typingInterval) clearTimeout(typingInterval);
            if (isLetterModeActive) { isLetterModeActive = false; fadeOut(() => { playNextInMix(); }); }
        }, { once: true });
    }

    function adjustLetterButtonPosition() {
        const btn = document.getElementById('special-day-btn');
        if (btn && waveformControls && !waveformControls.classList.contains('hidden')) {
            const playerHeight = waveformControls.offsetHeight; const bottomMargin = 15; const desiredGap = 20;
            btn.style.bottom = `${playerHeight + bottomMargin + desiredGap}px`;
        }
    }

    function setupUIEventListeners() {
        const startAudio = () => {
            if (wavesurfer && wavesurfer.isPlaying()) return;
            if (!wavesurfer) { if (isBirthdayMode && birthdayData) { playTrack(birthdayData.song); } else { createDailyMix(); playNextInMix(); } } 
            else { wavesurfer.play(); }
            overlay.style.display = 'none';
            waveformControls.classList.remove('hidden'); settingsToggleBtn.classList.remove('hidden');
            adjustLetterButtonPosition();
        };
        overlay.addEventListener('click', startAudio, { once: true });
        closeInfoBtn.addEventListener('click', () => {
            infoCard.classList.add('hidden');
            if (previousCameraState && !isAnimatingCamera) {
                animateCamera(previousCameraState.position, previousCameraState.target, 1200, () => {
                    previousCameraState = null; controls.minDistance = 50;
                });
            }
        });
        nextBtn.addEventListener('click', playNextInMix); prevBtn.addEventListener('click', playPrevInMix);
        playPauseBtn.addEventListener('click', () => { if (wavesurfer) wavesurfer.playPause(); });
        favoriteBtn.addEventListener('click', () => { if (!wavesurfer || !wavesurfer.getMediaElement().src) return; let favorites = getFavorites(); const currentUrl = wavesurfer.getMediaElement().src; if (favorites.includes(currentUrl)) { favorites = favorites.filter(song => song !== currentUrl); } else { favorites.push(currentUrl); } saveFavorites(favorites); updateFavoriteButton(currentUrl); });
        settingsToggleBtn.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
        volumeSlider.addEventListener('input', e => { if (wavesurfer) wavesurfer.setVolume(e.target.value); });
    }

    // =================================================================
    // PHẦN 5: THẾ GIỚI 3D (THREE.JS)
    // =================================================================

    function initThreeJS() {
        scene = new THREE.Scene(); camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 200; renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 2); scene.add(pointLight);
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; controls.minDistance = 50; controls.maxDistance = 500;
        createStarfield(); createSolarSystem();
        window.addEventListener('resize', onWindowResize); window.addEventListener('click', onClick);
        animate();
    }
    
    function createStarfield() { const starGeometry = new THREE.SphereGeometry(1000, 64, 64); const starMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load(assetPaths.stars), side: THREE.BackSide }); starfield = new THREE.Mesh(starGeometry, starMaterial); scene.add(starfield); }
    
    function createSolarSystem() {
        celestialData.forEach(data => {
            const pivot = new THREE.Object3D(); scene.add(pivot);
            const geometry = new THREE.SphereGeometry(data.size, 32, 32); let material;
            if (data.type === 'star') { material = new THREE.MeshBasicMaterial({ map: textureLoader.load(data.texture) }); } 
            else { material = new THREE.MeshStandardMaterial({ map: textureLoader.load(data.texture) }); }
            const mesh = new THREE.Mesh(geometry, material); mesh.position.x = data.orbitRadius;
            mesh.userData = { ...data, mesh: mesh }; pivot.add(mesh);
            planetObjects.push({ mesh, pivot, orbitSpeed: data.orbitSpeed, spinSpeed: data.spinSpeed });
            if (data.ringTexture) {
                const ringGeometry = new THREE.RingGeometry(data.size * 1.2, data.size * 2, 64);
                const ringMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load(data.ringTexture), side: THREE.DoubleSide, transparent: true });
                const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial); ringMesh.rotation.x = -0.5 * Math.PI; mesh.add(ringMesh);
            }
        });
    }

    function animate() {
        requestAnimationFrame(animate); const delta = 0.01;
        planetObjects.forEach(obj => { obj.mesh.rotation.y += obj.spinSpeed * delta; obj.pivot.rotation.y += obj.orbitSpeed * delta; });
        if (starfield) starfield.rotation.y -= 0.0001;
        controls.update(); renderer.render(scene, camera);
    }

    function onWindowResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); }

    function onClick(event) {
        if (!infoCard.classList.contains('hidden') || !letterContainer.classList.contains('hidden') || isAnimatingCamera) return;
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1; mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(planetObjects.map(p => p.mesh));
        if (intersects.length > 0) { showPlanetInfo(intersects[0].object.userData); }
    }

    function showPlanetInfo(data) {
        if (isAnimatingCamera) return;
        previousCameraState = { position: camera.position.clone(), target: controls.target.clone() };
        const planetPosition = new THREE.Vector3(); data.mesh.getWorldPosition(planetPosition);
        const direction = new THREE.Vector3().subVectors(camera.position, planetPosition).normalize();
        const distance = data.size * 4;
        const cameraTargetPosition = planetPosition.clone().add(direction.multiplyScalar(distance));
        controls.minDistance = data.size * 2;
        animateCamera(cameraTargetPosition, planetPosition);
        infoCardTitle.textContent = data.name; infoCardFact.textContent = data.fact; infoCardMessage.textContent = data.message;
        infoCard.style.setProperty('--glow-color', data.glowColor || '#fff');
        const playerHeight = waveformControls.classList.contains('hidden') ? 0 : waveformControls.offsetHeight;
        infoCard.style.bottom = `${playerHeight + 30}px`;
        infoCard.classList.remove('hidden');
    }

    // =================================================================
    // PHẦN 6: VÒNG LẶP CHÍNH VÀ KHỞI TẠO
    // =================================================================

    let lastParticleTime = 0;
    function mainLoop(timestamp) {
        if (timestamp - lastParticleTime > config.particleInterval) { createTextParticle(); lastParticleTime = timestamp; }
        requestAnimationFrame(mainLoop);
    }

    function init() {
        runBirthdayCheck();
        setupUIEventListeners();
        initThreeJS();
        createShootingStars(isMobile ? 3 : 5);
        setupGyroControls();
        setupMouseParallax();
        requestAnimationFrame(mainLoop);
        if (isBirthdayMode) { activateBirthdayMode(); } else { checkAndSetupLetterButton(); }
        setTimeout(() => { loadingScreen.classList.add('loaded'); }, 3000);
    }

    init();
});
