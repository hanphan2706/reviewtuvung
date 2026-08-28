import {
  assertNoBannedPassageImages,
  unsplashImageBaseUrl,
} from "@/lib/exam/banned-passage-images";

/** Ảnh bài đọc trong `/public` — hub + reader (cùng article id = cùng ảnh). */
const READING_ARTICLE_IMAGES: Record<string, string> = {
  "cam20-test2-p1": "/manatees.avif",
  "cam20-test2-p2": "/procastination.avif",
  "cam20-test2-p3":
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop",
  "cam20-test1-p1": "/the kakapo.avif",
  "cam20-test1-p2": "/to-britain.avif",
  "cam20-test1-p3":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p1":
    "https://images.unsplash.com/photo-1749763829318-29b75632f934?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p2":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p3":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p4":
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p5":
    "https://images.unsplash.com/photo-1528518075085-9b611b334e85?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p6":
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p7":
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p8":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p9":
    "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p10":
    "https://images.unsplash.com/photo-1561400494-b382c3713d76?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p11":
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p12":
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p13":
    "https://images.unsplash.com/photo-1772289093245-218447e77b64?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p14":
    "https://images.unsplash.com/photo-1660668435924-ee5bcddc236c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p15":
    "https://images.unsplash.com/photo-1639013166378-c556a9ef4758?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p16":
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p17":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p18":
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p19":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p20":
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p1":
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p2":
    "https://images.unsplash.com/photo-1611146033545-5e1e5ad951d8?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p3":
    "https://images.unsplash.com/photo-1720709734276-cd14a216bcad?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p4":
    "https://images.unsplash.com/photo-1660646463659-df77c1580723?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p5":
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p6":
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p7":
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p8":
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p9":
    "https://images.unsplash.com/photo-1768005419000-d53e45851b50?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p10":
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p11":
    "https://images.unsplash.com/photo-1664938011651-3a9772a672f9?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p12":
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p13":
    "https://images.unsplash.com/photo-1774830970925-e176508dc0ab?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p14":
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p15":
    "https://images.unsplash.com/photo-1741517287377-3fdbd87ac5f2?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p16":
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p17":
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p18":
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p19":
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p20":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p1":
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p2":
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p3":
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p4":
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p5":
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p6":
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p7":
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p8":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p9":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p10":
    "https://images.unsplash.com/photo-1754450927348-9e2ac72dd4b2?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p11":
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p12":
    "https://images.unsplash.com/photo-1657069342866-2d11c2509b02?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p13":
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p14":
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p15":
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p16":
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p17":
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p18":
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p19":
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p20":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop",
  "cam20-test3-p1":
    "https://images.unsplash.com/photo-1499638472904-ea5c6178a300?w=1200&q=80&auto=format&fit=crop",
  "cam20-test3-p2":
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80&auto=format&fit=crop",
  "cam20-test3-p3":
    "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?w=1200&q=80&auto=format&fit=crop",
  "cam20-test4-p1":
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80&auto=format&fit=crop",
  "cam20-test4-p2":
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
  "cam20-test4-p3":
    "https://images.unsplash.com/photo-1695738881481-8c8695197fea?w=1200&q=80&auto=format&fit=crop",
  "cam19-test4-p1":
    "https://images.unsplash.com/photo-1587405254461-abd1d1c7440e?w=1200&q=80&auto=format&fit=crop",
  "cam19-test4-p2":
    "https://images.unsplash.com/photo-1674736921632-8b7fd0cff5bc?w=1200&q=80&auto=format&fit=crop",
  "cam19-test4-p3":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&auto=format&fit=crop",
  "cam19-test3-p1":
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80&auto=format&fit=crop",
  "cam19-test3-p2":
    "https://images.unsplash.com/photo-1632505650704-3ee94dc083cc?w=1200&q=80&auto=format&fit=crop",
  "cam19-test3-p3":
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80&auto=format&fit=crop",
  "cam19-test2-p1":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop",
  "cam19-test2-p2":
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&q=80&auto=format&fit=crop",
  "cam19-test2-p3":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
  "cam19-test1-p1":
    "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&q=80&auto=format&fit=crop",
  "cam19-test1-p2":
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80&auto=format&fit=crop",
  "cam19-test1-p3":
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80&auto=format&fit=crop",
  "cam18-test1-p1":
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80&auto=format&fit=crop",
  "cam18-test1-p2":
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80&auto=format&fit=crop",
  "cam18-test1-p3":
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80&auto=format&fit=crop",
  "cam18-test2-p1":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
  "cam18-test2-p2":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
  "cam18-test2-p3":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&auto=format&fit=crop",
  "cam18-test3-p1":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  "cam18-test3-p2":
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80&auto=format&fit=crop",
  "cam18-test3-p3":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&auto=format&fit=crop",
  "cam18-test4-p1":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  "cam18-test4-p2":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
  "cam18-test4-p3":
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format&fit=crop",
  "cam17-test1-p1":
    "https://images.unsplash.com/photo-1716598002170-dc314d41892e?w=1200&q=80&auto=format&fit=crop",
  "cam17-test1-p2":
    "https://images.unsplash.com/photo-1516242981651-2ee338449dea?w=1200&q=80&auto=format&fit=crop",
  "cam17-test1-p3":
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80&auto=format&fit=crop",
  "cam17-test2-p1":
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop",
  "cam17-test2-p2":
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
  "cam17-test2-p3":
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80&auto=format&fit=crop",
  "cam17-test3-p1":
    "https://images.unsplash.com/photo-1688264716276-d3bfe07e1504?w=1200&q=80&auto=format&fit=crop",
  "cam17-test3-p2":
    "https://images.unsplash.com/photo-1639805855968-22081aef8d1f?w=1200&q=80&auto=format&fit=crop",
  "cam17-test3-p3":
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&q=80&auto=format&fit=crop",
  "cam17-test4-p1":
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&q=80&auto=format&fit=crop",
  "cam17-test4-p2":
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
  "cam17-test4-p3":
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200&q=80&auto=format&fit=crop",
  "cam15-test1-p1": "/reading-article-images/cam15-test1-p1.jpg",
  "cam15-test1-p2":
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80&auto=format&fit=crop",
  "cam15-test1-p3": "/reading-article-images/cam15-test1-p3.jpg",
  "cam15-test2-p1":
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80&auto=format&fit=crop",
  "cam15-test2-p2": "/reading-article-images/cam15-test2-p2.jpg",
  "cam15-test2-p3": "/reading-article-images/cam15-test2-p3.jpg",
  "cam15-test3-p1": "/reading-article-images/cam15-test3-p1.jpg",
  "cam15-test3-p2":
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&q=80&auto=format&fit=crop",
  "cam15-test3-p3":
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80&auto=format&fit=crop",
  "cam15-test4-p1":
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80&auto=format&fit=crop",
  "cam15-test4-p2": "/reading-article-images/cam15-test4-p2.jpg",
  "cam15-test4-p3":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
  "cam12-test1-p1":
    "https://images.unsplash.com/photo-1536583308396-5e8dd8dff017?w=1200&q=80&auto=format&fit=crop",
  "cam12-test1-p2":
    "https://images.unsplash.com/photo-1723400024840-e6d628358b00?w=1200&q=80&auto=format&fit=crop",
  "cam12-test1-p3":
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80&auto=format&fit=crop",
  "cam12-test2-p1":
    "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1200&q=80&auto=format&fit=crop",
  "cam12-test2-p2":
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80&auto=format&fit=crop",
  "cam12-test2-p3":
    "https://images.unsplash.com/photo-1563711246253-b4af863acbd4?w=1200&q=80&auto=format&fit=crop",
  "cam12-test3-p1":
    "https://images.unsplash.com/photo-1676910914506-39578e3446b1?w=1200&q=80&auto=format&fit=crop",
  "cam12-test3-p2":
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop",
  "cam12-test3-p3":
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&auto=format&fit=crop",
  "cam12-test4-p1":
    "https://images.unsplash.com/photo-1632230997264-b2bfc65cb8b4?w=1200&q=80&auto=format&fit=crop",
  "cam12-test4-p2":
    "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80&auto=format&fit=crop",
  "cam12-test4-p3":
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
  "cam13-test1-p1":
    "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=80&auto=format&fit=crop",
  "cam13-test1-p2":
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop",
  "cam13-test1-p3":
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop",
  "cam13-test2-p1":
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80&auto=format&fit=crop",
  "cam13-test2-p2":
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80&auto=format&fit=crop",
  "cam13-test2-p3":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop",
  "cam13-test3-p1":
    "https://images.unsplash.com/photo-1566109964132-ec243417ca2d?w=1200&q=80&auto=format&fit=crop",
  "cam13-test3-p2":
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80&auto=format&fit=crop",
  "cam13-test3-p3":
    "https://images.unsplash.com/photo-1608717310359-3a1e90a53504?w=1200&q=80&auto=format&fit=crop",
  "cam13-test4-p1":
    "https://images.unsplash.com/photo-1690824678148-0967d927d68c?w=1200&q=80&auto=format&fit=crop",
  "cam13-test4-p2":
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80&auto=format&fit=crop",
  "cam13-test4-p3":
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200&q=80&auto=format&fit=crop",
  "cam14-test1-p1": "/reading-article-images/cam14-test1-p1.jpg",
  "cam14-test1-p2": "/reading-article-images/cam14-test1-p2.jpg",
  "cam14-test1-p3":
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80&auto=format&fit=crop",
  "cam14-test2-p1": "/reading-article-images/cam14-test2-p1.jpg",
  "cam14-test2-p2":
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80&auto=format&fit=crop",
  "cam14-test2-p3":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
  "cam14-test3-p1": "/reading-article-images/cam14-test3-p1.jpg",
  "cam14-test3-p2": "/reading-article-images/cam14-test3-p2.jpg",
  "cam14-test3-p3": "/reading-article-images/cam14-test3-p3.jpg",
  "cam14-test4-p1":
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80&auto=format&fit=crop",
  "cam14-test4-p2": "/reading-article-images/cam14-test4-p2.jpg",
  "cam14-test4-p3": "/reading-article-images/cam14-test4-p3.jpg",
  "cam16-test1-p1":
    "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&q=80&auto=format&fit=crop",
  "cam16-test1-p2":
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80&auto=format&fit=crop",
  "cam16-test1-p3":
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80&auto=format&fit=crop",
  "cam16-test2-p1":
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
  "cam16-test2-p2":
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80&auto=format&fit=crop",
  "cam16-test2-p3":
    "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=1200&q=80&auto=format&fit=crop",
  "cam16-test3-p1":
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop",
  "cam16-test3-p2":
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80&auto=format&fit=crop",
  "cam16-test3-p3":
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop",
  "cam16-test4-p1":
    "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&q=80&auto=format&fit=crop",
  "cam16-test4-p2":
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80&auto=format&fit=crop",
  "cam16-test4-p3":
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
  "cam21-test1-p1":
    "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=80&auto=format&fit=crop",
  "cam21-test1-p2":
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80&auto=format&fit=crop",
  "cam21-test1-p3":
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80&auto=format&fit=crop",
  "cam21-test2-p1":
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80&auto=format&fit=crop",
  "cam21-test2-p2":
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80&auto=format&fit=crop",
  "cam21-test2-p3":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
  "cam21-test3-p1": "/reading-article-images/cam21-test3-p1.jpg",
  "cam21-test3-p2":
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80&auto=format&fit=crop",
  "cam21-test3-p3":
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80&auto=format&fit=crop",
  "cam21-test4-p1":
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop",
  "cam21-test4-p2":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop",
  "cam21-test4-p3":
    "https://images.unsplash.com/photo-1527422265102-22027ee90fcd?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 1 — paddle steamer / IQ–STEM / classroom learning */
  "de-thi-that-1-p1":
    "https://images.unsplash.com/photo-1749386821663-e3280bf72681?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-1-p2":
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-1-p3":
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 2 — Newton / Antarctica / Thinking Fast and Slow */
  "de-thi-that-2-p1":
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-2-p2":
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-2-p3":
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 3 — land / ocean liners / tourism */
  "de-thi-that-3-p1":
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-3-p2":
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-3-p3":
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 4 — Cathy Freeman / plastic bottles / African wild dogs */
  "de-thi-that-4-p1":
    "https://images.unsplash.com/photo-1776705865335-4e0f85bc6956?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-4-p2":
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-4-p3":
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 5 — remittances / Mosso physiology / Shakespeare authorship */
  "de-thi-that-5-p1":
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-5-p2":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-5-p3":
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 6 — penicillin / DST / willpower */
  "de-thi-that-6-p1":
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-6-p2":
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-6-p3":
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 7 — wolf packs / environmental medicine / TV & sport */
  "de-thi-that-7-p1":
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-7-p2":
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-7-p3":
    "https://images.unsplash.com/photo-1762010297288-ca543e4f0909?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 8 — electroreception / Olympics / time travel */
  "de-thi-that-8-p1":
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-8-p2":
    "https://images.unsplash.com/photo-1769708046880-0d17b7a849b3?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-8-p3":
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 9 — kefir / entomophagy / love stories */
  "de-thi-that-9-p1":
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-9-p2":
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-9-p3":
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80&auto=format&fit=crop",
  /** Đề thi thật IELTS 10 — chronobiology / triune brain / helium */
  "de-thi-that-10-p1":
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-10-p2":
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop",
  "de-thi-that-10-p3":
    "https://images.unsplash.com/photo-1667351391926-51a9460aeec9?w=1200&q=80&auto=format&fit=crop",
};

function assertUniqueArticleImages(map: Record<string, string>): void {
  assertNoBannedPassageImages(map, "luyện đọc");
  const byBaseUrl = new Map<string, string[]>();
  for (const [articleId, url] of Object.entries(map)) {
    const base = unsplashImageBaseUrl(url);
    const ids = byBaseUrl.get(base) ?? [];
    ids.push(articleId);
    byBaseUrl.set(base, ids);
  }
  const duplicates = [...byBaseUrl.entries()].filter(([, ids]) => ids.length > 1);
  if (duplicates.length > 0) {
    const detail = duplicates
      .map(([url, ids]) => `${ids.join(", ")} → ${url}`)
      .join("; ");
    throw new Error(`Duplicate reading article images: ${detail}`);
  }
}

assertUniqueArticleImages(READING_ARTICLE_IMAGES);

/** Base Unsplash URLs already used by luyện đọc (không gồm `/public`). */
export function readingUnsplashBaseUrls(): Set<string> {
  const urls = new Set<string>();
  for (const raw of Object.values(READING_ARTICLE_IMAGES)) {
    if (raw.startsWith("http")) {
      urls.add(raw.split("?")[0] ?? raw);
    }
  }
  return urls;
}

function publicAssetPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return `/${parts.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

export function readingArticleImage(articleId: string, passageFallback = 1): string {
  const raw =
    READING_ARTICLE_IMAGES[articleId] ??
    READING_ARTICLE_IMAGES[`cam20-test2-p${passageFallback}`] ??
    READING_ARTICLE_IMAGES["cam20-test2-p1"];
  if (raw.startsWith("/")) return publicAssetPath(raw);
  return raw;
}

/** Ưu tiên `IMAGE` trong file .txt; không có thì map curated / fallback. */
export function resolveReadingArticleImage(
  articleId: string,
  passage?: { imageUrl?: string; passage?: number },
): string {
  const fromTxt = passage?.imageUrl?.trim();
  if (fromTxt) return fromTxt;
  return readingArticleImage(articleId, passage?.passage ?? 1);
}

/** `object-position` cho ảnh crop chật (vd. tượng Shakespeare cần giữ phần đầu). */
const READING_ARTICLE_IMAGE_OBJECT_POSITION: Partial<Record<string, string>> = {
  "reading-challenge-2-p11": "object-top",
  "cam19-test4-p2": "object-[center_35%]",
  "cam19-test4-p3": "object-center",
  "cam14-test2-p1": "object-[center_20%]",
  "cam15-test3-p1": "object-[center_15%]",
};

export function readingArticleImageObjectPosition(articleId: string): string {
  return READING_ARTICLE_IMAGE_OBJECT_POSITION[articleId] ?? "object-center";
}
