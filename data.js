       // =================================================================
    // PHẦN 2: DỮ LIỆU CÁ NHÂN HÓA VÀ CÀI ĐẶT
    // =================================================================
    export const airportData = {
        'HAN': { name: "Sân bay Quốc tế Nội Bài", city: "Hà Nội", coords: [21.2215, 105.8072] },
        'CTU': { name: "Sân bay Quốc tế Thiên Phủ Thành Đô", city: "Thành Đô", coords: [30.3135, 104.4452] },
        'SGN': { name: "Sân bay Quốc tế Tân Sơn Nhất", city: "TP. Hồ Chí Minh", coords: [10.8188, 106.6582] },
    };
    /* --- DỮ LIỆU SINH NHẬT --- */
    export const birthdayData = {
        day: 9, month: 6,
        letter: {
            title: "Gửi em, cô gái tuyệt vời nhất từng được sinh ra =))) nghe hơi sến tí nhưng mà thôi",
            content: `<p>Hôm nay là ngày sinh nhật của em, là ngày mà mẹ em đã sinh ra em =))) anh biết nhưng mà ý là kiểu ngày mà mẹ em đẻ ra thiên thần luôn rồi ấy kiểu em tuyệt vời mà xinh xắn lại còn giỏi giang nữa omg</p><p> Có lẽ nếu xét về tình cảm dành cho em chắc anh thua mỗi mẹ em thôi ấy, anh yêu em nhiều lắm luôn í. Thôi anh nhắn v th tại anh viết thư tay cho em rồi mà =)) đọc thư tay nó mới tình cảm hơn chứ <p>Chúc em sinh nhật vui vẻ!</p></p>`
        },
        song: { file: "https://treuah.netlify.app/ordinary.mp3", title: "Ordinary - Alex Warren" }
    };

    /* --- PLAYLIST CHÍNH  --- */
    export const mainPlaylist = [ 
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

    /* --- DANH SÁCH BÀI HÁT HÀNG NGÀY --- */
    export const dailySongs = [ 
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

 /* --- DANH SÁCH THƯ BUỔI TỐI --- */
    export const dailyLetters = [ 
        { day: 1, title: "hello cậu, ngày học đầu tiên của tháng kết thúc rồi", 
            content: `<p>Vậy là một ngày nữa ở Thành Đô đã qua. Cậu đã vất vả, mệt mỏi rồi. Mọi thứ hôm nay vẫn ổn chứ? Có điều gì cậu muốn kể cho tớ nghe không?</p><p>Tuy là ở xa, nhưng mà tớ vẫn luôn ở đây lắng nghe cậu. Giờ thì nghỉ ngơi thôi nhé </p>` },
        { day: 2, title: "xin cả chào nhesee, ngày thứ hai của cậu mệt không?", 
            content: `<p>Tan học rồi, chắc cậu mệt lắm. Đừng ôm hết mọi mệt mỏi một mình nhé, hãy chia sẻ với tớ. Tớ không ở cạnh để chăm sóc cậu được, nên chỉ có thể lắng nghe thôi và an ủi cậu thôi.</p><p>Hôm nay của tớ ở Việt Nam cũng hơi mệt mỏi một chút, nhưng mà kiểu có cậu ấy nên cảm giác thoải mái v =)) Có chuyện thì hãy kể tớ nhé, tớ luôn ở đây ❤️</p>` },
        { day: 3, title: "Gửi cậu, ngày thứ ba, lại một ngày nỗ lực rồi", 
            content: `<p>Tớ biết việc học và thích nghi với môi trường mới, các bạn mới không dễ dàng. Tớ tự hào về cậu nhiều lắm. Mỗi ngày trôi qua, cậu lại càng giỏi giang hơn một chút đấy.</p><p>Hôm nay có gì vui hay có gì khiến cậu mệt mỏi, tức giận không? Kể cho tớ nghe, lov u so much luôn</p>` },
        { day: 4, title: "Ngày thứ 4, tớ lại nhớ khoảng khắc đấy =))) dyeu v", 
            content: `<p>Tối nay, tớ lại nghĩ về chiếc huy chương cậu đưa tớ, kiểu nó làm cảm giác như cậu đang ở gần tớ vô cùng luôn ấy =)) cảm giác nhớ cậu v</p><p>Ngày hôm nay của cậu thế nào thế? Việc học có căng thẳng, khó không thế? Cố lên dii, im alws here </p><p> Có chuyện gì hãy nói với tớ nhé </p>` },
        { day: 5, title: "Tan học rồi, gác lại mọi thứ và thư giãn thôi", 
            content: `<p>Một ngày nữa đã qua, cậu đã làm rất tốt rồi. Bây giờ là thời gian để nghỉ ngơi. Cậu đã ăn tối chưa? Nhớ đừng bỏ bữa nhé.</p><p>Tớ hy vọng những dòng chữ này có thể xoa dịu đi phần nào mệt mỏi của cậu. Ngủ thật ngon để mai có nhiều năng lượng nhé.</p>` },
        { day: 6, title: "Gửi cậu, hôm nay là thứ 2 đầu tuần", 
            content: `<p>Tuần mới vui vẻ nhé !!!! Cậu đang làm rất tốt rồi, cố gắng lên. Ngày đầu tuần phải luôn thật vui vẻ nhé để cả tuần mới akelo okela được </p><p>Đầu tuần có chuyện gì không thế? Bị thích nghe cậu kể chuyện ấy =)) Chúc cậu buổi tối vui vẻ and love me 2 =)) </p>` },
        { day: 7, title: "Gửi cậu, tối thứ bảy ở Thành Đô...", 
            content: `<p>Ngày nghỉ đầu tiên của cậu thế nào? Có đi đâu chơi hay khám phá được món gì ngon không? Tớ tò mò về cuộc sống của cậu ở bên đó lắm.</p><p>Dù chúng ta xa nhau, nhưng được nghe cậu kể về một ngày của mình làm tớ cảm thấy khoảng cách như ngắn lại. Chúc cậu ngủ ngon.</p>` },
        { day: 8, title: "helo bae, ê í là cậu yêu vkl =)) ", 
            content: `<p>Thế là đầu tuần cuối cùng ở Việt Nam =))) nghe cứ hụt hẫng tdn ấy cậu ơi nma tớ hy vọng cậu đừng khóc nhé =)) nhớ lời tớ dặn về khóc khi nào rồi đấy =))) .</p><p>Đừng lo lắng quá nhé, Bên cạnh cậu còn gia đình, còn tớ nữa. Tớ luôn tin ở cậu. Mạnh mẽ lên !!! love u so much luôn </p>` },
        { day: 9, title: "Hê và lô cậu =))) ê nma cậu yêu vl ", 
            content: `<p>Hoa đẹp chứ? Ê ý là thấy tone màu đấy hợp cả cậu vl =)) kiểu xinh xinh lại còn dịu dàng nữa omg tuyệt. Cậu alws phải vui vẻ, same cái vibe với bông hoa nhé =)) kiểu là luôn tươi cười, vui vẻ như cách bông hoa nở rộ nhé. Tớ yêu cậu nhiều lắm luôn ý </p>` },
        { day: 10, title: "Gửi cậu, còn 3 ngày nữa là cậu lên đường rùi", 
            content: `<p>Công nhận thời gian trôi nhanh thật =))) mới ngày nào còn mới nói chuyện vậy mà đã chuẩn bị đi rồi huhu không phải buồn 1 chút nữa rồi mà buồn nhiều nhiều chút. Nhưng mà trộm vía mỗi tối được nói chuyện với cậu là kiểu vui vl ấy =))  Love you so so so so so.... much luôn.</p>` },
        { day: 11, title: "Còn 2 ngày nữa, ối giời ơi...",
            content: `<p>ê sao trôi nhanh thế dcm , nhớ ơi nhớ, nhớ b hà nhiều chút =))) chắc khả năng không cho đi nữa thật chứ nhớ ơi nhớ, muốn ôm tiếp =)))) thích qs, thích ôm, thích gn kiss, thích nắm tay, omg tuyệt tóm lại là Nhớ nhiều nhiều chút =)) ước được bên cạnh suốt ngày =))))))))))))) </p>` },
        { day: 12, title: "Nhanh thật chưa gì còn hơn 17 tiếng nữa...", 
            content: `<p>Cố lên, không buồn tớ vẫn luôn ở đây với cậu mà, cố lên nào, không được khóc nhé, không được buồn, bạn Tùng Anh sẽ ở nhà ngoan ngoãn, yên tâm dii b yêu sẽ không để cậu phải hối hận hay là bài học đắt giá nhất đâu. Tớ yêu cậu nhiều lắm, tớ muốn xây dựng một mối quan hệ bền vững, tại tớ thấy cậu match vl =)) Tớ thương cậu nhiều lắm luôn í, nhớ lời tớ dặn không được khóc khi không có tớ ở bên, mạnh mẽ lên!!!!</p>` },
        { day: 13, title: "Thế là bay rùi, omg sao dcm nhanh thế", 
            content: `<p>Buồn quá, bae đi rồi buồn vl, không dám nói tại sao không gặp sớm hơn, nhưng mà biết đâu số phận sắp đặt để lần này có thể tiến xa hơn idk bỏ di không biết nữa kệ diii =))) but i want to say that  i love u so much, i miss u. Nhưng mà sang đấy phải cố gắng lên nhé, mạnh mẽ lên, chăm ngoan, học giỏi và đặc biệt phải ăn uống đầy đủ nhaaa tớ luôn ở bên cạnh cậu mà. À với cả sang đấy, có vẻ như cậu vừa đáp sân bay đúng khoongg !!!!, hay là về ktx rùi, tớ kbt nữa :))) nma th kệ dii ngủ sớm dii nha, hnay cậu mệt rồi. Tớ yêu cậu nhiều lắm đấy.</p>` },
        { day: 14, title: "Thế nào rùi, hôm nay của cậu bên đấy thế nào?", 
            content: `<p>Mới hôm qua còn gặp, mà giờ đã bên nước khác rồi omg sao mà nhanh v trời ơi, ê í là bị buồn í, cảm giác hụt hẫng vl =)) bị nhớ nhiều chút cậu ơi... i miss u so much luôn, sang bên đấy nhớ ăn uống đầy đủ nhé đặc biệt là nhớ phải uống nước đầy đủ nhé tại bae bị đau dạ dày đấy !!! nhớ nhee, yêu lắm í .</p>` },
        { day: 15, title: "Gửi cậu, giữa tháng rồi này...", 
            content: `<p>Nửa tháng rồi! Mỗi tối đọc thư là một lần tớ cảm thấy chúng ta gần nhau hơn. Đừng ngần ngại kể cho tớ nghe mọi thứ nhé, tớ luôn ở đây. Hôm nay của cậu thế nào?</p>` },
        { day: 16, title: "Gửi cậu, tối thứ Bảy an lành", 
            content: `<p>Ngày nghỉ thứ Bảy của cậu trôi qua vui vẻ chứ? Có khám phá được điều gì mới mẻ không? Kể tớ nghe với, tớ muốn được nhìn Thành Đô qua lời kể của cậu.</p>` },
        { day: 17, title: "Gửi cậu, tối Chủ nhật, sẵn sàng cho tuần mới", 
            content: `<p>Hy vọng cậu đã có một cuối tuần thật ý nghĩa. Giờ thì sạc đầy pin và chuẩn bị cho tuần mới nhé. Đừng lo, dù tuần mới có thế nào thì tối nào cũng có tớ ở đây đợi cậu. Ngủ ngon.</p>` },
        { day: 18, title: "Gửi cậu, ngày thứ mười tám...", 
            content: `<p>Tuần mới bắt đầu rồi. Cậu đã vất vả cả ngày hôm nay. Giờ thì gác lại mọi lo toan và nghỉ ngơi thôi. Có điều gì khiến cậu bận tâm không?</p>` },
        { day: 19, title: "Gửi cậu, ngày thứ mười chín...", 
            content: `<p>Tớ thích nghe giọng cậu, nhưng tớ cũng thích đọc những dòng tin nhắn cậu kể về một ngày của mình. Cảm giác rất bình yên. Hôm nay của cậu thế nào? Ổn cả chứ?</p>` },
        { day: 20, title: "Gửi cậu, ngày thứ hai mươi...", 
            content: `<p>Hai mươi ngày rồi, thời gian trôi nhanh thật. Chắc hẳn việc học đôi khi cũng áp lực. Nhớ rằng cậu không bao giờ một mình nhé, luôn có tớ ở đây. Nghỉ ngơi thôi. Ngủ ngon nhé.</p>` },
        { day: 21, title: "Gửi cậu, ngày thứ hai mươi mốt...", 
            content: `<p>Hôm nay cậu có cười nhiều không? Tớ hy vọng là có. Niềm vui của cậu cũng là niềm vui của tớ đó. Giờ thì nghỉ ngơi và mơ những giấc mơ thật đẹp nhé.</p>` },
        { day: 22, title: "Gửi cậu, ngày thứ hai mươi hai...", 
            content: `<p>Lại sắp hết một tuần nữa rồi. Cậu đã làm việc rất chăm chỉ. Hãy tự hào về bản thân nhé. Tớ cũng tự hào về cậu. Chúc cậu một buổi tối thật thư giãn.</p>` },
        { day: 23, title: "Gửi cậu, ngày thứ hai mươi ba...", 
            content: `<p>Hôm nay ở Việt Nam trời mưa, tớ lại nghĩ không biết ở Thành Đô thời tiết thế nào, cậu có mang đủ áo ấm không. Lo cho cậu quá. Hôm nay của cậu ổn chứ?</p>` },
        { day: 24, title: "Gửi cậu, tối Chủ nhật cuối cùng của tháng", 
            content: `<p>Một ngày nghỉ nữa lại sắp qua. Hy vọng cậu đã có một ngày thật vui. Hãy ngủ một giấc thật sâu để tuần cuối cùng của tháng thật bùng nổ nhé. Ngủ ngon.</p>` },
        { day: 25, title: "Gửi cậu, ngày thứ hai mươi lăm...", 
            content: `<p>Tuần cuối cùng của tháng rồi. Chắc hẳn cũng có nhiều bài vở cần hoàn thành. Cứ từ từ làm nhé, đừng vội. Mệt thì nghỉ, và nhớ là có tớ ở đây. Thương cậu.</p>` },
        { day: 26, title: "Gửi cậu, ngày thứ hai mươi sáu...", 
            content: `<p>Tớ vừa xem ảnh Thành Đô trên mạng và tự hỏi không biết cậu đang ở góc nào của thành phố đó. Mong đến ngày tớ có thể đến đó cùng cậu. Hôm nay cậu đã vất vả rồi. Ngủ ngon nhé.</p>` },
        { day: 27, title: "Gửi cậu, ngày thứ hai mươi bảy...", 
            content: `<p>Cảm ơn cậu vì đã luôn là một cô gái kiên cường. Yêu xa cần rất nhiều nỗ lực, và cậu đang làm rất tốt phần của mình. Tớ trân trọng điều đó lắm. Chúc cậu ngủ ngon.</p>` },
        { day: 28, title: "Gửi cậu, ngày thứ hai mươi tám...", 
            content: `<p>Chỉ còn vài ngày nữa là hết tháng. Nhìn lại một tháng qua, cậu thấy mình đã trưởng thành hơn nhiều không? Với tớ, một tháng qua tớ thấy mình thương cậu nhiều hơn. Nghỉ ngơi đi nhé.</p>` },
        { day: 29, title: "Gửi cậu, ngày thứ hai mươi chín...", 
            content: `<p>Hôm nay có điều gì làm cậu vui nhất? Kể cho tớ nghe đi, tớ muốn được vui cùng cậu. Sau một ngày dài, hãy để tâm trí được nghỉ ngơi nhé. Chúc cậu mơ đẹp.</p>` },
        { day: 30, title: "Gửi cậu, tối ngày áp chót của tháng", 
            content: `<p>Ngày mai là hết tháng rồi. Cảm ơn cậu vì đã để tớ đồng hành trong suốt một tháng vừa qua. Mỗi tối nói chuyện với cậu đều là một điều quý giá. Hôm nay cậu đã làm rất tốt. Ngủ ngon nhé.</p>` },
        { day: 31, title: "Gửi cậu, khép lại một tháng xa nhau", 
            content: `<p>Tháng 10 kết thúc rồi. Một tháng qua cậu đã rất kiên cường và giỏi giang. Tớ tự hào về cậu lắm. Cảm ơn vì đã luôn chia sẻ cùng tớ dù chúng ta ở xa. Cùng nhau chào đón tháng 11 nhé. Ngủ thật ngon, cô gái của tớ.</p>` },
    ];

    /* --- DANH SÁCH THƯ BAN NGÀY  --- */
    export const daytimeLetters = [ 
        { day: 1, title: "Gửi cậu, ngày đầu tháng tốt lành nhé!", 
            content: `<p>Bắt đầu tháng mới ở Thành Đô, chúc cậu mọi việc đều suôn sẻ. Tớ gửi một chút năng lượng từ Việt Nam qua cho cậu đây. Cố lên nhé!</p>` },
        { day: 2, title: "Gửi cậu, ngày thứ hai...", 
            content: `<p>Chúc cậu một ngày học tập hiệu quả. Đừng quên uống đủ nước và cười thật tươi nha. Tối mình nói chuyện sau.</p>` },
        { day: 3, title: "Gửi cậu, ngày thứ ba...", 
            content: `<p>Hôm nay cậu có môn gì khó không? Cứ bình tĩnh xử lý từng chút một nhé, tớ tin cậu làm được. Fighting!</p>` },
        { day: 4, title: "Gửi cậu, ngày thứ tư...", 
            content: `<p>Chỉ là một lời nhắn nhỏ để nói rằng, tớ đang nghĩ đến cậu. Chúc cậu một ngày học vui vẻ!</p>` },
        { day: 5, title: "Gửi cậu, ngày thứ năm...", 
            content: `<p>Cố lên sắp cuối tuần rồi! Mong cậu có một ngày thật nhiều năng lượng và niềm vui. Đừng để bị áp lực quá nhé.</p>` },
        { day: 6, title: "Gửi cậu, ngày thứ sáu trong tháng...", 
            content: `<p>Ngày cuối cùng trong tuần học rồi, cố gắng nốt hôm nay nhé. Tớ ở đây đợi cậu "tan học" nè. Have a good day!</p>` },
        { day: 7, title: "Gửi cậu, ngày thứ bảy...", 
            content: `<p>Cuối tuần rồi! Hôm nay cậu có dự định gì đặc biệt không? Dù làm gì cũng hãy thật vui nhé. Nhớ giữ gìn sức khỏe.</p>` },
        { day: 8, title: "Ê thứ 2 cuối cùng rồi đấy =)) í là t2 cuối ở đây =)) ", 
            content: `<p>Chúc cậu một thứ hai vui vẻ và luôn là kiểu happy, và hehehe luôn có tớ bên cạnh cậu nhaa alws luôn. Tạm gác lại sách vở và yes chuẩn bị thôi nào =)) í là cái thư này cũng cũng bình thường thôi =))) nói lời vẫn cứ akelo hơn =)) </p>` },
        { day: 9, title: "Thứ 3 CUỐI rồi omg nhanh vkl ", 
            content: `<p>Tuần cuối rồi, chúc cậu sang bên đấy mạnh khỏe và cố gắng học hành tốt nhé =)) mặc dù chưa đi đâu nma th kệ di cứ chúc. Cố lên cô gái của tớ =))) </p>` },
        { day: 10, title: "Gửi cậu, ngày giữa tuần cuối ở đây...", 
            content: `<p>dcm sao nhanh thế kbt omg ê nhớ cậu qs đấy buồn vkl sắp di rồi kìa huhuhuhuhuhu buồn nhiều chút nha, nma ksao vẫn còn cậu bên cạnh tớ mà hehehe love u sm</p>` },
        { day: 11, title: "Gửi cậu, còn mỗi 2 ngày nữa thuii...", 
            content: `<p>Ê í là thấy cậu yêu vl, dễ thương quá, ấm từ cái ôm, đến cái nắm tay =)) í là tớ bảo tay cậu nóng là tớ đùa thôi đấy =)) cậu ấm vl, yêu qu, trời oiiii. Muốn kiss tiếp, muốn ôm tiếp, muốn nắm tay tiếp, muốn cậu ở lại với tớ cơ không muốn đi đâu buồn bkl ấy chứ. Nma th kệ diii, để tối nay gặp tiếp ha. love bae so much, i love youuu. đừng buồn vì sắp phải di nhé, im alws by ur side.</p>` },
        { day: 12, title: "Nhanh thật đâu đó còn mỗi hơn 17 tiếng nữa là bắt đầu lên đồ rồi...", 
            content: `<p>Cố lên, mạnh mẽ lên không được buồn nhớ chưa, tớ yêu cậu nhiều lắm, không được khóc, nhớ lời tớ dặn đấy, tớ không muốn cậu khóc đâu biết là sang bên đấy cũng một mình kiểu cô đơn kiểu không có ai bầu bạn cả nhưng mà không sao cả luôn có mọi người bên cạnh mà, còn gia đình, còn bạn Vy, bạn Chi, còn tớ nữa cơ mà. Cố lên, không buồn nhaaa, tớ yêu cậu nhiều lắm so so much luôn. I love u, bae </p>` },
        { day: 13, title: "Haizzz, ngày cuối bên này rồi sao mà nhanh v kbt nữa???? ", 
            content: `<p>Không muốn bae đi một chút nào đâu huhu, muốn bae ở đây cơ, i mít u so much, ilu2, ước gì có thêm thời gian, tớ sẽ dành nhiều thời gian hơn cho cậu, không ngờ mới quen thế này kiểu cũng đang vui tự nhiên lại di du học bị buồn vl ấy chứ :(( chắc tí mà ra sân bay thật thì chắc đứng đấy không nỡ để b Hà đi mất, mà cũng không nỡ để bạn Hà học cao đẳng du lịch =)))) dyeu tht tf kbt nữa, bị thương b Hà nhiều chút, xa nhà để đi học mà lại còn một mình, xung quanh toàn người lạ, không biết nhìn hiền thế có ai bắt nạt không nữa mong là không... th kệ dii bae ơi, i love u so much, cố lên im alws by ur side. let me know when u arrive, ok</p>` },
        { day: 14, title: "Giờ này, chắc cậu đang nghỉ ngơi rồi nhỉ....", 
            content: `<p>Hôm nay bên đấy của bae có mệt mỏi khhoonggg khi mà phải kiểu sắp xếp đồ đạc chuẩn bị các thứ đó.... èo oi sao mà nghe đã thấy mệt rồi ấy =)))) bae nhớ phải ăn uống đầy đủ nha. bae sang bên đấy cố gắng nha, mạnh mẽ leennn keep fighting!!!!! mệt thì có tớ bên cạnh cậu, tớ luôn bên cạnh cậu nhaa alws luôn. I love u so much bae ạ</p>` },
        { day: 15, title: "Gửi cậu, ngày giữa tháng!", 
            content: `<p>Nhanh thật, đã nửa tháng rồi. Chúc cậu một ngày học tập hiệu quả. Nhớ cậu!</p>` },
        { day: 16, title: "Gửi cậu, ngày thứ mười sáu...", 
            content: `<p>Cuối tuần của cậu thế nào? Kể tớ nghe vào tối nay nhé. Giờ thì chúc cậu một ngày thứ Bảy thật vui.</p>` },
        { day: 17, title: "Gửi cậu, ngày chủ nhật an lành", 
            content: `<p>Hôm nay hãy cho phép bản thân được "lười" một chút nhé. Nạp thật nhiều năng lượng cho tuần mới nha cậu.</p>` },
        { day: 18, title: "Gửi cậu, ngày thứ mười tám...", 
            content: `<p>Lại một tuần mới bắt đầu. Chúc cậu mọi sự hanh thông. Nhớ ăn trưa đúng bữa đó!</p>` },
        { day: 19, title: "Gửi cậu, ngày thứ mười chín...", 
            content: `<p>Một lời nhắn nhỏ nhắc cậu đừng ngồi học lâu quá, thỉnh thoảng đứng dậy vươn vai một chút nhé. Tớ lo cho cậu đó.</p>` },
        { day: 20, title: "Gửi cậu, ngày thứ hai mươi...", 
            content: `<p>2/3 chặng đường của tháng rồi. Cậu giỏi lắm. Chúc cậu một ngày học nhẹ nhàng.</p>` },
        { day: 21, title: "Gửi cậu, ngày thứ hai mươi mốt...", 
            content: `<p>Chỉ muốn ghé qua đây và để lại một nụ cười cho cậu. :) Cố lên nhé!</p>` },
        { day: 22, title: "Gửi cậu, ngày thứ hai mươi hai...", 
            content: `<p>Sắp cuối tháng rồi, thời gian bay nhanh thật. Chúc cậu ngày mới tốt lành. Tối mình gặp nhau qua màn hình nhé.</p>` },
        { day: 23, title: "Gửi cậu, ngày thứ hai mươi ba...", 
            content: `<p>Hôm nay tớ... (kể một hoạt động ngắn của cậu). Còn cậu thì sao? Chúc cậu một ngày học vui vẻ, không áp lực.</p>` },
        { day: 24, title: "Gửi cậu, ngày thứ hai mươi bốn...", 
            content: `<p>Chủ nhật vui vẻ nhé cậu. Hôm nay hãy làm điều gì đó khiến cậu thực sự hạnh phúc!</p>` },
        { day: 25, title: "Gửi cậu, ngày thứ hai mươi lăm...", 
            content: `<p>Tuần cuối cùng của tháng rồi! Cố gắng lên nhé. Chúc cậu một ngày học thật hiệu quả để cuối tuần đi chơi.</p>` },
        { day: 26, title: "Gửi cậu, ngày thứ hai mươi sáu...", 
            content: `<p>Thời tiết bên đó có lạnh không? Nhớ mặc đủ ấm nhé. Chúc cậu một ngày học tập ấm áp.</p>` },
        { day: 27, title: "Gửi cậu, ngày thứ hai mươi bảy...", 
            content: `<p>Một lời nhắn gửi thật nhiều động lực cho cậu. Cậu là giỏi nhất! ^^</p>` },
        { day: 28, title: "Gửi cậu, ngày thứ hai mươi tám...",
            content: `<p>Đếm ngược những ngày cuối tháng. Cố lên nhé. Tớ luôn ở đây ủng hộ cậu.</p>` },
        { day: 29, title: "Gửi cậu, ngày thứ hai mươi chín...", 
            content: `<p>Hôm nay có bài kiểm tra nào không? Chúc cậu làm bài thật tốt. Tự tin lên nhé!</p>` },
        { day: 30, title: "Gửi cậu, ngày áp chót của tháng", 
            content: `<p>Ngày 30 rồi! Chúc cậu một ngày học nhẹ nhàng để chuẩn bị khép lại một tháng thật đẹp.</p>` },
        { day: 31, title: "Gửi cậu, ngày cuối cùng của tháng...", 
            content: `<p>Chúc cậu một ngày học cuối tháng thật thành công để khép lại một tháng trọn vẹn nhé. Tối mình nói chuyện.</p>` },
    ];

    /* --- ĐƯỜNG DẪN ẢNH (ASSETS)  --- */
    export const assetPaths = { 
        sun: 'images/sun.jpg', 
        venus: 'images/venus.jpg', 
        earth: 'images/earth.jpg',
        mars: 'images/mars.jpg', 
        jupiter: 'images/jupiter.jpg', 
        saturn: 'images/saturn.jpg',
        neptune: 'images/neptune.jpg', 
        stars: 'images/stars.jpg',
        moon: 'images/moon.jpg', 
        phobos: 'images/phobos.jpg',
        asteroid: 'images/asteroid.jpg',
        vetinh: 'images/vetinh.jpg'
    };

    /* --- DỮ LIỆU CÁC THIÊN THỂ  --- */
    export const celestialData = [ 
        { 
            id: 'sun', 
            type: 'star', 
            name: 'Mặt Trời', 
            texture: assetPaths.sun, 
            size: 80, 
            orbitRadius: 0, 
            spinSpeed: 0.2, 
            fact: "Năng lượng của mặt trời sưởi ấm cả vũ trụ này...", 
            message: "...nhưng nụ cười của cậu mới là thứ sưởi ấm mùa đông này =))) .",
            camera: {
                offset: { x: 0, y: 150, z: 250 }, // Góc quay từ trên cao, cảm nhận sự vĩ đại và bao trùm
                lookAtOffset: { x: 0, y: 20, z: 0 }, // Nhìn vào phần trên của mặt trời, không phải tâm
                orbitSpeed: 0.0005 // Quỹ đạo cực kỳ chậm, trang nghiêm
            }
        }, 
        { 
            id: 'venus', 
            type: 'planet', 
            name: 'Sao Kim', 
            texture: assetPaths.venus, 
            size: 6, 
            orbitRadius: 150, 
            orbitSpeed: 4.0, 
            spinSpeed: 0.5, 
            fact: "Sao Kim được đặt theo tên nữ thần tình yêu và sắc đẹp trong thần thoại La Mã...", 
            message: "...điều đó giải thích tại sao tớ lại tìm thấy cậu ở đây hehe.",
            camera: {
                offset: { x: -18, y: 8, z: 18 }, // Góc quay chéo, tinh tế, như đang chiêm ngưỡng một viên ngọc quý
                lookAtOffset: { x: 0, y: 1, z: 0 }, // Nhìn hơi cao hơn một chút để tạo sự tôn trọng
                orbitSpeed: 0.0025 // Tốc độ quay nhẹ nhàng, duyên dáng
            }
        },
        { 
            id: 'earth', 
            type: 'planet', 
            name: 'Trái Đất', 
            texture: assetPaths.earth, 
            size: 7, 
            orbitRadius: 220, 
            orbitSpeed: 3.0, 
            spinSpeed: 2.5, 
            fact: "Trái Đất là hành tinh duy nhất được biết đến có sự sống...", 
            message: "...và có lẽ chúng ta cũng mới bắt đầu một hành trình nhỏ.", 
            moons: [ { id: 'moon', name: 'Mặt Trăng', texture: assetPaths.moon, size: 1.5, orbitRadius: 15, orbitSpeed: 1.5, spinSpeed: 0.2 } ],
            camera: {
                offset: { x: 25, y: 5, z: 25 }, // Góc quay kinh điển, đầy hy vọng, thấy được phần sáng tối của một ngày
                lookAtOffset: { x: 0, y: 0, z: 0 }, // Nhìn thẳng vào ngôi nhà của chúng ta
                orbitSpeed: 0.002 // Tốc độ quay ổn định, bình yên
            }
        }, 
        { 
            id: 'mars', 
            type: 'planet', 
            name: 'Sao Hỏa', 
            texture: assetPaths.mars, 
            size: 5, 
            orbitRadius: 300, 
            orbitSpeed: 2.5, 
            spinSpeed: 2.0,
            fact: "Sao Hỏa được gọi là 'Hành tinh Đỏ' vì màu sắc của nó...", 
            message: "...giống như những rung động mới mẻ trong tim của mình hehehehe, í là tim nó cứ đỏ rực th =)))) .", 
            moons: [ { id: 'phobos', name: 'Phobos', texture: assetPaths.phobos, size: 0.8, orbitRadius: 8, orbitSpeed: 3.0, spinSpeed: 0.5 } ],
            camera: {
                offset: { x: 0, y: 10, z: -18 }, // Góc quay từ phía sau, tạo viền sáng đỏ rực đầy kịch tính quanh hành tinh
                lookAtOffset: { x: 0, y: 0, z: 0 },
                orbitSpeed: 0.003 // Tốc độ nhanh hơn một chút, thể hiện sự rung động, bồi hồi
            }
        }, 
        { 
            id: 'jupiter', 
            type: 'planet', 
            name: 'Sao Mộc', 
            texture: assetPaths.jupiter, 
            size: 30, 
            orbitRadius: 450, 
            orbitSpeed: 1.5, 
            spinSpeed: 4.0, 
            fact: "Sao Mộc là hành tinh lớn nhất...", 
            message: "...giống tớ í là yêu cậu nhiều ấy =)))) .",
            camera: {
                offset: { x: 50, y: -15, z: 50 }, // Góc quay từ dưới thấp nhìn lên, nhấn mạnh sự khổng lồ, choáng ngợp
                lookAtOffset: { x: 0, y: 10, z: 0 }, // Nhìn lên trên, tăng cảm giác to lớn
                orbitSpeed: 0.0008 // Quỹ đạo rất chậm, đường bệ, tương xứng với kích thước
            }
        }, 
        { 
            id: 'saturn', 
            type: 'planet', 
            name: 'Sao Thổ', 
            texture: assetPaths.saturn, 
            size: 25, 
            orbitRadius: 650, 
            orbitSpeed: 1.0, 
            spinSpeed: 3.5, 
            fact: "Sao Thổ nổi tiếng với vành đai tuyệt đẹp của nó...", 
            message: "...biết đâu sau này mình cũng có thêm nhiều kỷ niệm vòng quanh nhau ha =))).",
            camera: {
                offset: { x: 60, y: -20, z: 60 }, // Góc quay cực thấp, để vành đai chiếm trọn khung hình, tạo sự hùng vĩ
                lookAtOffset: { x: 0, y: 5, z: 0 }, // Nhìn vào phần trên của hành tinh
                orbitSpeed: 0.0007 // Tốc độ chậm nhất, để người xem có thể chiêm ngưỡng trọn vẹn vẻ đẹp
            }
        }, 
        { 
            id: 'neptune', 
            type: 'planet', 
            name: 'Sao Hải Vương', 
            texture: assetPaths.neptune, 
            size: 15, 
            orbitRadius: 800, 
            orbitSpeed: 0.8, 
            spinSpeed: 2.8,
            fact: "Sao Hải Vương là hành tinh xa mặt trời nhất...", 
            message: "...nhưng dù ở xa thế nào thì khoảng cách vẫn chưa bao giờ là vấn đề.",
            camera: {
                offset: { x: 0, y: 20, z: 45 }, // Góc quay trực diện, xa và tĩnh, tạo cảm giác thanh bình, yên tĩnh
                lookAtOffset: { x: 0, y: 0, z: 0 },
                orbitSpeed: 0.0015 // Tốc độ chậm, thể hiện sự tĩnh lặng của không gian xa xôi
            }
        }
];


    /* --- CÁC THÔNG ĐIỆP CHỮ RƠI  --- */
    export const messages = [
        "U are the best", 
        "Cố lên !!!", 
        "Yêu cậu", 
        "Love u so much", 
        "nhớ cậu nhiều", 
        "tớ luôn bên cạnh cậu", 
        "💖", "💕", "🌟", "✨", 
        "Stay strong",
        "Keep going",
        "Believe in yourself",
        "You are amazing",
        "You can do it",
        "Never give up",
        "Stay positive",
        "You are loved",
        "You are enough",
        "Chúc cậu một ngày tốt lành",
        "You're my angel", 
        "Đừng bỏ cuộc nhé !!!", 
        "I'm alws here", 
        "😘", "🥰", "❤️", "💘", "💝", "💞"
    ];
    export const birthdayMessages = ["Happy Birthday!", "Chúc mừng sinh nhật!", "🎂", "🎉", "Tuổi mới vui vẻ!"];

    /* --- CÁC THÔNG ĐIỆP SAO BĂNG Ở ĐÂY --- */
    export const shootingStarMessages = [
        "Yêu tổ quốc, yêu đồng bào", 
        "Học tập tốt, lao động tốt", 
        "Đoàn kết tốt, kỷ luật tốt", 
        "Giữ gìn vệ sinh thật tốt", 
        "Khiêm tốn, thật thà, dũng cảm",
        "tớ luôn bên cạnh cậu",
        "Stay positive",

    ];

    // =================================================================
// DỮ LIỆU ĐẶC BIỆT CHO NGÀY BAY (CHỈ DÙNG HÔM NAY)
// =================================================================
export const flightDayLetter = {
    title: "Gửi cậu, cô gái dũng cảm của tớ =)) èo nghe sến nhỉ",
    content: `<p>Khi cậu đọc được những dòng này, có lẽ cậu cũng đang chuẩn bị đến sân bay, sang một nơi lạ lẫm bắt đầu một hành trình mới. Tớ biết cảm giác của cậu lúc này có lẽ rất hỗn loạn, buồn một chút hoặc nhiều chút =)))), một chút háo hức cho chặng đường mới, một chút lo lắng, và cả một chút buồn khi phải rời xa Hà Nội, rời xa gia đình cũng như người thân quen hàng ngày của mình, xa em bánh mì, bạn Chi, bạn Vy, bạn Nấm và nhiều người thân khác nữa </p>
              <p>Nhưng mà cậu oiii, hãy cố lênn, sẽ làm được thôi. Tớ tin cậu có thể làm được, cậu rất mạnh mẽ mà. Cậu đang tiến đến một quãng đường mới, một tương lai mà cậu đã rất nỗ lực, mệt mỏi rất nhiều để có được. Tớ tự hào về cậu vô cùng.</p>
              <p>Hà Nội,gia đình, bạn bè và tớ sẽ luôn ở đây, đợi cậu. Hành trình này có thể dài, có thể sẽ gặp nhiều khó khăn nhưng mà luôn nhớ mọi người alws bên cạnh cậu. Hãy thật mạnh mẽ, chăm sóc bản thân chu đáo và tận hưởng từng khoảnh khắc nhé.</p>
              <p>Tớ yêu cậu. Hẹn gặp lại cậu ở Thành Đô, hoặc sớm thôi, ở Hà Nội nhé.</p>`
};
