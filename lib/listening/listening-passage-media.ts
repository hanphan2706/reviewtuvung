import {
  assertNoBannedPassageImages,
  unsplashImageBaseUrl,
} from "@/lib/exam/banned-passage-images";
import { readingUnsplashBaseUrls } from "@/lib/reading/passage-media";

/**
 * Ảnh minh hoạ bài nghe — URL cố định theo part id (Unsplash hoặc nguồn chủ đề).
 * Không dùng lại ảnh luyện đọc; chủ đề khớp nội dung Cam 19 Test 1.
 */
const LISTENING_PART_IMAGES: Record<string, string> = {
  /** Restaurant recommendations */
  "cam20-t1-p1":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
  /** Edelman Pottery */
  "cam20-t1-p2":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80&auto=format&fit=crop",
  /** Loneliness and health */
  "cam20-t1-p3":
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&q=80&auto=format&fit=crop",
  /** Reclaiming urban rivers */
  "cam20-t1-p4":
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80&auto=format&fit=crop",
  /** Caring for elderly at home */
  "cam20-t2-p1":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
  /** Town volunteers */
  "cam20-t2-p2":
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop",
  /** Human geography */
  "cam20-t2-p3":
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop",
  /** Developing food trends */
  "cam20-t2-p4":
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&q=80&auto=format&fit=crop",
  /** Furniture rental */
  "cam20-t3-p1":
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop",
  /** Bidcaster archaeological dig */
  "cam20-t3-p2":
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=crop",
  /** Theatre programmes */
  "cam20-t3-p3":
    "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80&auto=format&fit=crop",
  /** Inclusive design */
  "cam20-t3-p4":
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop",
  /** Family visit advice */
  "cam20-t4-p1":
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80&auto=format&fit=crop",
  /** Football stadium tour */
  "cam20-t4-p2":
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80&auto=format&fit=crop",
  /** Teaching handwriting */
  "cam20-t4-p3":
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop",
  /** Chembe Bird Sanctuary */
  "cam20-t4-p4":
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80&auto=format&fit=crop",
  /** Hinchingbrooke Country Park — Wellington Country Park */
  "cam19-t1-p1":
    "https://eu-assets.simpleview-europe.com/hampshire2016/imageresizer/?image=%2Fdmsimgs%2FWellington_Country_Park_771332940.jpg&action=ProductDetail",
  /** Stanthorpe Twinning Association — kết nối địa phương / quốc tế */
  "cam19-t1-p2":
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop",
  /** Student food projects — Colin & Marie conversation */
  "cam19-t1-p3":
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80&auto=format&fit=crop",
  /** Céide Fields — Neolithic archaeological site (thumbnail nhỏ — loại khỏi hero hub). */
  "cam19-t1-p4":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7_k_3h-M32S8P8EmwRj0OvYOW_c_Sz6DVg&s",
  /** Guitar group classes */
  "cam19-t2-p1":
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80&auto=format&fit=crop",
  /** Northsea lifeboat volunteer — RNLI-style rescue boat at sea */
  "cam19-t2-p2":
    "https://images.unsplash.com/photo-1774124940990-27ebb0970b03?w=1200&q=80&auto=format&fit=crop",
  /** Recycling footwear */
  "cam19-t2-p3":
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
  /** Tardigrades — water bear (NatGeo) */
  "cam19-t2-p4":
    "https://i.natgeofe.com/n/f0a339b8-a3b0-4189-a75b-22c34000f454/og-image-tardigrades-sciencesource_ss2437867_16x9.jpg?w=1200",
  /** Kite Place — chợ thực phẩm / rau củ quầy ngoài trời (harbour food shops) */
  "cam19-t3-p1":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop",
  /** Children's book festival */
  "cam19-t3-p2":
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&q=80&auto=format&fit=crop",
  /** Science experiment — lab */
  "cam19-t3-p3":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
  /** Microplastics — ocean pollution */
  "cam19-t3-p4":
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80&auto=format&fit=crop",
  /** First day at work — supermarket */
  "cam19-t4-p1":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop",
  /** Running club */
  "cam19-t4-p2":
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80&auto=format&fit=crop",
  /** Bookshop */
  "cam19-t4-p3":
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80&auto=format&fit=crop",
  /** Reforestation — forest landscape */
  "cam19-t4-p4":
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop",
  /** Transport survey — city bus */
  "cam18-t1-p1":
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80&auto=format&fit=crop",
  /** ACE volunteering — community help */
  "cam18-t1-p2":
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80&auto=format&fit=crop",
  /** Fashion design careers */
  "cam18-t1-p3":
    "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80&auto=format&fit=crop",
  /** Elephant translocation */
  "cam18-t1-p4":
    "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80&auto=format&fit=crop",
  /** Milo's Restaurants */
  "cam18-t2-p1":
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop",
  /** Housing development */
  "cam18-t2-p2":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
  /** Laki eruption — volcanic landscape */
  "cam18-t2-p3":
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=80&auto=format&fit=crop",
  /** History of pockets — vintage tailoring */
  "cam18-t2-p4":
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80&auto=format&fit=crop",
  /** Wayside Camera Club */
  "cam18-t3-p1":
    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80&auto=format&fit=crop",
  /** Wild mushrooms */
  "cam18-t3-p2":
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80&auto=format&fit=crop",
  /** The Luddites — industrial history */
  "cam18-t3-p3":
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80&auto=format&fit=crop",
  /** Space traffic management */
  "cam18-t3-p4":
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80&auto=format&fit=crop",
  /** Fordham job agency */
  "cam18-t4-p1":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
  /** Museum tour */
  "cam18-t4-p2":
    "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1200&q=80&auto=format&fit=crop",
  /** Origami in class */
  "cam18-t4-p3":
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80&auto=format&fit=crop",
  /** Victor Hugo — books / literature */
  "cam18-t4-p4":
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80&auto=format&fit=crop",
  /** Cam 17 — Buckworth Conservation Group */
  "cam17-t1-p1":
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80&auto=format&fit=crop",
  /** Boat Trip Round Tasmania */
  "cam17-t1-p2":
    "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&q=80&auto=format&fit=crop",
  /** Veterinary Work Experience */
  "cam17-t1-p3":
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&q=80&auto=format&fit=crop",
  /** Labyrinths */
  "cam17-t1-p4":
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80&auto=format&fit=crop",
  /** Southoe Village Volunteering */
  "cam17-t2-p1":
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop",
  /** Oniton Hall */
  "cam17-t2-p2":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop",
  /** Romeo and Juliet Review */
  "cam17-t2-p3":
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80&auto=format&fit=crop",
  /** Icelandic Language and Digital Technology */
  "cam17-t2-p4":
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80&auto=format&fit=crop",
  /** Surfing Holidays Advice */
  "cam17-t3-p1":
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80&auto=format&fit=crop",
  /** School Extended Hours Childcare */
  "cam17-t3-p2":
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&auto=format&fit=crop",
  /** Holly’s Work Placement Tutorial */
  "cam17-t3-p3":
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format&fit=crop",
  /** Bird Migration Theory */
  "cam17-t3-p4":
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=1200&q=80&auto=format&fit=crop",
  /** Easy Life Cleaning Services */
  "cam17-t4-p1":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",
  /** Hotel Staff Retention */
  "cam17-t4-p2":
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&q=80&auto=format&fit=crop",
  /** Sporting Equipment Development */
  "cam17-t4-p3":
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80&auto=format&fit=crop",
  /** Maple Syrup */
  "cam17-t4-p4":
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop",
  /** Cam 21 — Oyster Bay Sailing Club */
  "cam21-t1-p1":
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80&auto=format&fit=crop",
  "cam21-t1-p2":
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80&auto=format&fit=crop",
  "cam21-t1-p3":
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80&auto=format&fit=crop",
  "cam21-t1-p4":
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop",
  "cam21-t2-p1":
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop",
  /** Marsden Coastal Walk */
  "cam21-t2-p2":
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80&auto=format&fit=crop",
  "cam21-t2-p3":
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&q=80&auto=format&fit=crop",
  "cam21-t2-p4":
    "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=1200&q=80&auto=format&fit=crop",
  "cam21-t3-p1":
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
  "cam21-t3-p2":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format&fit=crop",
  "cam21-t3-p3":
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop",
  "cam21-t3-p4":
    "https://images.unsplash.com/photo-1516685018646-549198525c1b?w=1200&q=80&auto=format&fit=crop",
  "cam21-t4-p1":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop",
  /** Business Exhibition Promotion */
  "cam21-t4-p2":
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80&auto=format&fit=crop",
  "cam21-t4-p3":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop",
  "cam21-t4-p4":
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80&auto=format&fit=crop",
  /** Tactics Basic Unit 1 — classroom listening */
  "tactics-basic-u01-l01":
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u01-l02":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u01-l03":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
  /** Describing People — nhóm bạn / con người */
  "tactics-basic-u02-l01":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u02-l02":
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u02-l03":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u03-l01":
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u03-l02":
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
  /** At the Clothing Store — cửa hàng quần áo */
  "tactics-basic-u03-l03":
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u04-l01":
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u04-l02":
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u04-l03":
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u05-l01":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u05-l02":
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u05-l03":
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u06-l01":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u06-l02":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u06-l03":
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop",
  /** Favorite Things — đồ ăn / sở thích */
  "tactics-basic-u07-l01":
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80&auto=format&fit=crop",
  /** Likes and Dislikes — trò chuyện quán cà phê */
  "tactics-basic-u07-l02":
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80&auto=format&fit=crop",
  /** Free Time — chơi guitar / sở thích */
  "tactics-basic-u07-l03":
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&q=80&auto=format&fit=crop",
  /** Sports and Teams — bóng đá */
  "tactics-basic-u08-l01":
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u08-l02":
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80&auto=format&fit=crop",
  "tactics-basic-u08-l03":
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80&auto=format&fit=crop",
};

const LISTENING_PART_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop";

function unsplashBase(url: string): string {
  return unsplashImageBaseUrl(url);
}

function assertListeningPartImages(map: Record<string, string>): void {
  assertNoBannedPassageImages(map, "luyện nghe");
  const readingUrls = readingUnsplashBaseUrls();
  const byBase = new Map<string, string[]>();

  for (const [partId, url] of Object.entries(map)) {
    const base = unsplashBase(url);
    const ids = byBase.get(base) ?? [];
    ids.push(partId);
    byBase.set(base, ids);

    if (readingUrls.has(base)) {
      throw new Error(
        `Listening image for ${partId} duplicates luyện đọc: ${base}`,
      );
    }
  }

  const duplicates = [...byBase.entries()].filter(([, ids]) => ids.length > 1);
  if (duplicates.length > 0) {
    const detail = duplicates
      .map(([url, ids]) => `${ids.join(", ")} → ${url}`)
      .join("; ");
    throw new Error(`Duplicate listening part images: ${detail}`);
  }
}

assertListeningPartImages(LISTENING_PART_IMAGES);

/** Bài không xoay lên hero hub — ảnh nguồn quá nhỏ / mờ khi phóng to full-width. */
export const LISTENING_HUB_HERO_EXCLUDED_PART_IDS = new Set<string>([
  "cam19-t1-p4",
]);

export function listeningPartHeroImage(partId: string): string {
  return LISTENING_PART_IMAGES[partId] ?? LISTENING_PART_IMAGE_FALLBACK;
}

/** `object-position` khi crop thumbnail / hero. */
const LISTENING_PART_IMAGE_OBJECT_POSITION: Partial<Record<string, string>> = {
  "cam19-t1-p1": "object-center",
  "cam19-t1-p3": "object-center",
  "cam19-t3-p1": "object-[center_40%]",
};

export function listeningPartHeroImageObjectPosition(partId: string): string {
  return LISTENING_PART_IMAGE_OBJECT_POSITION[partId] ?? "object-center";
}
