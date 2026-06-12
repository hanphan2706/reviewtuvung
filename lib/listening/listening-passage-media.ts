import { readingUnsplashBaseUrls } from "@/lib/reading/passage-media";

/**
 * Ảnh minh hoạ bài nghe — URL cố định theo part id (Unsplash hoặc nguồn chủ đề).
 * Không dùng lại ảnh luyện đọc; chủ đề khớp nội dung Cam 19 Test 1.
 */
const LISTENING_PART_IMAGES: Record<string, string> = {
  /** Hinchingbrooke Country Park — Wellington Country Park */
  "cam19-t1-p1":
    "https://eu-assets.simpleview-europe.com/hampshire2016/imageresizer/?image=%2Fdmsimgs%2FWellington_Country_Park_771332940.jpg&action=ProductDetail",
  /** Stanthorpe Twinning Association — kết nối địa phương / quốc tế */
  "cam19-t1-p2":
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop",
  /** Student food projects — Colin & Marie conversation */
  "cam19-t1-p3":
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80&auto=format&fit=crop",
  /** Céide Fields — Neolithic archaeological site */
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
  return url.split("?")[0] ?? url;
}

function assertListeningPartImages(map: Record<string, string>): void {
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

export function listeningPartHeroImage(partId: string): string {
  return LISTENING_PART_IMAGES[partId] ?? LISTENING_PART_IMAGE_FALLBACK;
}

/** `object-position` khi crop thumbnail / hero. */
const LISTENING_PART_IMAGE_OBJECT_POSITION: Partial<Record<string, string>> = {
  "cam19-t1-p1": "object-center",
  "cam19-t1-p3": "object-center",
};

export function listeningPartHeroImageObjectPosition(partId: string): string {
  return LISTENING_PART_IMAGE_OBJECT_POSITION[partId] ?? "object-center";
}
