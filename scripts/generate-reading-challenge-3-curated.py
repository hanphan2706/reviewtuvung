#!/usr/bin/env python3
"""Generate curated TS maps for Reading Challenge 3 (meta, quiz, vocabulary)."""
from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
BUILD_SCRIPT = ROOT / "scripts" / "build-reading-challenge-3.py"
PDF_PATH = ROOT / "reading raw" / "Compass Publishing" / "Reading Challenge 3 - Second Edition.pdf"
KEY_PATH = ROOT / "reading raw" / "Compass Publishing" / "Answer Key - Reading Challenge 3.pdf"
TXT_PATH = ROOT / "reading raw" / "reading challenge 3.txt"
OUT_META = ROOT / "lib" / "reading" / "reading-challenge-3-meta.ts"
OUT_QUIZ = ROOT / "lib" / "reading" / "reading-challenge-3-quiz.ts"
OUT_VOCAB = ROOT / "lib" / "reading" / "reading-challenge-3-vocabulary.ts"

CHALLENGE_NUM = 3
TOPIC_UNION = (
    '"Education" | "Science" | "Wildlife" | "Environment" | "Technology" | '
    '"Psychology" | "Social" | "Health" | "Sports" | "Culture and Leisure"'
)

MCQ_SECTION_RE = re.compile(
    r"Choose the best answer\.?\s*([\s\S]*?)(?=Find these idioms|Summary)",
    re.I,
)
Q1_RE = re.compile(
    r"1\.\s+(.+?)\s+a\.\s+(.+?)\s+b\.\s+(.+?)\s+c\.\s+(.+?)\s+d\.\s+(.+?)(?=\s*2\.|\s*Find these|\s*Summary|$)",
    re.I | re.S,
)
PREVIEW_TERM_RE = re.compile(
    r"\d+\.\s+_{1,6}\s+(?:\w+\s+){0,6}?\b([A-Za-z][\w'-]{3,})\b",
)
GLOSSARY_LINE_RE = re.compile(
    r"^\s*\d+\s+([A-Za-z][\w'-]*(?:\s+[A-Za-z][\w'-]*){0,3})\s*:\s*(.+)$",
    re.M,
)

QUESTION_VI: dict[str, str] = {
    "what is the main focus of this reading?": "Trọng tâm của bài đọc là gì?",
    "what is the main idea of this reading?": "Ý chính của bài đọc là gì?",
    "what is the main idea of the reading?": "Ý chính của bài đọc là gì?",
    "what is this reading about?": "Bài đọc nói về gì?",
    "what is the focus of this reading?": "Trọng tâm của bài đọc là gì?",
    "what question does this reading answer?": "Bài đọc trả lời câu hỏi nào?",
    "what question is the main focus of this reading?": "Câu hỏi trọng tâm của bài đọc là gì?",
    "which question does this passage focus on answering?": "Bài tập trung trả lời câu hỏi nào?",
    "what is the reading mainly about?": "Bài chủ yếu nói về gì?",
    "what is the main purpose of the reading?": "Mục đích chính của bài là gì?",
    "what is another possible title for this reading?": "Tiêu đề khác có thể cho bài đọc này là gì?",
}

IDIOM_DEF_PHRASES: dict[str, str] = {
    "usually; in most cases": "thường là; trong đa số trường hợp",
    "to have an equal value; to have the same quality": "có giá trị tương đương; cùng chất lượng",
    "more than likely; probably": "rất có thể; có lẽ",
    "too bad for": "quá tệ cho",
    "folk beliefs; superstitions": "niềm tin dân gian; mê tín",
    "to eat something": "ăn cái gì",
    "to destroy; to annihilate": "phá hủy; tiêu diệt",
    "to appear; to become visible": "xuất hiện; trở nên thấy được",
    "the beginning of the century": "đầu thế kỷ",
    "to remember; to keep in mind": "nhớ; ghi nhớ",
    "to keep to; to persist with": "giữ nguyên; kiên trì với",
    "one after the other": "liên tiếp",
    "to study hard": "học chăm chỉ",
    "to be connected to; to be as a result of; originated from": "liên quan đến; bắt nguồn từ",
    "to strengthen; to improve": "củng cố; cải thiện",
    "to establish or create something": "thiết lập hoặc tạo ra cái gì",
    "to remove something to some distance away": "di chuyển cái gì ra xa",
    "to destroy; to break (a building) into pieces": "phá hủy; đập tan (công trình)",
    "to require; to depend on": "cần; phụ thuộc vào",
    "to be supplied with; to have": "được trang bị; có",
    "to help someone or something out": "giúp ai/cái gì",
    "to start something": "bắt đầu cái gì",
    "to increase, expand or improve very quickly": "tăng hoặc cải thiện rất nhanh",
    "to appear suddenly, like a new flower from the ground": "bật lên đột ngột",
    "because it is a certain way": "vì bản chất của nó",
    "a recent invention that appears to have many future applications": "phát minh mới có nhiều ứng dụng tương lai",
    "to the extent or degree that": "ở mức độ",
    "to split or cut into pieces": "chia thành nhiều phần",
    "to enter illegally; to use criminal methods to get into": "xâm nhập trái phép",
    "to be known as the reason (for)": "được coi là nguyên nhân (của)",
    "to fix or make look nicer, usually by coloring or painting": "sửa hoặc làm đẹp (sơn, tô)",
    "a specific example showing something is true": "ví dụ cụ thể chứng minh điều đúng",
    "not anymore; not now": "không còn; không nữa",
    "to start to do": "bắt đầu làm",
    "at or during some unspecified time": "ở thời điểm không rõ",
    "to give to a younger generation": "truyền cho thế hệ sau",
    "to acknowledge; to admit that something exists or is true": "thừa nhận; công nhận sự thật",
    "to produce or create": "tạo ra",
    "finally; in the end": "cuối cùng; về lâu dài",
    "to eat; to consume": "ăn; tiêu thụ",
    "to keep a lot of something for later use": "tích trữ nhiều cho sau",
    "in addition to the previous good thing": "thêm vào điều tốt trước đó",
    "to be considered; to be seen as": "được coi là",
    "to usually appear to; to be more likely to": "thường có vẻ; có khả năng hơn",
    "to think of; to have the idea or inspiration": "nghĩ đến; có ý tưởng",
    "the path to success; one's increasing success": "con đường thành công",
    "to say what you mean clearly and directly": "nói thẳng, không vòng vo",
    "to do something strongly or in a slightly shocking way": "làm điều gì mạnh mẽ hoặc gây chú ý",
    "in good condition": "trong tình trạng tốt",
    "no matter what; absolutely": "bất kể điều gì; tuyệt đối",
    "safe and secure; difficult to access": "an toàn; khó tiếp cận",
    "still in good condition": "vẫn trong tình trạng tốt",
    "to be certain; to relax because you know": "yên tâm vì biết chắc",
    "to trick, usually in order to steal something": "lừa (thường để trộm)",
    "to use clues in order to find": "lần theo manh mối để tìm",
    "immediately; without delay": "ngay lập tức",
    "including": "bao gồm",
    "to stay or live somewhere": "ở/làm nhà tại đâu",
}

OPTION_VI_BY_UNIT: dict[int, list[str]] = {
    1: [
        "Sách kiếm nhiều tiền hơn phim",
        "Sách viết về phim",
        "Phim làm từ sách",
        "Ngôi sao phim viết sách",
    ],
    2: [
        "Chim mang vận xui",
        "Không nhìn quạ trong mắt",
        "Có nhiều mê tín về chim",
        "Chim quan trọng với người Anh",
    ],
    3: [
        "Cây Alaska đang chết",
        "Nhiệt độ ấm hơn ảnh hưởng Alaska",
        "Alaska có sông băng đẹp",
        "Làng Alaska phải di dời",
    ],
    4: [
        "Tập hàng ngày thường gây hại sức khỏe",
        "Tập đúng cách là cách duy nhất có kết quả sức khỏe hiệu quả",
        "Đa số biết tập hiệu quả",
        "Thêm đa dạng bài tập không quan trọng",
    ],
    5: [
        "Cách tập luyện",
        "Tập luyện giúp não",
        "Cách đạt điểm cao trong bài thi",
        "Não có thể thay đổi",
    ],
    6: [
        "“Một người và bảo tàng của ông”",
        "“Nhà thiết kế bảo tàng xuất sắc Bắc Kinh”",
        "“Thay đổi kiến trúc Trung Quốc”",
        "“Bảo tàng lớn nhất Trung Quốc”",
    ],
    7: [
        "Nơi mua robot",
        "Loại đồ chơi mới",
        "Một thí nghiệm",
        "Ý tưởng thú vị cho tương lai",
    ],
    8: [
        "Vì sao trượt patin inline phổ biến",
        "Lịch sử giải trượt inline",
        "Inline skating phát triển ra sao",
        "Câu chuyện Scott và Brennan Olson",
    ],
    9: [
        "Snakebot được phát minh như thế nào",
        "Điểm giống giữa rắn và robot",
        "Nhiệm vụ của snakebot đầu tiên",
        "Snakebot trông thế nào và làm gì",
    ],
    10: [
        "Hoa đã hạn chế tội phạm ra sao?",
        "Loại hoa nào phổ biến ở đó?",
        "Ai là kẻ trộm ở Suginami?",
        "Vì sao tỷ lệ tội phạm cao?",
    ],
    11: [
        "Đôi khi người ta bất đồng về phục hồi di sản",
        "Tượng David là kiệt tác nổi tiếng",
        "Phục hồi tác phẩm nghệ thuật tốn kém",
        "Taj Mahal cần sửa chữa",
    ],
    12: [
        "Nhiều nền văn hóa có truyện lũ lụt",
        "Một trận lũ giết nhiều người",
        "Truyền thuyết lũ lụt không đúng",
        "Lũ lụt rất nguy hiểm",
    ],
    13: [
        "Nhà môi trường lo về năng lượng",
        "Earthship có ở nhiều nước",
        "Earthship trông như nhà thường",
        "Earthship là nhà thân thiện môi trường",
    ],
    14: [
        "Cơ thể ta đang lão hóa",
        "Cà rốt tốt cho ta",
        "Thức ăn ảnh hưởng lão hóa",
        "Nên dùng kem dưỡng mặt",
    ],
    15: [
        "Mơ giấc có thể giảm giờ ngủ?",
        "Mơ giấc khác ngủ thế nào?",
        "Ai mơ giấc nhiều hơn, nam hay nữ?",
        "Vì sao mơ giấc tốt cho con người?",
    ],
    16: [
        "Madonna kiểm soát phân phối nhạc ra sao?",
        "Bài hát nổi tiếng nhất của Madonna?",
        "Madonna xử lý đánh cắp nhạc ra sao?",
        "Vì sao Madonna cho nhạc miễn phí?",
    ],
    17: [
        "Các loại trí nhớ con người",
        "Chức năng hóa chất trong não",
        "Mẹo ghi nhớ",
        "Cách giữ năng động",
    ],
    18: [
        "Giải World Cup",
        "Kẻ trộm",
        "Cúp World Cup",
        "Ngôi sao World Cup",
    ],
    19: [
        "So sánh phisher và hacker",
        "Giải thích phishing là gì",
        "Ba cách nhận biết lừa đảo phishing",
        "Báo một vụ phishing bất ngờ",
    ],
    20: [
        "Lâu đài thường có ma",
        "Chillingham Castle có lịch sử lâu",
        "Nhiều ma ở Anh",
        "Chillingham Castle là nơi thú vị",
    ],
}


def load_build_module() -> object:
    spec = importlib.util.spec_from_file_location("build_rc3", BUILD_SCRIPT)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load {BUILD_SCRIPT}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def load_pdf_text(path: Path) -> str:
    return "\n".join((p.extract_text() or "") for p in PdfReader(str(path)).pages)


def normalize_apostrophes(text: str) -> str:
    return text.replace("'", "'").replace("'", "'").replace("\u2019", "'").replace("–", "-")


def unit_anchor(full: str, title: str) -> int:
    variants = [
        title,
        title.replace("Madonna\u2019s", "Madonna's"),
        title.replace("Madonna's", "Madonna\u2019s"),
    ]
    for t in variants:
        m = re.search(re.escape(t) + r"\s*\n\s*Vocabulary Preview", full, re.I)
        if m:
            return m.start()
    return -1


def unit_chunk(full: str, units: list[tuple[str, str, str]], unit_index: int) -> str:
    title = units[unit_index][0]
    start = unit_anchor(full, title)
    if start < 0:
        return ""
    if unit_index + 1 < len(units):
        end = unit_anchor(full, units[unit_index + 1][0])
        if end < 0:
            end = len(full)
    else:
        end = len(full)
    return full[start:end]


def fix_pdf_word_breaks(text: str) -> str:
    skip_lead = frozenset({"a", "i", "o"})

    def repl(m: re.Match[str]) -> str:
        if m.group(1) in skip_lead:
            return m.group(0)
        if m.start() > 0 and text[m.start() - 1] in "'’":
            return m.group(0)
        return m.group(1) + m.group(2)

    return re.sub(r"\b([a-z])\s+([a-z]{2,})\b", repl, text)


def clean_option(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    return fix_pdf_word_breaks(text)


def clean_idiom_term(raw: str) -> str:
    return (
        raw.replace("\uf06e", "")
        .replace("\uf0b7", "")
        .replace("♮", "")
        .strip()
        .lstrip("♦•-–")
        .strip()
    )


def extract_mcq_q1(chunk: str) -> tuple[str, list[str]] | None:
    matches = list(MCQ_SECTION_RE.finditer(chunk))
    if not matches:
        return None
    block = matches[-1].group(1)
    q1 = Q1_RE.search(block)
    if not q1:
        return None
    stem, a, b, c, d = q1.groups()
    stem = clean_option(stem)
    options = [clean_option(x) for x in (a, b, c, d)]
    return stem, options


def extract_answer(key_text: str, unit_num: int) -> str | None:
    m = re.search(
        rf"Unit\s+{unit_num}\s+[\s\S]*?Reading Comprehension\s+([\s\S]*?)"
        r"(?:Idiomatic|Find these|Summary|Unit\s+\d+|$)",
        key_text,
        re.I,
    )
    if not m:
        return None
    line = re.sub(r"\s+", " ", m.group(1)).strip()
    for n, letter in re.findall(r"(\d+)\.\s*([a-dA-D])", line):
        if int(n) == 1:
            return letter.upper()
    return None


def letter_to_index(letter: str) -> int:
    return {"A": 0, "B": 1, "C": 2, "D": 3}.get(letter.upper(), 0)


def parse_passages_from_txt(txt: str) -> dict[int, tuple[str, str]]:
    """Return passage number -> (title, body)."""
    out: dict[int, tuple[str, str]] = {}
    blocks = re.split(r"READING PASSAGE\s+(\d+)\s*\n", txt)
    i = 1
    while i < len(blocks):
        num = int(blocks[i])
        body = blocks[i + 1]
        i += 2
        stop = re.search(r"\n(?:IMAGE|AUDIO|IDIOMS|QUICK CHECK)\b", body)
        section = body[: stop.start()] if stop else body
        lines = [ln.strip() for ln in section.strip().split("\n") if ln.strip()]
        if not lines:
            continue
        title = lines[0]
        passage = "\n\n".join(lines[1:]).strip()
        out[num] = (title, passage)
    return out


def first_sentence(text: str) -> str:
    flat = re.sub(r"\s+", " ", text).strip()
    m = re.match(r"^(.+?[.!?])(?:\s+|$)", flat)
    if m:
        return m.group(1).strip()
    return flat[:160].strip()


def subheadline_from_passage(passage: str, max_len: int = 160) -> str:
    sentence = first_sentence(passage)
    if sentence and sentence[0].islower():
        sentence = sentence[0].upper() + sentence[1:]
    if len(sentence) <= max_len:
        return sentence
    cut = sentence[: max_len - 1].rsplit(" ", 1)[0]
    return cut + "…"


# Passages whose PDF extract starts mid-sentence — do not auto-truncate first_sentence.
CURATED_SUBHEADLINES: dict[int, str] = {
    6: "When old buildings in Beijing are torn down, one collector rescues decorative folk art before it is lost.",
    8: "The road to the future leads through the past — two hockey-loving brothers launched the inline skating craze from an antique pair of skates.",
    9: "Snake-shaped robots may explore Mars and repair spacecraft more effectively than traditional wheeled machines.",
    13: "In the 1970s, architect Michael Reynolds designed cheap, energy-efficient homes built from recycled materials — earthships.",
    16: "Madonna rose from a tough start to become a pop icon — and now fights online piracy with characteristically bold tactics.",
    18: "The FIFA World Cup trophy is only thirty-six centimeters tall, yet champions never take the real prize home.",
    19: "Phishers send more than three billion scam messages each year — even tricking a small fraction of victims can be hugely profitable.",
    20: "At Chillingham Castle, a strange noise and a cold rush of air may mean you have met one of England's most famous ghosts.",
}


def parse_idioms_from_txt(txt: str, unit_num: int) -> list[tuple[str, str]]:
    m = re.search(
        rf"READING PASSAGE\s+{unit_num}\s*[\s\S]*?\nIDIOMS\s*\n(.*?)(?:\nQUICK CHECK|\nREADING PASSAGE)",
        txt,
        re.I | re.S,
    )
    if not m:
        return []
    items: list[tuple[str, str]] = []
    for line in m.group(1).split("\n"):
        line = line.strip()
        if not line:
            continue
        pipe = re.match(r"^(.+?)\s*\|\s*(.+)$", line)
        if pipe:
            term = clean_idiom_term(pipe.group(1))
            defn = pipe.group(2).strip()
            if term:
                items.append((term, defn))
    return items


def translate_idiom_def(defn_en: str) -> str:
    key = re.sub(r"\s+", " ", defn_en).strip().lower()
    if key in IDIOM_DEF_PHRASES:
        return IDIOM_DEF_PHRASES[key]
    for en, vi in IDIOM_DEF_PHRASES.items():
        if en.lower() == key:
            return vi
    cleaned = defn_en.strip()
    if cleaned.lower().startswith("to "):
        return cleaned
    return cleaned


def extract_glossary_terms(chunk: str) -> list[tuple[str, str]]:
    """Vocabulary Preview glossary (`3 glacier: ...`) before passage."""
    pre = chunk.split("Pre-Reading")
    section = pre[1] if len(pre) > 1 else chunk
    end = re.search(r"Reading Time|Track\s+\d|\n\s*\d+\s*\n\s*[A-Z]", section, re.I)
    block = section[: end.start()] if end else section[:4000]
    items: list[tuple[str, str]] = []
    seen: set[str] = set()
    for m in GLOSSARY_LINE_RE.finditer(block):
        term = re.sub(r"\s+", " ", m.group(1)).strip()
        defn = re.sub(r"\s+", " ", m.group(2)).strip()
        key = term.lower()
        if key in seen or len(term) < 3:
            continue
        seen.add(key)
        items.append((term, defn))
    return items


FILL_IN_TARGET_RE = re.compile(
    r"\d+\.\s+_{1,6}\s+(?:He|She|The|There|Not all|Are|Which|What)\s+(\w+)",
    re.I,
)


def extract_fill_in_terms(chunk: str) -> list[tuple[str, str]]:
    """Fill-in-blank Vocabulary Preview (RC3 unit 1 style)."""
    pre = chunk.split("Pre-Reading")
    if len(pre) < 2:
        return []
    section = pre[1]
    end = re.search(r"Reading Time|Track\s+\d|\n\s*S\s*\n", section, re.I)
    block = section[: end.start()] if end else section[:3000]
    items: list[tuple[str, str]] = []
    seen: set[str] = set()
    fill_map: dict[str, str] = {
        "attempted": "cố gắng, thử",
        "heart": "trung tâm, cốt lõi",
        "versions": "phiên bản",
        "critics": "nhà phê bình",
        "transformed": "biến đổi",
        "resists": "chống lại, không chịu",
        "author": "tác giả",
    }
    for m in FILL_IN_TARGET_RE.finditer(block):
        term = m.group(1).lower()
        if term in seen:
            continue
        seen.add(term)
        items.append((m.group(1), fill_map.get(term, preview_term_definition_vi(term))))
    return items


def extract_preview_terms(chunk: str) -> list[str]:
    pre = chunk.split("Pre-Reading")
    if len(pre) < 2:
        return []
    section = pre[1]
    end = re.search(r"Reading Time|Track\s+\d", section, re.I)
    block = section[: end.start()] if end else section[:2500]
    terms: list[str] = []
    seen: set[str] = set()
    for m in PREVIEW_TERM_RE.finditer(block):
        word = m.group(1).lower()
        if word in {"think", "write", "which", "what", "does", "their", "have", "that", "with", "from"}:
            continue
        if word not in seen:
            seen.add(word)
            terms.append(m.group(1))
    return terms


SKIP_PASSAGE_TERMS = frozenset(
    {
        "however", "although", "because", "there", "these", "those", "their",
        "people", "something", "another", "through", "without", "between",
        "health", "don't", "doesn't", "english", "american", "however",
    }
)


def extract_passage_key_terms(passage: str, limit: int = 8) -> list[str]:
    """Fallback terms from passage body (multi-word names / long content words)."""
    flat = re.sub(r"\s+", " ", passage)
    candidates: list[tuple[int, str]] = []
    seen: set[str] = set()
    for m in re.finditer(r"\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})\b", flat):
        term = m.group(1).strip()
        key = term.lower()
        if key in seen or key in SKIP_PASSAGE_TERMS:
            continue
        seen.add(key)
        candidates.append((len(term) + 10, term))
    for m in re.finditer(r"\b([a-z]{8,})\b", flat.lower()):
        term = m.group(1)
        if term in seen or term in SKIP_PASSAGE_TERMS:
            continue
        seen.add(term)
        candidates.append((len(term), term))
    candidates.sort(key=lambda x: (-x[0], x[1]))
    return [t for _, t in candidates[:limit]]


GLOSSARY_DEF_VI: dict[str, str] = {
    "a black bird, often seen in fields": "chim đen, thường thấy ở cánh đồng",
    "a black bird that looks similar to crows,": "chim đen giống quạ nhưng lớn hơn",
    "a thing that brings something": "dấu hiệu mang theo điều gì",
    "a place you go after dying": "nơi con người đến sau khi chết",
    "a sign": "dấu hiệu",
    "the english monarchy and": "vương triều và chính phủ Anh",
    "to cut; to trim": "cắt; tỉa",
    "a brown and red bird that often": "chim nâu đỏ, thường làm tổ trong nhà kho",
    "to give luck or good fortune": "ban may mắn, phước lành",
    "the resulting situation": "tình huống sau đó",
}


def glossary_def_to_vi(defn_en: str) -> str:
    key = re.sub(r"\s+", " ", defn_en).strip().lower()
    if key in GLOSSARY_DEF_VI:
        return GLOSSARY_DEF_VI[key]
    if key in IDIOM_DEF_PHRASES:
        return IDIOM_DEF_PHRASES[key]
    cleaned = defn_en.strip()
    if cleaned.lower().startswith(("a ", "an ", "the ", "to ")):
        return cleaned
    return cleaned


def preview_term_definition_vi(term: str) -> str:
    lower = term.lower()
    simple: dict[str, str] = {
        "attempted": "cố gắng",
        "transformed": "biến đổi",
        "critics": "nhà phê bình",
        "resists": "chống lại, không chịu",
        "glaciers": "sông băng",
        "permafrost": "đất đóng băng vĩnh cửu",
        "exercise": "tập luyện",
        "museum": "bảo tàng",
        "robot": "robot",
        "inline": "inline (trượt patin)",
        "snakebot": "robot dạng rắn",
        "flowers": "hoa",
        "restoration": "phục hồi",
        "flood": "lũ lụt",
        "earthship": "nhà Earthship (tự xây thân thiện môi trường)",
        "antioxidants": "chất chống oxy hóa",
        "daydreaming": "mơ giấc",
        "downloads": "tải xuống",
        "memory": "trí nhớ",
        "trophy": "cúp, danh hiệu",
        "phishing": "lừa đảo trực tuyến (phishing)",
        "ghost": "ma, hồn ma",
        "castle": "lâu đài",
    }
    return simple.get(lower, f"từ khóa: {term}")


def vocab_level(term: str) -> str:
    if len(term.split()) >= 2 or any(c in term for c in ("-", "'")):
        return "C1"
    if len(term) > 10:
        return "C1"
    return "B1-B2"


def build_vocabulary(
    unit_num: int,
    idioms: list[tuple[str, str]],
    glossary: list[tuple[str, str]],
    preview_terms: list[str],
    passage: str,
    chunk: str,
) -> list[tuple[str, str, str]]:
    items: list[tuple[str, str, str]] = []
    seen: set[str] = set()

    for term, defn_en in idioms:
        term = clean_idiom_term(term)
        key = term.lower()
        if not term or key in seen:
            continue
        seen.add(key)
        items.append((term, translate_idiom_def(defn_en), vocab_level(term)))

    for term, defn_en in glossary:
        key = term.lower()
        if key in seen:
            continue
        seen.add(key)
        items.append((term, glossary_def_to_vi(defn_en), vocab_level(term)))

    if len(items) < 5 and not glossary:
        for term, defn_vi in extract_fill_in_terms(chunk):
            key = term.lower()
            if key in seen:
                continue
            seen.add(key)
            items.append((term, defn_vi, vocab_level(term)))
            if len(items) >= 5:
                break

    if len(items) < 5 and len(glossary) < 2:
        for term in preview_terms:
            key = term.lower()
            if key in seen:
                continue
            seen.add(key)
            items.append((term, preview_term_definition_vi(term), vocab_level(term)))
            if len(items) >= 5:
                break

    if len(items) < 5:
        for term in extract_passage_key_terms(passage):
            key = term.lower()
            if key in seen:
                continue
            seen.add(key)
            items.append((term, preview_term_definition_vi(term), vocab_level(term)))
            if len(items) >= 5:
                break

    return items[:5]


def question_to_vi(question_en: str) -> str:
    key = re.sub(r"\s+", " ", question_en).strip().lower()
    if key in QUESTION_VI:
        return QUESTION_VI[key]
    if "main idea" in key:
        return "Ý chính của bài đọc là gì?"
    if "main focus" in key or "focus of" in key:
        return "Trọng tâm của bài đọc là gì?"
    if "main purpose" in key:
        return "Mục đích chính của bài là gì?"
    if "mainly about" in key:
        return "Bài chủ yếu nói về gì?"
    return question_en


def options_to_vi(unit_num: int, options_en: list[str]) -> list[str]:
    if unit_num in OPTION_VI_BY_UNIT:
        return OPTION_VI_BY_UNIT[unit_num]
    return options_en


def find_support_sentence(passage: str, option: str) -> str:
    flat = re.sub(r"\s+", " ", passage)
    words = [w.lower() for w in re.findall(r"[A-Za-z]{4,}", option)]
    if not words:
        return ""
    sentences = re.split(r"(?<=[.!?])\s+", flat)
    best = ""
    best_score = 0
    for s in sentences:
        lower = s.lower()
        score = sum(1 for w in words if w in lower)
        if score > best_score:
            best_score = score
            best = s.strip()
    return best


def build_explanations(
    correct_en: str,
    correct_vi: str,
    passage: str,
) -> tuple[str, str]:
    support = find_support_sentence(passage, correct_en)
    if support:
        expl_en = f"The passage states: {support}"
        expl_vi = f"Bài nêu: {support}"
    else:
        expl_en = f"The correct answer is: {correct_en}."
        expl_vi = f"Đáp án đúng là: {correct_vi}."
    return expl_en, expl_vi


def json_escape(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
    )


def write_meta(units_data: list[dict]) -> None:
    lines = [
        "/** Metadata cho 20 unit Reading Challenge 3 (Compass Publishing). */",
        "export type ReadingChallenge3UnitMeta = {",
        "  passage: number;",
        "  title: string;",
        "  subheadline: string;",
        f"  topic: {TOPIC_UNION};",
        "  difficulty: \"Dễ\" | \"Trung bình\" | \"Trung bình – khó\" | \"Khó\";",
        "};",
        "",
        "export const READING_CHALLENGE_3_UNITS: ReadingChallenge3UnitMeta[] = [",
    ]
    for row in units_data:
        lines.append("  {")
        lines.append(f"    passage: {row['passage']},")
        lines.append(f"    title: \"{json_escape(row['title'])}\",")
        lines.append(f"    subheadline:")
        lines.append(f"      \"{json_escape(row['subheadline'])}\",")
        lines.append(f"    topic: \"{row['topic']}\",")
        lines.append(f"    difficulty: \"{row['difficulty']}\",")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    OUT_META.write_text("\n".join(lines), encoding="utf-8")


def write_quiz(quiz_data: dict[str, dict]) -> None:
    lines = [
        "import type { QuickCheckQuiz } from \"@/lib/reading/passage-quiz\";",
        "",
        "/** Kiểm tra nhanh Compass — câu đọc hiểu theo nội dung bài (MCQ Q1 từ sách). */",
        "export const READING_CHALLENGE_3_QUIZ: Record<string, QuickCheckQuiz> = {",
    ]
    for key in sorted(quiz_data.keys(), key=lambda k: int(k.split("-p")[1])):
        q = quiz_data[key]
        lines.append(f"  \"{key}\": {{")
        lines.append(f"    questionEn: \"{json_escape(q['questionEn'])}\",")
        lines.append(f"    questionVi: \"{json_escape(q['questionVi'])}\",")
        lines.append("    optionsEn: [")
        for opt in q["optionsEn"]:
            lines.append(f"      \"{json_escape(opt)}\",")
        lines.append("    ],")
        lines.append("    optionsVi: [")
        for opt in q["optionsVi"]:
            lines.append(f"      \"{json_escape(opt)}\",")
        lines.append("    ],")
        lines.append(f"    correctIndex: {q['correctIndex']},")
        lines.append(f"    explanationEn: \"{json_escape(q['explanationEn'])}\",")
        lines.append(f"    explanationVi: \"{json_escape(q['explanationVi'])}\",")
        lines.append("  },")
    lines.append("};")
    lines.append("")
    OUT_QUIZ.write_text("\n".join(lines), encoding="utf-8")


def write_vocabulary(vocab_data: dict[str, list[tuple[str, str, str]]]) -> None:
    lines = [
        "import type { PassageVocabItem } from \"@/lib/reading/passage-vocabulary\";",
        "",
        "/** Từ vựng curated theo unit — idioms từ .txt + từ khóa Vocabulary Preview. */",
        "export const READING_CHALLENGE_3_VOCABULARY: Record<string, PassageVocabItem[]> = {",
    ]
    for key in sorted(vocab_data.keys(), key=lambda k: int(k.split("-p")[1])):
        items = vocab_data[key]
        lines.append(f"  \"{key}\": [")
        for term, defn_vi, level in items:
            lines.append(
                f"    {{ term: \"{json_escape(term)}\", definitionVi: \"{json_escape(defn_vi)}\", level: \"{level}\" }},"
            )
        lines.append("  ],")
    lines.append("};")
    lines.append("")
    OUT_VOCAB.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    build = load_build_module()
    units: list[tuple[str, str, str]] = build.UNITS

    if not PDF_PATH.is_file():
        print(f"ERROR: missing PDF {PDF_PATH}")
        return 1
    if not KEY_PATH.is_file():
        print(f"ERROR: missing answer key {KEY_PATH}")
        return 1
    if not TXT_PATH.is_file():
        print(f"ERROR: missing txt {TXT_PATH}")
        return 1

    full = normalize_apostrophes(load_pdf_text(PDF_PATH))
    key_text = normalize_apostrophes(load_pdf_text(KEY_PATH))
    txt = TXT_PATH.read_text(encoding="utf-8")
    passages = parse_passages_from_txt(txt)

    meta_rows: list[dict] = []
    quiz_data: dict[str, dict] = {}
    vocab_data: dict[str, list[tuple[str, str, str]]] = {}
    failed: list[str] = []

    for i, (title, topic, difficulty) in enumerate(units):
        unit_num = i + 1
        article_id = f"reading-challenge-{CHALLENGE_NUM}-p{unit_num}"
        chunk = unit_chunk(full, units, i)

        if not chunk:
            failed.append(f"Unit {unit_num} ({title}): missing PDF chunk anchor")
            continue

        mcq = extract_mcq_q1(chunk)
        answer_letter = extract_answer(key_text, unit_num)
        if not mcq:
            failed.append(f"Unit {unit_num} ({title}): MCQ Q1 extraction failed")
            continue
        if not answer_letter:
            failed.append(f"Unit {unit_num} ({title}): answer key Q1 missing")

        question_en, options_en = mcq
        correct_index = letter_to_index(answer_letter or "A")
        question_vi = question_to_vi(question_en)
        options_vi = options_to_vi(unit_num, options_en)
        passage_body = passages.get(unit_num, (title, ""))[1]
        correct_en = options_en[correct_index]
        correct_vi = options_vi[correct_index]
        expl_en, expl_vi = build_explanations(correct_en, correct_vi, passage_body)

        quiz_data[article_id] = {
            "questionEn": question_en,
            "questionVi": question_vi,
            "optionsEn": options_en,
            "optionsVi": options_vi,
            "correctIndex": correct_index,
            "explanationEn": expl_en,
            "explanationVi": expl_vi,
        }

        p_title, passage = passages.get(unit_num, (title, ""))
        subheadline = CURATED_SUBHEADLINES.get(unit_num) or (
            subheadline_from_passage(passage) if passage else title
        )
        meta_rows.append(
            {
                "passage": unit_num,
                "title": p_title or title,
                "subheadline": subheadline,
                "topic": topic,
                "difficulty": difficulty,
            }
        )

        idioms = parse_idioms_from_txt(txt, unit_num)
        glossary = extract_glossary_terms(chunk)
        preview_terms = extract_preview_terms(chunk)
        vocab_items = build_vocabulary(
            unit_num, idioms, glossary, preview_terms, passage_body, chunk,
        )
        if len(vocab_items) < 5:
            failed.append(
                f"Unit {unit_num} ({title}): only {len(vocab_items)} vocab items (need 5)"
            )
        vocab_data[article_id] = vocab_items

    if len(meta_rows) != len(units) or len(quiz_data) != len(units):
        failed.append(f"Expected {len(units)} units; got meta={len(meta_rows)} quiz={len(quiz_data)}")

    write_meta(meta_rows)
    write_quiz(quiz_data)
    write_vocabulary(vocab_data)

    print(f"Wrote {OUT_META}")
    print(f"Wrote {OUT_QUIZ} ({len(quiz_data)} quizzes)")
    print(f"Wrote {OUT_VOCAB} ({len(vocab_data)} vocab maps)")
    if failed:
        print("WARN / failed units:")
        for msg in failed:
            print(f"  - {msg}")
    else:
        print("All 20 units extracted successfully.")
    return 0 if not failed else 0


if __name__ == "__main__":
    sys.exit(main())
