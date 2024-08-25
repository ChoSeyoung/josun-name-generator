// Define the mappings for the months and days
import {NameMeaning} from "@/app/types/name.interface";

const monthMapping: { [key: number]: string } = {
    1: "웅",
    2: "서",
    3: "돌",
    4: "만",
    5: "용",
    6: "축",
    7: "칠",
    8: "쌍",
    9: "삼",
    10: "언",
    11: "개",
    12: "속"
};

const dayMapping: { [key: number]: string } = {
    1: "식",
    2: "국",
    3: "삼",
    4: "석",
    5: "늠",
    6: "꽃",
    7: "년",
    8: "돌",
    9: "민",
    10: "것",
    11: "돌",
    12: "복",
    13: "단",
    14: "냥",
    15: "퐁",
    16: "감",
    17: "속",
    18: "망",
    19: "칭",
    20: "박",
    21: "손",
    22: "룡",
    23: "방",
    24: "득",
    25: "국",
    26: "포",
    27: "래",
    28: "걸",
    29: "양",
    30: "컹",
    31: "슴"
};

const syllableMeaning: { [key: string]: string } = {
    "웅": "웅(雄): 이 한자는 '수컷', '강하다', '위대하다' 또는 '용맹스럽다'는 뜻을 가지고 있습니다. 일반적으로 힘 있고 용감한 사람을 의미하는 경우가 많습니다.",
    "서": "서(西): 이 한자는 '서쪽'을 의미하며, 차분함과 안정감을 상징합니다.",
    "돌": "돌(石): 이 한자는 '바위'를 의미하며, 강인함과 견고함을 상징합니다.",
    "만": "만(滿): '가득 차다', '풍부하다'는 뜻을 가지고 있으며, 풍요로움과 만족을 의미합니다.",
    "용": "용(龍): '용'을 의미하며, 용기와 권위를 상징합니다.",
    "축": "축(祝): '축하하다' 또는 '축복하다'는 뜻을 가지고 있습니다.",
    "칠": "칠(七): '행운'을 의미하며, 숫자 7의 상징적 의미를 지닙니다.",
    "쌍": "쌍(雙): '두 개', '쌍둥이'를 의미하며, 조화로움을 상징합니다.",
    "삼": "삼(三): '세 가지', '삼각형'을 의미하며, 견고함을 상징합니다.",
    "언": "언(言): '말'을 의미하며, 언어의 힘과 소통을 상징합니다.",
    "개": "개(開): '개척하다', '열다'를 의미하며, 새로운 시작과 도전을 상징합니다.",
    "속": "속(速): '빠르다', '신속하다'를 의미하며, 민첩함과 속도를 상징합니다.",
    "식": "식(植): '심다', '세우다' 또는 '기르다'는 뜻을 가지고 있으며, 성장과 번영을 상징합니다.",
    "국": "국(國): '나라', '국가'를 의미하며, 공동체와 애국심을 상징합니다.",
    "석": "석(石): '돌'을 의미하며, 강인함과 견고함을 상징합니다.",
    "늠": "늠(凜): '엄숙하고 강인함'을 의미합니다.",
    "꽃": "꽃(花): '아름다움', '생명'을 상징하며, 생명의 탄생과 아름다움을 의미합니다.",
    "년": "년(年): '해', '시간의 흐름'을 의미하며, 세월과 성장을 상징합니다.",
    "민": "민(民): '백성', '민족'을 의미하며, 공동체와 인민을 상징합니다.",
    "것": "것(物): '사물', '무언가'를 의미하며, 존재하는 모든 것을 상징합니다.",
    "복": "복(福): '행복', '복을 받다'는 뜻을 가지고 있으며, 행운과 번영을 상징합니다.",
    "단": "단(丹): '붉다', '단단하다'는 뜻을 가지고 있으며, 강인함을 상징합니다.",
    "냥": "냥(貓): '고양이'를 의미하며, 귀여움과 독립성을 상징합니다.",
    "퐁": "퐁(豊): '풍요로움', '풍부하다'는 뜻을 가지고 있으며, 번영과 충만함을 상징합니다.",
    "감": "감(感): '느끼다', '감정'을 의미하며, 감각과 감성을 상징합니다.",
    "망": "망(望): '희망', '바라다'는 뜻을 가지고 있으며, 미래에 대한 기대를 상징합니다.",
    "칭": "칭(稱): '칭찬하다', '이름'을 의미하며, 인정과 명성을 상징합니다.",
    "박": "박(拍): '박자', '리듬'을 의미하며, 질서와 조화를 상징합니다.",
    "손": "손(手): '손', '손길'을 의미하며, 사람 간의 교류와 협력을 상징합니다.",
    "룡": "룡(龍): '용'을 의미하며, 강력한 힘과 권위를 상징합니다.",
    "방": "방(防): '방어하다', '보호하다'를 의미하며, 안전과 방패를 상징합니다.",
    "득": "득(得): '얻다', '획득하다'를 의미하며, 성공과 성취를 상징합니다.",
    "포": "포(包): '포용하다', '포장하다'를 의미하며, 넓은 마음과 수용을 상징합니다.",
    "래": "래(來): '오다', '미래'를 의미하며, 다가올 시간과 희망을 상징합니다.",
    "걸": "걸(步): '걷다', '걸음'을 의미하며, 전진과 발전을 상징합니다.",
    "양": "양(羊): '양', '부드러움'을 의미하며, 평화와 온유를 상징합니다.",
    "컹": "컹(吠): '짖다', '강아지의 소리'를 의미하며, 활기참과 경계를 상징합니다.",
    "슴": "슴(心): '가슴', '마음'을 의미하며, 감정과 내면을 상징합니다."
};

export function generateNameWithMeaning(month: number, day: number): NameMeaning {
    const monthPart = monthMapping[month];
    const dayPart = dayMapping[day];

    const monthMeaning = syllableMeaning[monthPart];
    const dayMeaning = syllableMeaning[dayPart];

    const name = `${monthPart}${dayPart}`;

    return { name, monthMeaning, dayMeaning };
}