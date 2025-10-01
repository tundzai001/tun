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
        { day: 1, title: "hello cậu", 
            content: `<p>Ngày nghỉ đầu tiên của cậu thế là kết thúc rồi, cậu bên đấy ăn chơi vui vẻ nhaaaa. mà hôm nay có giúp các chị nấu không đấy ??? hay là chỉ đi siêu thị thooi v =))) tớ hỏi thế thôi, chứ tớ biết mà, cậu đảm ác, nữ công gia chánh =)))) sời ơi nghe đã thấy đảm đang rồi, đảm đang, xinh đẹp, học lại giỏi, nhảy lại nét, còn gì để chê nữa ... 10 điểm =)) không gì để chê nữa except đầu hơi tối tí thôi hahhaha nhưng mà ê í là cậu tối haa =)) tối hơn cả tớ ấy :))) tớ tối bình thường thôi hehehe =)) còn cậu là trời ơi tối om luôn :)) ngủ nhiều lên nhé =)) tớ muốn cậu tăng cân chứ không phải giảm cân hiểu chưa =))) béo lên để còn bellyholic =)) để bóp bụng hiểu chưa ê dcm nghĩ thấy thích cm rồi ấy thích vkl ấy, dcm chắc điên mẹ mất trời ơi, trời lạnh lạnh,bóp bụng dồi ôi, thua mỗi gia cát lượng cái quạt hoặc không .. nhưng mà í là tớ yêu cậu nhé =))) cậu hỏi tớ thấy kì không thì không, tớ không muốn thay từ nào cả ấy trời ơi, í là just want to say it to u know that i love u sm, biết là cũng chưa rõ ràng nhưng mà tớ yêu cậu nhé =))) hihiiii, tí nói chuyện xong thì ngủ ngoan nghe chưa !! i love u </p>` },
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
        { day: 15, title: "Hello bae, hôm nay của bae thế nào? trông mệt mỏi ác =))", 
            content: `<p>Sao tớ nhìn map nhìn trường cậu to vãi, đi bộ chắc què chân mất, rộng v, chỉ biết ước =)) Hôm nay cậu có mệt không? chắc là có rồi =)) kiểu thấy đi khám phá xung quanh trường các thứ, trông cũng có vẻ mệt mỏi tại di chuyển liên tục =)) à với cả nhớ để ý đồ ăn cay nhaa, cậu bị đau dạ dày đó, để í cả nguồn nước nữa sợ bae sang xong kiểu nguồn nước mới xong sẽ kiểu bị này bị nó ấy =)) kbt nói nnao nữa nma nhớ để í nha. lo cho bae nhiều qs nhưng mà rất yêu cậu. it's real nhaaa, yêu cậu so much!</p>` },
         { day: 16, title: "Ê í là không có gì, chỉ là thấy yêu thôi hihiiii", 
            content: `<p>Không biết nữa nhưng mà thật sự hôm nay tớ đã suy nghĩ kiểu vẫn thắc mắc tại sao cậu lại dám cược như vậy, í là tối hôm trước đọc xong cậu bảo tớ cậu sẽ cược vào, thật sự là rất sốc, đến giờ tớ vẫn không thể ngờ được luôn ấy bae ạ,nhưng mà thôi ksao tại tớ cug muốn xây dựng mqh này =)) thấy cậu akelo qs mà th không biết nói như thế nào. Hôm nay của bae có mệt mỏi không?? thấy di chuyển hoài luôn ấy, với cả bên đấy đang là mùa thu, nhớ have some pics nhaaa, tại muốn ngắm bae =))) thấy yêu vchuong luôn ấy, ê nma dài quá thôi để mình call rồi nói chuyện hoặc ib cug được.. i love you so much bae ạ</p>` },
        { day: 17, title: "Hà Nội, ngày buồn, tháng nhớ, năm thương =)) ", 
            content: `<p>Hôm nay, trời bên đấy âm u quá nhỉ, same bên này à không bên này bình thường lúc nắng lúc mưa, chắc tại cậu lúc vui lúc buồn, kbt nx =))) Ê nhưng mà bức thư này được viết trước buổi học tối nay ối giời ơi, run qs không biết bác Đức có hỏi gì không ??? sợ ơi sợ, nma ksao nhỡ bị hỏi gọi điện cho bae nhé, có bae bảo kê chả sợ nữa =)) hoặc không !!!! Ê í là tối qua nói chuyện xong thấy nhớ vãi chưởng, miss vl, miss ur face, miss cả những cái ôm à miss cả 2 bàn tay của cậu nữa =)) mềm mại mà ấm vkl =)) Ê tớ yêu cậu. Hết thư rồi, kbt viết gì nữa =)) , biết nói. À với cả trông cậu sang bên đấy xong trông akelo vl, nét hơn cả ở đây, chứng tỏ cậu hợp môi trường ở đấy. ê lại dài rồi kbt nữa nma just want to say that i love u </p>` },
        { day: 18, title: "hêlo bấy bi, bức thư được viết lúc đang học bác Đức nhé =)))", 
            content: `<p>Tớ thấy nhớ cậu nhiều quá, ê ước gì cậu ở đây, tớ thấy lạnh rồi =))) mặc dù trời nóng vl nma yeh lạnh lẽo tâm hồn, buốt giá con tim =))) chỉ biết ước b Hà ở đây để ôm đi ngủ tại nay ngủ nhiều qs =))) ngủ 2 mình lại còn có b Hà để ôm nữa thì, trời ơi hết nấc, ngủ 2 ngày cug được =))))))) Ê nma tớ thấy cậu yêu vl, sao lại v nhỉ =)))) kbt nx chỉ biết là cậu quá yêu thôi. À với cả nhớ cbi tinh thần nhaaaa, sắp tới bên đấy lạnh cậu nhớ phải mặc ấm nha =))) nhắc trước dù còn lâu hihii, ê nay Bảo quay ra hỏi ơ chị Hà bay chưa hả anh =))) ảo thật không hiểu sao lại biết luôn =))) ê nma kbt th bỏ dii jusst want to say again that i love u so much 💕</p>` },
        { day: 19, title: "Ê hnay kỉ niệm 1 tuần cậu nhận được thư tay =))))", 
            content: `<p>Tớ nhớ cậu qs, ước gì hôm nay cậu vẫn ở đây =))) nhớ cậu nhiều chút, ê nhưng mà nay cho xem lại ảnh thấy ngại v =)) í là quá khứ nma th kệ di =))) mỉm cười cho qua thôi. Ê biết gì không??? chuyện này nghiêm trọng lắm =))))) phải call mới biết được cơ. ê tớ nhớ cậu, yêu cậu, thương cậu, quý cậu, ..... không kể hết được đâu tóm lại là diu a sờ pếch sồ pơ sờn =))) I love you so much, bae. Tuần sau bae phải di học rồi omg, về muộn chắc mệt lắm đâyyy, nhớ phải ăn uống đầy đủ, giữ sức khoẻ nhaaa</p>` },
        { day: 20, title: "Gửi cháu Hà mặc đồ 14 tuổi =))) dyeu vl", 
            content: `<p>Nếu cậu đang đọc bức thư này, nghĩa là cậu đang trên máy bay hoặc xuống máy bay rồi idk =)) tại cậu đọc lúc nào là quyền của cậu mà nhưng mà yes chính thức được 1 tuần rồi, có vẻ như 1 tuần vừa rồi cậu gặp khá nhiều khó khăn khi mới sang nhưng mà cậu thấy không cậu vẫn tiếp tục mỗi ngày, cậu vượt qua được mà, cậu mạnh mẽ điên lên được ấy 💕 Tuy là có lúc buồn, có lúc nhớ và lúc nào cũng muốn về :))) nhưng mà yeh dần dần cậu sẽ quên thôi mà rồi theo năm tháng khéo lại muốn đi chơi bên đấy, khám phá suốt í chứ =))) Nhưng mà í là cậu đã vượt qua hết rùi đó !!! Cậu có thể làm được mà Tuần sau chính thức bắt đầu học rồi, nhớ chăm chỉ học nhaaa, mệt quá thì nghỉ ngơi, đừng cố gồng nhé... mạnh mẽ nhưng vẫn có lúc phải nghỉ ngơi và yếu lòng 1 chút.. Cậu sẽ làm được, cố lên !!! Rồi sẽ được về với tớ =))) Tớ yêu cậu so much luôn💞</p>` },
        { day: 21, title: "Gửi cậu, tối cuối cùng của tuần đầu tiên bên bển...", 
            content: `<p>Hôm nay cậu có cười nhiều không? hy vọng là có =))) bae nhớ để ý sức khoẻ nhaa, đặc biệt bụng đó, b tùng anh không bên cạnh nên không chăm sóc được nên là phải để ý bụng nhaa, cậu còn bị đau dạ dày nữa ấy... thương bae quá, xa nhà lại còn đến tháng ối giời ơi, may quá còn chưa bị ốm, mong là không bị. Nhớ bae nhiều lắm ấy, yêu baee nhiều, bae cố gắng lên nhaaa, ăn no ngủ kĩ,học giỏi là thấy vui rồi. Yêu baee nhiều lắm nhaaa. Tớ yêu cậu nhiều. Giờ thì nghỉ ngơi và mơ những giấc mơ thật đẹp nhé. Tớ sẽ gặp cậu trong những giấc mơ đẹp, còn xấu thì b tug anh vào giải cứu, èo dcm nghe giống siêu nhân đi giải cứu vkl =))) th kệ yêu bae nhiều nhaaa</p>` },
        { day: 22, title: "hello baee, ngày đầu đi học của baby thế nào?? ", 
            content: `<p>Buổi đầu có vẻ khởi sắc ha, thế là tốt rồi. Tớ nhớ cậu lắm í,cậu bớt đau bụng rồi nhưng mà nó vẫn chưa hết đâu nên là nhớ để ý nhaa, đặc biệt phải ăn uống đó. Bạn Tùng Anh trưa nay kiểu dính lịch học đúng trưa nên là cũng lười ăn hihihiii, nhưng mà bạn có ăn cái bánh rùi =))) thật ra là đồ ăn vặt =))) Ê nhưng mà nay cậu đã rất mạnh mẽ rùi. Tớ tự hào về cậu, xa nhà không ai chăm sóc nên là phải mạnh mẽ lên nhéee, đau lưng thì phải nằm nghỉ ngơi diii, tức ngực thì bình tĩnh nào, thở đều thoiiiii!!! Tớ yêu cậu nhiều lắm luôn ấy,tối nay thật thư giãn, ngủ ngon và mơ đẹp để mai bắt dâud ngày mới tốt lành nhaaa!! Ngủ ngoan, tớ yêu cậu nhiều 💓.</p>` },
        { day: 23, title: "Hello, hôm nay là một ngày vừa vui vừa buồn...", 
            content: `<p>Buồn vì bae gặp trục trặc trong giấy tờ, còn vui vì không biết, hôm nào cũng thấy vui, vì mình cảm giác làm được gì đó =))))) hnayy cậu còn đau bụng không thế ?? Ê nhưng mà thật sự í bạn Tùng Anh mà ốm là kiểu vẫn vui ấy nên là không phải lo đâu =)))) đôi khi ốm tí để nghỉ ngơi th mà =))))) lạc quan lên haaa, còn cậu gặp trục trặc giấy tờ thì thoải mái đê bạn tùng anh ở nhà chấp tay cầu nguyện. 2 tay 2 chân chấp xin các cụ cho giấy tớ b Hà êm xuôi rồi =))) thoải mái dii haaa . Yên tâm cậu sẽ được về với tớ màaa hêhhehehehehhehehehe =))) ê nma tớ nhớ cậu quá Hà ơi, th về học cao đẳng du lịch diiii  cho thuận buồm xuôi gió =)))) sau đi dạy tiếng trung giống bác Đức hêhhe, cuộc sống cứ tềnh tàng thế thôi, sáng lên trường, chiều shopping tối thích thì dạy, thích thì chơi, xong hết tiền thì cạp đất ăn hêhheh, hẹ hẹ hẹ cuộc sống cứ nhàn tênh thes thoo... Th dài rồi mình call nói tiếp =))) Tớ yêu cậu so much luôn hêhheheh</p>` },
        { day: 24, title: "Gửi cô giáo Hà,tuy chưa dạy được chữ nào =)))))))", 
            content: `<p>Cô ơi, cháu học dốt hết rồi.... đùa đấy ê nhưng mà tớ nhớ cậu quá, hơi tiếc nhỉ cứ nghĩ sẽ về được quốc khánh nma yeh không được rùi thì đành thôi v chứ biết saoo, 7 ngày bên đấy tha hồ đi khám phá Trung Quốc, vuii nhaa ê nhưng mà nghĩ thấy thích =)) được đi khám phá đây khám phá đó thích thíiiiiii =))))) ê cố gắng học lên nhaa rùi về đây với tớ, tớ cũng nhớ cậu nhiều lắm đấyyy, nhớ quá trời ơi, bên đấy sáng với tối lạnh nên phải mặc ấm một chút nhaaa. Tớ yêu cậu nhiều lắm ấy, ê tớ nhớ giọng cậu vkl ấy, nghĩ cảnh được ôm đi ngủ dcm thích thíiii , ấm vl, ê xong lại nghĩ tới cảnh tết, " rồi ta sẽ ngắm pháo hoa cùng nhau bla bla bla quên lời rồi hihiihiiihihii " ê dcm thích vãi lồn sorry vì chửi bậy nhé bae... nhưng mà thích quá ê =))) vkl kbt nx kệ di hihi nghĩ cảnh được ôm th thấy thích rồi, tớ yêu cậu quá bae ơii </p>` },
        { day: 25, title: "ní hảo cậu =))) nghe zhong guo ác =))", 
            content: `<p>ê nãy ngại quá =))) í là tớ biết là gọi rồi nhưng mà ngại vl =))) xong em thảo còn ngồi gần nữa =)) ngại điên lên được, trời ơi xong đấy đấy nch xong tự nhiên lại còn anh tùng anh vkl giời ơi ngại chết đi được =)) chỉ biết giơ tay bye byee, xong lúc bye bye cái cả lớp ngồi cười tuyệt =)) ngại điên lên được, bác đức cười như được mùa ạ :)))) có lẽ sẽ đội quần đến lớp mất..., xong ê í là tự nhiên tớ cầm dth đọc xong cái ảnh xong tớ bảo thảo nhé =))) trời ơi hy vọng không để bụng, nhìn sợ ơi sợ =)) xongg nay cái em my còn hỏi tớ học trường nào =)) tớ bảo tớ học cao đẳng =)) xong kiểu tự nhiên cno nhìn như kiểu bất ngờ lắm ý :))))))) ê xong cả lúc đi về nữa may thí bác không cho tan cùng lúc, không ra gặp mẹ cậu chắc im re mất =))), ngại ơi ngại ấy. :))) ê nma nay trời lạnh vl, tớ mặc lại áo c3 đi học mà sao ai cũng kiểu wtf =)) dcm lạnh điên lên được , ước có em hà sinh viên năm nhất chengdu uni ở đây để ôm..... chỉ biết ước. Ê nma tớ yêu cậu, nãy bác đức có bảo để tí nch thì nhớ alo cả bác nha =))))))) tớ yêu cậu nhiều lắm luôn đấy</p>` },
        { day: 26, title: "ok mai được nghỉ rồi tyeu ơi", 
            content: `<p>Mai được ngủ thoải mái rồi tyeu ơi, ngon thíiii, ê tớ yêu cậu vl =))) tuần này trông di chuyển nhiều mà mệt mỏi quá đấy nên là cuối tuần này phải nghỉ ngơi cho nó đã đời nhaaaa bae, ê bên này bắt đầu lạnh rùi omg thiếu bae hà nội càng lạnh thêm... lạnh lẽo tâm hồn mà lại buốt giá con tim.. ôi sao mà mệt mỏi mà lạnh lẽo ghê, ước gì bae ở đây để ôm đi ngủ, được bóp bụng nữa =))) sorry but i like it... kiểu bị thích tại ấm =)) à tại mềm nữa =)) nên là cứ ăn di bae ơi, ăn mạnh lên, phải tăng cân chứ không được giảm cân nhaaa tyeu. Giảm cân về ăn đòn !!! ăn phạt nhiều lần đấy k đùa đâu!!!!! tăng cân đi!!!!!!  xong trời mà lạnh, người thì gầy nhom ra thì dở hết việc, nên là tập trung ăn uống tăng cân đi nhaaaa. Tớ yêu cậu nhiều lắm ấy, nay trời lạnh b tug anh cứ ho hoài th =))) mà lười di mua thuốc vl nên th kệ di ốm được khỏi được 😮‍💨. Ê tớ nhớ cậu vl thật sự chỉ muốn ôm đi ngủ th hoặc ôm ngồi làm việc =))) chứ oải quá bae ạ, nhớ cậu nhiều chút. Tớ yêu cậu nhiều lắm đấy, nhiều nhiều nhiều chút😪 </p>` },
        { day: 27, title: "helo tyeu,helo cậu, helo bae, hello baby, hello hà, hello ...., hello .. =))) ", 
            content: `<p>Cảm ơn cậu vì đã luôn là một cô gái mạnh mẽ và tự tin nhaaa.Cậu đang làm rất tốt và keep going nhaa, tớ tin cậu sẽ làm được thật ấy. Tớ yêu cậu nhiều lắm đấy. Hôm nay cậu đau răng nên là cậu hãy ngủ sớm nhaaa, tại mai cậu còn phải đi học nữa ấy, học tận 4 tiết giời ạ, mệt điên lên được, thương cậu nhiều lắm ấy, ê không hiểu sao nhưng mà dạo này cứ ngủ là tớ mệt điên lên được, mà tỉnh thì khoẻ như chó chết ấy. Xong nhé hôm nay lúc buổi sáng, tớ đi làm đau đầu v nhưng mà do người nền nó đã hơi hơi kiểu đau ấy nên là yeh tập trung là nó sẽ đau thêm =))) nhưng mà th kệ di hêhhe cậu không phải lo nhaaa, tớ biewts sức khoẻ của tớ, mệt quá là tớ sẽ nghỉ nên là cậu yên tâm, tớ biết cậu quan tâm tớ rùi và yes tớ rất rất trân trọng điều đó, tớ yêu cậu nhiều lắm ấy, omg còn thuốc thì kiểu bị lười đi mua ấy =))) thôi vậy để tớ mua thuốc rồi uống nhaaa, nghe lời babi nhaaa... hehhehe tớ yêu cậu nhiều lắm =))) ê thôi được rồi, tớ sẽ cho cậu biết tớ suy nghĩ gì? thì buổi tối ấy hôm trước tớ bị suy nghĩ về cuộc đời tớ như nào liệu nó có diễn biến tốt đẹp hay không =)) ừ xem tử vi =)))) xem kiểu online :))) nói thật thì tớ siêu tò mò ấy =₫) nếu cậu muốn nghe thì ok tớ sẽ kể cho cậu những gì tớ nghe được =)))))))) ê tớ yêu cậu nhiều lắm ấy cậu nhớ phải giữ gìn sức khoẻ nhaa, tớ yêu cậu so so so much luôn</p>` },
        { day: 28, title: "Ngày thứ 16 bên bển rồi đấy nhể =))) ", 
            content: `<p>Chỉ còn vài ngày nữa là hết tháng. Nhìn lại một tháng qua, cậu thấy mình đã trưởng thành hơn nhiều không? kiểu thấy mình thay đổi hơn so với ở nhà về nhiều mặt ấy =)) như kiểu làm việc này việc nó bla bla bla ...... Với tớ, một tháng qua tớ thấy tớ thương cậu nhiều hơn, yêu cậu nhiều hơn. Tớ thấy cậu tuyệt vời vl, từ bé tớ được dạy ai đối xử tốt với con, thì họ xứng đáng được mình trao đi bằng thậm chí là hơn những gì họ trao lại cho mình và yes có thể tự tin nói là cậu là người đầu tiên mà tớ cảm giác nhận được tình cảm thật sự ấy =)) this is for real. Ê tớ yêu cậu nhiều lắm luôn ấy thật sự luôn, yêu so so much luôn nhưng mà bằng cách nào đó tớ cũng không biết nữa, thật sự là tớ thấy tớ yêu cậu vl :)))))))))))) bên đấy trời bắt đầu lạnh rồi, nay tớ xem còn dự báo mưa nữa hmm nên là có lẽ sẽ lạnh hơn nên là phải mặc ấm nhaa đặc biệt buổi tối và buối sáng sớm =)) cậu toàn dậy sớm th nên là mặc ấm !!!!! không nghe lời mà để bị ốm nhé? về đây chết đòn với tôi cô nương ạ, lúc đấy đừng trách tại sao không nhắc !!, với cả ê tớ nhớ cậu nhiều vl, tớ nghĩ cậu nên ở bên đấy học tiếp :)))) rồi tết về nha, hoặc đau răng quá thì về cũng cũng được đấy chớ =)))))) tôi hoàn toàn 2 tay 2 chân đồng ý, cả mặc váy nữa hehehhehehe, ê yêu vl :)) sao cậu dám luôn v trời ơi, ê yêu vãi lồn wtf, ê nhưng mà thật sự ấy nếu mà cậu thấy tớ kiểu như là hơi bị quá gì đó như kiểu điên quá thì bảo tớ nhé =)) tớ sẽ trầm lại như xưa, thật ra là tớ bị kiểu sợ tớ trầm quá ấy, trầm theo kiểu thậm chí cuộc nói chuyện nào cũng nghiêm túc bị quá mức ấy, nên là tớ mới điên v cho nó đỡ bị không khí kiểu đấy ấy =)))) trời ơi tớ siêu ghét cái kiểu trầm của tớ ấy, kiểu trầm này nó nặng nề mà tớ lại bước vào mối quan hệ yêu này ấy, bằng cách nào đó thì sẽ ảnh hưởng ít hay nhiều thật sự idk nhưng mà tớ sẽ cố gắng để thay đổi di, vừa trầm mà cũng vừa yes cố gắng không để rơi vào trạng thái điên quá hay chán =)))) siêu sợ cảm giác làm đối phương chán ấy..... Nhưng mà just want to say I Love You so so so much bae ạ !!</p>` },
        { day: 29, title: "你好", 
            content: `<p>Hôm nay có điều gì làm cậu vui khônggg? tớ muốn được vui cùng cậu.Hôm nay, một ngày dài, hãy để các dây thần kinh được nghỉ ngơi nhé, đừng có ovtk chuyện gì nhaa tình yêu. Ê nãy bạn tớ nhắn tớ là bạn của bạn í là bạn cậu, trời ơi í là nghe xong tớ thấy cậu yêu vkl, kiểu xứng đáng được yêu, được thương ấy, trời ơi bởi vì tớ bị quan điểm là nhìn vào tâm họ, cách họ nói chuyện hay xử lí, và cái cahcs mọi người xung quanh đánh giá và đối xử ấy.... thì í là mới 1 bạn th nhưng mà tớ tin là tớ nhận định đúng, không thể sai được. dcm tớ yêu cậu vl ê, wtf ê yêu vl.... à với cả là bạn Tùng Anh ho nhiều ấy nên là đôi lúc trong lúc nói chuyện là bạn hay tắt mic =)) để ho nên là yeh bla bla. à với cả là tối qua ấy lúc cậu kể chuyện, tớ bị suy nghĩ ấy sorry nhaa, tớ bị thói quen kiểu đang trong luồng suy nghĩ là kiểu k muốn nói raa ấy, kiểu cứ suy nghĩ đã rồi nói sau ấy, tròi ơi tớ thấy tính đấy siêu xấu bởi vì cậu bảo tớ là nghĩ gì phải nói ra nhưng mà thật sự là tớ đang suy nghĩ nên không biết nói gì cả kiểu nếu nói ra là tớ sẽ bị ngắt luồng suy nghĩ ấy =)) nên là tớ không muốn hẹ hẹ còn nếu cậu hỏi tớ là tớ suy nghĩ gì thì ok th tớ sẽ nói nma ngắn gọn thì chỉ là cậu thật sự siêu siêu khó tính luôn ấy, và hình như tớ thấy cậu là dễ tính với mình tớ :)) hoặc không, không biết nữa nhưng mà í là cậu yêu vl, cậu biết cậu làm gì cảm giác như cậu thật sự sẵn sàng chấp nhận rủi ro, và kiểu hài lòng với quyết định của mình ấy... trời ơi tớ siêu siêu yêu cậu luôn babe ạ =))) thật không thể tin được, tớ yêu cậu nhiều lắm luôn ấy, tớ yêu cậu so so so much. I love you bae </p>` },
        { day: 30, title: "Gửi cậu, khép lại một tháng rời xa nơi thân quen", 
            content: `<p>Rời xa gia đình, bạn bè và em bánh mì... Tháng 9 kết thúc rồi. Một tháng qua cậu đã rất kiên cường, mạnh mẽ và giỏi giang. Tớ tự hào về cậu lắm. Cậu đã một mình vượt qua được những khó khăn về cảm xúc, tinh thần, cậu đã mạnh mẽ bước ra khỏi vòng an toàn để đi xa nhà, thật sự cậu siêu dũng cảm luôn ấy. Cảm ơn cậu đã luôn mạnh mẽ, đã vượt qua được tháng đầu ê í là bình thường bạn nào mà kiểu di xa nhà ấy là kiểu siêu siêu nhớ nhà mà buồn mà kiểu khóc suốt luôn ấy, đòi về suốt nhưng mà cậu cũng v í là chỉ 2 tuần đầu thôi là cậu đỡ rồi =))) ê siêu siêu giỏi nhaa, tớ tự hào về cậu nhiều lắm. Mai là được nghỉ rồi nên là yes từ mai tận hưởng thời gian nghỉ ngơi đi nhaaa, và set lịch đi chơi đi, cậu có hẳn 1 tuần để đi chơi cơ mà, tận hưởng đê, tại kiểu gì cậu cũng chuẩn bị thi ấy ... hoặc không, không biết nữa... Nhưng mà tối nay đi ngủ thì hãy ngủ thật ngon nhé!!! sáng mai hãy dậy thật muộn cho tớ, ngủ xả láng diiii, chơi bời bét tè lè nhè luôn đi =)))) Tớ nhớ cậu nhiều ....</p>` },
        { day: 31, title: "Gửi cậu, khép lại một tháng rời xa nơi thân quen ", 
            content: `<p>Rời xa gia đình, bạn bè và em bánh mì... Tháng 9 kết thúc rồi. Một tháng qua cậu đã rất kiên cường, mạnh mẽ và giỏi giang. Tớ tự hào về cậu lắm. Cậu đã một mình vượt qua được những khó khăn về cảm xúc, tinh thần, cậu đã mạnh mẽ bước ra khỏi vòng an toàn để đi xa nhà, thật sự cậu siêu dũng cảm luôn ấy. Cảm ơn cậu đã luôn mạnh mẽ, đã vượt qua được tháng đầu ê í là bình thường bạn nào mà kiểu di xa nhà ấy là kiểu siêu siêu nhớ nhà mà buồn mà kiểu khóc suốt luôn ấy, đòi về suốt nhưng mà cậu cũng v í là chỉ 2 tuần đầu thôi là cậu đỡ rồi =))) ê siêu siêu giỏi nhaa, tớ tự hào về cậu nhiều lắm. Mai là được nghỉ rồi nên là yes từ mai tận hưởng thời gian nghỉ ngơi đi nhaaa, và set lịch đi chơi đi, cậu có hẳn 1 tuần để đi chơi cơ mà, tận hưởng đê, tại kiểu gì cậu cũng chuẩn bị thi ấy ... hoặc không, không biết nữa... Nhưng mà tối nay đi ngủ thì hãy ngủ thật ngon nhé!!! sáng mai hãy dậy thật muộn cho tớ, ngủ xả láng diiii, chơi bời bét tè lè nhè luôn đi =)))) Tớ nhớ cậu nhiều ....</p>` },
    ];

    /* --- DANH SÁCH THƯ BAN NGÀY  --- */
    export const daytimeLetters = [ 
        { day: 1, title: "Gửi cậu, ngày đầu tháng 10 cứ là akelo!", 
            content: `<p>Đầu tháng bên xứ người cậu nhớ phải khoẻ mạnh nhaaa, trời cũng lạnh rồi, nhớ phải mặc ấm, không được ốm nghe chưa !!! cô mà ốm tôi về tôi phạt cô, đừng có trách hiểu chưa????? Mặc ấm, ăn no, ngủ kĩ và phải học chăm hiểu chưa nhể? Còn được 1 tuần nghỉ thì xả láng đê, chơi bời bét tè lè nhè điii hehe, tớ yêu cậu </p>` },
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
        { day: 15, title: "Gửi bae, ngày thứ hai bên đất khách quê người =))!", 
            content: `<p>Nhanh thật, đã đến ngày thứ hai rồi thì 4 tháng nhanh thôi, chớp mắt là hết. bae nhớ không được buồn cả khóc nhaaa, cố lên diii, mạnh mẽ lên, mệt mỏi, buồn bã thì gọi cho tớ, tớ sẵn sàng nghe máy của cậu mà, cậu không được buồn bởi vì bây giờ cậu với tớ đang xa nhau nên là i can't do anything so please do not cry okay!! i miss u so much, i love u babe❤️</p>` },
        { day: 16, title: "Gửi cậu, ngày thứ 3 bên bển =))) ê thấy cũng nhanh phết đấy chứ", 
            content: `<p>Hôm nay bên bển trời mưa, có vẻ hơi lạnh một chút nên để í sức khoẻ, lạnh thì mặc hơi ấm một chút lại nhé =))) ê bên này trời ẩm ương lắm lúc nắng lúc mưa... chắc tại ông trời thấy vui vì cậu bên đấy cũng vui, buồn vì không còn ở đây nữa =))) haizzz không biết nữa nhưng mà yes cố lên hôm nay của cậu sẽ rất là okayy, tớ tin là như vậy. tớ yêu cậu so so much... have a good day okayy</p>` },
        { day: 17, title: "Hello babyy, ê tối qua thấy nói chuyện thích vl =)) ", 
            content: `<p>Chắc tại lâu không call hay sao ấy, thấy nhớ vãi chưởng thật sự là rất nhớ, kiểu như là bị quen thuộc à =))) kbt nx chỉ muốn nói là nhớ bae nhiều lắm bae ơi, ước gì bae ở đâyy, yêu bae nhiều lắm bae oiiii, yêu so much, nhớ để ý sức khỏe nữa đấy nhé, tớ yêu cậu nhiều  </p>` },
        { day: 18, title: "Gửi cậu, ngày thứ 5 bên bển ", 
            content: `<p>Ê sắp được 1 tuần rồi đấy omg =)) nhanh quá cậu ơi, thế này thì 4 tháng cũng chỉ là cái chớp mắt thôi, miss cậu quá, miss so much, không được gn kiss bị ơ nhờ ơ nhơ sắc nhớ =))))) wtf kbt bị gì nữa chắc tớ bị điên mẹ rồi kbt nx kệ di just want to say again i love u bae and have a good day okayyy, i miss u so much </p>` },
        { day: 19, title: "Gửi cậu, ngày thứ sáu bên bển...", 
            content: `<p>Nhanh nhỉ? Chưa gì đã được 6 ngày rồi omg, tối qua cậu cứ dyeu thế nào ấy =)) may cho cậu là cậu ở bên đấy rồi, chứ ở bên này chắc ôm cả đêm mất. Tớ nhớ cậu nhiều quá, tớ muôn ôm cậu vào lòng, ôm cả ngày, ôm đi ngủ luôn, tớ nhớ cậu nhiều lắm ấy, ước gì có quả cánh cửa thần kì giống doraemon =))) cứ đến giờ ngủ là sang ôm ngủ, dậy là đi về:))) ước mơ nhỏ nhoi. Tớ yêu cậu nhiều lắm ấy, cậu nhớ giữ gìn sức khoẻ nha. I love u, bae</p>` },
        { day: 20, title: "Gửi cậu, chính thức tròn 1 tuần bên đất khách quê người...", 
            content: `<p>Đến thời điểm này cũng bắt đầu quen dần cuộc sống bên đấy rùi, cậu phải mạnh mẽ lên, cố gắng học bài ngoan nha, không được buồn, không được đòi về :)))) phải cố gắng ở bên đấy học bài chứ, dù gì cậu cũng đã cố gắng để đạt được học bổng rồi mà, cậu phải cố lên nhé. Tớ tin ở cậu, tớ luôn ở đây với cậu, nên đừng đòi về nha, biết là nhớ rùi. Tớ cũng nhớ cậu nhiều lắm. Tớ yêu cậu nhiều, so much luôn</p>` },
        { day: 21, title: "Gửi cậu, ngày chủ nhật thứ 2 bên đất khách quê người...", 
            content: `<p>Chỉ muốn nói rằng tớ yêu cậu nhiều lắm đấy, nhớ để ý bụng nhaaa... nhớ mặc ấm, ăn uống đầy đủ và đặc biệt uống nước đầy đủ nhưng mà không phải uống nước thay ăn đấy nhé =)))))) ăn đầy đủ còn tiếp tục lớn chứ không phải dừng lại ở tuổi 14 =))) đáng cả yêu vl, ê nhưng mà tối qua chị Vân nghe thấy thật á :))) ê ngại vkl, có lẽ sẽ đội quần ra đường mất trời ơi, ngại điên lên được tf saoo cậu không bảo tớ, trời oiii abcdxyz ngại chết mất =)) ê nma th cũng đỡ chủ động nhắc nhở chị Vân, mong chị lắng nghe và hành động. ngày nghỉ cuối cùng rồiii, nghỉ đầy đủ dii. Tớ yêu cậu so much luôn bae ạ, nhớ cậu, muốn ôm cậu đi ngủ, muốn xoa bụng cho cậu đỡ đau để ngủ ngon hơn... I love you so much luôn 💓</p>` },
        { day: 22, title: "Gửi cậu, ngày thứ hai đầu tiên của tuần học...", 
            content: `<p>Ê ngày đầu tiên đi học của cậu mà tớ hào hứng thay cậu luôn á :)))), cậu đỡ đau bụng chưaa? ê dạo mày gặp cậu trong mơ nhiều vl =)))) Tớ nhớ cậu quá Hà oii, ước gì cậu ở đây tớ có thể ôm cậu 1 cái mà thôi nhiều cái dii, hnay đi học nhớ ngoan nhaaaa, một ngày vui vẻ okayyy. Tớ yêu cậu so much, nhớ ăn uống đầy đủ đấy!!!!</p>` },
        { day: 23, title: "Gửi cậu, ngày thứ hai của tuần học,ok!.", 
            content: `<p>Thư này được viết lúc 2h03p sáng theo giờ vnam, thật sự rất buồn ngủ nhưng mà phải cố để viết, không hiểu tại sao nhưng mà b tug anh cảm giác b tug anh chi liệt giường rồi, qs mệt mỏi, cảm giác như ốm v sợ quá có lẽ do quá tập trung nên bị hoặc không =)) kbt nx nma th kệ di vẫn sống chưa chết hêhheh, tớ yêu cậu nhiều lắmkjfifij cậu nhớ kfjjfhyfmai phải ăn uống đầy đủ nhàhdjjđjjdkdkdkdkbt nx nma tớ buồn ngủ qs ... Tớ yêu cậu nhiều lắm, tớ nhớ cậu nhiều, cố gắng chăm học rồi tết về đây với tớ nhaaa, tớ yêu cậu nhiều💓</p>` },
        { day: 24, title: "Gửi cậu, thứ 4 ngày thứ 3 của tuần =))) lú vkl", 
            content: `<p>Sáng nay tớ dậy sớm bởi vì tớ phải dậy để học thể dục, với cả 1 phần do tớ bị khó chịu trong người nên là cứ thỉnh thoảng bị mất ngủ ấy =)))) Sáng nay bên này nóng điên lên được =)) ờ tớ viết thứ này là lúc đang học ca thể dục thứ 2 =))) oải thực sự nóng điên.... Nhưng mà tớ chỉ muốn nói rằng tớ yêu cậu nhiều lắm ấy, so much luôn, với cả =)) ê nếu mà xem có căn hay gì nếu cậu muốn thì cứ, tớ không cản cậu, chỉ muốn nói là hãy cẩn thận thôiiii. Tớ yêu cậu nhiều lắm đấyyy, hôm nay vui vẻ, học tốt nhaa. I love u so much bae ạ</p>` },
        { day: 25, title: "heloe bae", 
            content: `<p>Chỉ muốn nói là xin lỗi, vì tối qua tớ nói chuyện với cậu nghe có vẻ hơi... Tớ xin lỗi nhaa, tự nhiên tối qua bị suy nghĩ thôi, sorry bae nhiều lắm... nhưng mà suy nghĩ v thôi chứ vẫn nghe cậu kể gì nhé =))) nghe ác luôn, tối qua call với cậu xong là tớ cũng tắt máy luôn, trả biết thức đến mấy giờ nữa tại cứ nằm thôi, nhưng mà sáng nay là dậy siêu siêu muộn =))))))))) xong ê bên này trời mưa, dậy mà lạnh điên lên được =)) mặc dù có mỗi 26 độ =)) nhưng mà still cold cuz i can't hug u .... miss cậu quá đấy hà oiii.... Tớ yêu cậu nhiều lắm luôn ấy </p>` },
        { day: 26, title: "Gửi cậu, ngày thứ 14 bên bển...", 
            content: `<p>Tối qua tớ nhớ cậu quá, xong kiểu tối qua mất ngủ v, tớ đang ngủ xong cứ bị tỉnh ấy thế là lúc gần 3h sáng tớ xuống nấu ăn =))) ngồi ăn xem phim đến tận gần 5h mới di ngủ omg =))) ê cứ đà này khéo die sớm thật, tối qua nói chuyện với cậu vui v :)))) thấy nhớ điên lên được ấy, tớ nhớ cậu nhiều nhiều nhiều =)) cái gì quan trọng nhắc lại 3 lần heheee, sáng ở bên đấy sẽ hơi lạnh 1 chút nên nhớ để ý sức khoẻ nhaaa, tớ yêu cậu nhiều lắm đấy, have a good day okay :))) chúc lại mặc dù bức thư này được viết xong vào lúc 16:03 tàu khựa =))) sorry bae, but i love u so much !!!</p>` },
        { day: 27, title: "xin chào và helo chứ không tạm biệt đâu ....", 
            content: `<p>Hôm nay là thứ 7, là ngày nghỉ rồi nên là cố gắng nghỉ ngơi nhiều chút lên nhaaa, tớ yêu cậu nhiều lắm đấy, chiều lên thư viện thì nhớ về phải ăn uống, có học bài thì nhanh nhanh để tối được ngủ nhiều hơn nhaaa, bởi vì mai cậu có tận 4 tiết omg quá nhiều cho ngày nghỉ..... thôi ksao cố lên, tớ biết cậu mạnh mẽ, đôi lúc yếu lòng 1 chút thôi =)) nhưng mà cậu sẽ làm được, mạnh mẽ, tự tin leenn. Tớ tin ở cậu, yêu cậu nhiều, gửi cậu cái ôm ấm áp nhaaa, kiss nữa =)) kiss từ xa cho nó nhớ =))))))) yêu cậu nhiều </p>` },
        { day: 28, title: "helo cậu, sáng nay mệt nhỉ, haiz cố lên nha",
            content: `<p>sáng nay học tận 4 tiết cố lên nhé, ê nghe thấy mệt =)) tớ liên tục cả ngày là tớ thấy hết sức rồi mà cậu như v ái ô sì ma cố lên tyeu ơi, u can do it, mệt quá thì nghỉ nhaaa, tớ tin cậu làm được. Tớ yêu cậu, ê tối qua nói chuyện với cậu xong là đêm tớ ngủ ngon vl :))))) sáng nay dậy là cứ ơi sời ơi khoẻ thíii, như kiểu khỏi hẳn ốm luôn hêhheh. Tớ yêu cậu nhiều lắm đấy, i loce u bae, have a good day okayyy, vui vẻ nhaa, gửi cậu cái ôm ấm áp và cái kiss ngọt như mía lùi nha :)) hâhha ê tớ yêu cậu nhiều</p>` },
        { day: 29, title: "Ê tối qua bên này lạnh vkl =))", 
            content: `<p> Tớ ngủ tớ tưởng tớ sắp thành elsa cm rồi không í là lạnh lẽo chứ k phải nữ hoàng :))) dcm thẳng nhé, thẳng như đường bay Nội bài, không có tí nào ổ gà hay, gập ghềnh =)) ê tối qua tớ yêu cậu vl wtf =)) cái thư tối hôm qua viết xong là thấy kiểu ê bạn Hà này xứng đáng nhận được nhiều thứ hơn like everything.... Nhưng mà thật sự tớ yêu cậu lắm luôn í, à lịch làm tối đổi nhé tyeu, tuần này làm tối thứ 4 thôi nhaaa, ê với cả tớ yêu cậu hết rồi =)))))) sáng nay trời hơi hơi lạnh nên là mặc ấm gọi là hơi hơi th nha, không thành ra lại bị nóng í, bên này dcm trời cứ ẩm ương ghét quá =)))) Hôm nay akelo okela nha tyeu, have a good day nhé bae. Tớ yêu cậu nhiều </p>` },
        { day: 30, title: "heloo", 
            content: `<p>Hết hôm nay là hết tháng 9 rùi, là được 18 ngày bên bển, quá nhanh, ê cảm giác như kiểu chớp mắt cái là qua luôn rồi ấy, nhanh nhỉ.. ê mai cậu được nghỉ rồi hheheheheh, cố gắng nốt hôm nay nhaa, với cả trời lạnh nên là mặc ấm !!!! xin lỗi cậu nhé, xin lỗi vì tối qua tớ nói chuyện hơi hướng tiêu cực... tớ xin lỗi cậu nhiều nhé.. Tớ cũng nhớ cậu nhiều lắm, tớ yêu cậu... kiểu chỉ biết nói th ấy, cậu không ở đây để tớ có thể làm được cái gì đấy cho cậu... cảm giác vừa tiếc vừa buồn vừa hụt hẫng nhưng mà không sao cả dù gì vẫn cứ là như thế nào thì mình cũng pass được hết mà yesss. Tớ yêu cậu nhiều lắm, một ngày akelo nhaaaa, i love u</p>` },
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


    // =================================================================
// DỮ LIỆU ĐẶC BIỆT CHO NGÀY BAY (CHỈ DÙNG HÔM NAY)
// =================================================================
export const flightDayLetter = {
    title: "Gửi cậu, cô gái dũng cảm của tớ =)) èo nghe sến nhỉ",
    content: `<p>Khi cậu đọc được những dòng này, có lẽ cậu cũng đang chuẩn bị đến sân bay hoặc đến rùi, haizz sang một nơi lạ lẫm bắt đầu một hành trình mới. Tớ biết cảm giác của cậu lúc này có lẽ rất hỗn loạn, buồn một chút hoặc nhiều chút =)))), một chút háo hức cho chặng đường mới, một chút lo lắng, và cả một chút buồn khi phải rời xa Hà Nội, rời xa gia đình cũng như người thân quen hàng ngày của mình, xa em bánh mì, bạn Chi, bạn Vy, bạn Nấm và nhiều người thân khác nữa </p>
              <p>Nhưng mà cậu oiii, hãy cố lênn, sẽ làm được thôi. Tớ tin cậu có thể làm được, cậu rất mạnh mẽ mà. Cậu đang tiến đến một quãng đường mới, một tương lai mà cậu đã rất nỗ lực, mệt mỏi rất nhiều để có được. Tớ tự hào về cậu vô cùng.</p>
              <p>Hà Nội,gia đình, bạn bè và tớ sẽ luôn ở đây, đợi cậu. Hành trình này có thể dài, có thể sẽ gặp nhiều khó khăn nhưng mà luôn nhớ mọi người alws bên cạnh cậu. Hãy thật mạnh mẽ, chăm sóc bản thân chu đáo và tận hưởng từng khoảnh khắc nhé.</p>
              <p>Tớ yêu cậu. Hẹn gặp lại cậu ở Thành Đô, hoặc sớm thôi, ở Hà Nội nhé.</p>`
};


export const memoriesData = [
    {
        id: 1,
        title: "Trạm dừng: Trái Đất",
        content: "Nơi tất cả bắt đầu. Một hành tinh xanh nhỏ bé nhưng chứa đựng cả một thế giới to lớn same như nỗi nhớ =)) ",
        image: "images/xinh1.jpg",
        journeySegment: 0 // <<--- Gắn với chặng đầu tiên
    },
    {
        id: 2,
        title: "Trạm dừng: Sao Thổ",
        content: "Giống như vành đai kia luôn xoay quanh một hành tinh, tớ cũng sẽ luôn ở đây, alws by ur side.",
        image: "images/tay.jpg",
        journeySegment: 1 // <<--- Gắn với chặng thứ hai
    },
    {
        id: 3,
        title: "Trạm dừng: Một Tinh vân xa",
        content: "Và hành trình sẽ còn tiếp tục, đến những nơi chúng ta chưa từng biết, những chuyện chúng ta chưa từng trải qua.... .",
        image: "images/giangsinh.jpg",
        journeySegment: 2 // <<--- Gắn với chặng cuối
    }
];
// =================================================================
// DỮ LIỆU CHO TÍNH NĂNG MỚI: SƯU TẦM KÝ ỨC
// =================================================================

import * as THREE from 'three';

export const memoryShardsData = [
    { id: 0, position: new THREE.Vector3(0, 15, 0), attachedTo: 'earth' }, // Gần Trái Đất
    { id: 1, position: new THREE.Vector3(12, 0, 0), attachedTo: 'mars' }, // Gần Sao Hỏa
    { id: 2, position: new THREE.Vector3(0, 40, 0), attachedTo: 'saturn' }, // Phía trên Sao Thổ
    { id: 3, position: new THREE.Vector3(380, 5, 10), attachedTo: 'scene' }, // Trong vành đai tiểu hành tinh
    { id: 4, position: new THREE.Vector3(10, 5, 0), attachedTo: 'venus' }, // Gần Sao Kim
];

export const unlockedMemory = {
    title: "Bức Tranh Hoàn Chỉnh",
    image: "images/giangsinh.jpg", // <<--- Thay bằng ảnh đặc biệt của bạn
    content: "Cảm ơn cậu đã cùng tớ tìm lại những mảnh ghép này. Mỗi mảnh là một khoảnh khắc quý giá, và khi ghép lại, chúng tạo nên bức ảnh mà tớ cảm thấy thích nhất =)) ê í là xinh vkl bị yêu ấy, yêu cậu vl  ...",
};
// =======================================================
// DỮ LIỆU CHO CÁC HÀNH TRÌNH TẠO HÌNH 3D
// =======================================================
export const constellationsData = {
    // ---- HÌNH DẠNG 1: NGÔI SAO 5 CÁNH ----
    star: {
        name: "Ngôi Sao Dẫn Lối",
        vertices: [
            new THREE.Vector3(0, 500, 50),     // 0: Đỉnh trên cùng
            new THREE.Vector3(380, 150, 50),   // 1: Cánh phải trên
            new THREE.Vector3(235, -200, 50),  // 2: Cánh phải dưới
            new THREE.Vector3(-235, -200, 50), // 3: Cánh trái dưới
            new THREE.Vector3(-380, 150, 50),  // 4: Cánh trái trên
            new THREE.Vector3(0, 0, 150),      // 5: Tâm mặt trước (lồi ra)

            new THREE.Vector3(0, 500, -50),    // 6: Đỉnh trên cùng (mặt sau)
            new THREE.Vector3(380, 150, -50),  // 7: Cánh phải trên (mặt sau)
            new THREE.Vector3(235, -200, -50), // 8: Cánh phải dưới (mặt sau)
            new THREE.Vector3(-235, -200, -50),// 9: Cánh trái dưới (mặt sau)
            new THREE.Vector3(-380, 150, -50), // 10: Cánh trái trên (mặt sau)
            new THREE.Vector3(0, 0, -150)      // 11: Tâm mặt sau (lõm vào)
        ],
        faces: [
            // 5 mặt tam giác của mặt trước (nối các đỉnh với tâm 5)
            [5, 1, 0], [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 0, 4],
            // 5 mặt tam giác của mặt sau (nối các đỉnh với tâm 11)
            [11, 6, 7], [11, 7, 8], [11, 8, 9], [11, 9, 10], [11, 10, 6],
            // 10 mặt tam giác nối cạnh bên
            [0, 1, 7], [0, 7, 6], [1, 2, 8], [1, 8, 7], [2, 3, 9], [2, 9, 8],
            [3, 4, 10], [3, 10, 9], [4, 0, 6], [4, 6, 10]
        ],
        hints: [
            "Điểm đầu tiên là đỉnh cao nhất. Ngôi sao tiếp theo nằm ở phía trên bên phải...",
            "Chính xác. Giờ hãy tìm điểm ở phía dưới bên phải...",
            "Tuyệt vời. Điểm tiếp theo ở phía dưới bên trái...",
            "Gần xong rồi! Tìm nốt điểm ở phía trên bên trái...",
            "Đây là tâm của mặt trước, nó hơi nhô ra một chút...",
            "Bây giờ chúng ta bắt đầu mặt sau. Tìm đỉnh cao nhất một lần nữa...",
            "Đúng rồi. Tiếp tục với đỉnh trên bên phải của mặt sau...",
            "Tìm đỉnh dưới bên phải của mặt sau...",
            "Đỉnh dưới bên trái của mặt sau...",
            "Đỉnh cuối cùng của các cánh! Phía trên bên trái...",
            "Hoàn hảo! Cậu đã tìm thấy tất cả các điểm. Hãy xem điều kỳ diệu!"
        ],
        specialMessage: {
             title: "Vì Sao Lấp Lánh",
             content: `<p>Từ những điểm sáng cậu kiên nhẫn tìm kiếm, một ngôi sao hoàn chỉnh đã được tạo nên.</p><p>Nó là biểu tượng cho sự kiên nhẫn và sáng tạo, từ những thứ nhỏ nhất có thể định hình nên sự hoàn hảo cho nên là cố gắng lên nhé !! Tớ tin ở cậu.</p>`
        }
    },

    // ---- HÌNH DẠNG 2: KIM TỰ THÁP ----
    pyramid: {
        name: "Kim Tự Tháp Ký Ức",
        vertices: [
            new THREE.Vector3(0, 300, 0),      // 0: Đỉnh
            new THREE.Vector3(-150, 0, -150),  // 1: Góc đáy 1
            new THREE.Vector3(150, 0, -150),   // 2: Góc đáy 2
            new THREE.Vector3(150, 0, 150),    // 3: Góc đáy 3
            new THREE.Vector3(-150, 0, 150)    // 4: Góc đáy 4
        ],
        faces: [
            [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], // 4 mặt bên
            [1, 3, 2], [1, 4, 3] // 2 mặt đáy
        ],
        hints: [
            "Bắt đầu từ đỉnh cao nhất. Giờ tìm một góc của mặt đáy...",
            "Đúng rồi, tìm góc tiếp theo theo chiều kim đồng hồ...",
            "Tuyệt vời, góc thứ ba...",
            "Chính xác! Cậu đã tìm thấy tất cả các điểm. Điều gì sẽ hiện ra đây?"
        ],
        specialMessage: {
             title: "Nền Tảng Vững Chắc",
             content: `<p>Giống như kim tự tháp này, liên tưởng đến hồi xa xưa nhiều người cực nhọc mới xây dựng nên cái này =))) giống như thầy cle dạy không làm thì làm gì có ăn th troll !!! í là cậu phải cố gắng xây dựng được nền móng vững chắc same như kim tự tháp thì tớ tin mọi việc sau này của cậu cũng sẽ có thể phát triển thuận lợi và dễ dàng hơn. TỚ TIN CẬU !!! You can do it...</p>`
        }
    }
};





