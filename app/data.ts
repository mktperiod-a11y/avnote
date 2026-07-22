export type Trend = "up" | "down" | "same" | "new";
export type RankingCategory = "overall" | "rising" | "newcomer" | "steady";

export type Actress = {
  slug: string;
  rank: number;
  nameKo: string;
  nameJp: string;
  nameEn: string;
  debut?: string;
  status: string;
  trend: Trend;
  previousRank?: number;
  movement?: number;
  categories: RankingCategory[];
  headline: string;
  summary: string;
  introduction: string[];
  keywords: string[];
  image: string;
  imagePosition: string;
  photoCredit: string;
  photoLicense: string;
  photoSource: string;
};

export const ISSUE = {
  number: "01",
  period: "2026.06",
  checkedAt: "2026.07.16",
  publishedAt: "2026.07.04",
  title: "2026년 6월 FANZA 통판 배우 랭킹",
  description:
    "FANZA 통판 구매수 기준 월간 배우 랭킹을 그대로 기록하고, 5월 순위와 비교해 방향을 덧붙였습니다.",
};

export const PRIMARY_SOURCE = {
  publisher: "FANZA",
  surface: "통판",
  metric: "통판 구매수",
  officialUrl:
    "https://www.dmm.co.jp/mono/dvd/-/ranking/=/mode=actress/term=monthly/",
  referenceUrl: "https://taishurx.jp/detail/32733/",
};

const commonsRedirect = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}?width=900`;

export const ACTRESSES: Actress[] = [
  {
    slug: "seto-kanna",
    rank: 1,
    nameKo: "세토 칸나",
    nameJp: "瀬戸環奈",
    nameEn: "Kanna Seto",
    debut: "2025",
    status: "활동 중",
    trend: "up",
    previousRank: 2,
    movement: 1,
    categories: ["overall", "rising", "steady"],
    headline: "5월 2위에서 한 계단 올라선 월간 1위",
    summary:
      "2026년 6월 FANZA 통판 구매수 기준 배우 랭킹 1위, 5월에도 2위로 확인됐습니다.",
    introduction: [
      "세토 칸나는 FANZA 통판 월간 배우 랭킹에서 2026년 5월 2위, 6월 1위로 확인됐습니다. 두 달 연속 상위권이면서 순위도 한 단계 올랐습니다.",
      "이 기록은 통판 구매수라는 한 가지 지표만 보여줍니다. 디지털 다운로드·스트리밍이나 렌탈 순위와 합산하지 않았습니다.",
    ],
    keywords: ["월간 1위", "2개월 연속", "상승 1계단"],
    image: commonsRedirect("TRE20250810Videoframe_177285.png"),
    imagePosition: "50% 18%",
    photoCredit: "RIKIBRO 瑞奇哥",
    photoLicense: "CC BY 3.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:TRE20250810Videoframe_177285.png",
  },
  {
    slug: "satsuki-nao",
    rank: 2,
    nameKo: "사츠키 나오",
    nameJp: "彩月七緒",
    nameEn: "Nao Satsuki",
    status: "활동 중",
    trend: "up",
    previousRank: 5,
    movement: 3,
    categories: ["overall", "rising", "steady"],
    headline: "5월 5위에서 6월 2위로 오른 상승 기록",
    summary:
      "2026년 6월 FANZA 통판 월간 2위, 전월보다 세 계단 상승한 흐름입니다.",
    introduction: [
      "사츠키 나오는 FANZA 통판 월간 배우 랭킹에서 2026년 5월 5위, 6월 2위로 확인됐습니다. 두 달 연속 상위 10위에 포함됐고 상승 폭은 3계단입니다.",
      "확인되지 않은 생년월일이나 신체 정보는 채우지 않습니다. AVNOTE는 순위와 함께 지표·기간·공개일을 남기는 것을 우선합니다.",
    ],
    keywords: ["월간 2위", "2개월 연속", "상승 3계단"],
    image: commonsRedirect(
      "Trend Girls Photo Session (May 3, 2025)IMG 8749.jpg",
    ),
    imagePosition: "50% 26%",
    photoCredit: "Bject",
    photoLicense: "CC BY-SA 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Trend_Girls_Photo_Session_(May_3,_2025)IMG_8749.jpg",
  },
  {
    slug: "saika-kawakita",
    rank: 3,
    nameKo: "카와키타 사이카",
    nameJp: "河北彩伽",
    nameEn: "Saika Kawakita",
    debut: "2018",
    status: "활동 중",
    trend: "up",
    previousRank: 4,
    movement: 1,
    categories: ["overall", "rising", "steady"],
    headline: "두 달 연속 상위권, 4위에서 3위로",
    summary:
      "2026년 5월 4위에 이어 6월 3위로 한 계단 오른 꾸준한 상위권입니다.",
    introduction: [
      "카와키타 사이카는 FANZA 통판 월간 배우 랭킹에서 2026년 5월 4위, 6월 3위로 확인됐습니다. 이번 호에서는 급상승보다 두 달 연속 상위권이라는 흐름이 더 뚜렷합니다.",
      "랭킹 공개 당시의 표기를 보존하고 현재 대표 표기와 별칭은 분리해 관리합니다. 작품이나 품번은 다루지 않고 인물과 랭킹 기록에만 집중합니다.",
    ],
    keywords: ["월간 3위", "2개월 연속", "상승 1계단"],
    image: commonsRedirect("TRE20250809Videoframe_195367CUTOUT.png"),
    imagePosition: "50% 16%",
    photoCredit: "RIKIBRO 瑞奇哥",
    photoLicense: "CC BY 3.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:TRE20250809Videoframe_195367CUTOUT.png",
  },
  {
    slug: "mio-ishikawa",
    rank: 4,
    nameKo: "이시카와 미오",
    nameJp: "石川澪",
    nameEn: "Mio Ishikawa",
    debut: "2021",
    status: "활동 중",
    trend: "up",
    previousRank: 6,
    movement: 2,
    categories: ["overall", "rising", "steady"],
    headline: "5월 6위에서 6월 4위로 두 계단 상승",
    summary:
      "2026년 6월 FANZA 통판 월간 4위, 두 달 연속 상위 10위에 포함됐습니다.",
    introduction: [
      "이시카와 미오는 FANZA 통판 월간 배우 랭킹에서 2026년 5월 6위, 6월 4위로 확인됐습니다. 상승 폭은 2계단입니다.",
      "프로필에서는 확인된 활동 시작 연도와 이름 표기, 통판 월간 순위만 제공합니다. 추가 정보는 공개 근거가 확보될 때 갱신합니다.",
    ],
    keywords: ["월간 4위", "2개월 연속", "상승 2계단"],
    image: commonsRedirect(
      'January 24, 2026 "Modern Mahjong Academy" in Kawachi Town, Ibaraki Prefecture IMG 3037.jpg',
    ),
    imagePosition: "50% 13%",
    photoCredit: "Bject",
    photoLicense: "CC BY 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:January_24,_2026_%22Modern_Mahjong_Academy%22_in_Kawachi_Town,_Ibaraki_Prefecture_IMG_3037.jpg",
  },
  {
    slug: "yuika-onosaka",
    rank: 5,
    nameKo: "오노사카 유이카",
    nameJp: "小野坂ゆいか",
    nameEn: "Yuika Onosaka",
    status: "활동 중",
    trend: "up",
    previousRank: 10,
    movement: 5,
    categories: ["overall", "rising", "steady"],
    headline: "이번 호 최대 상승, 10위에서 5위로",
    summary:
      "2026년 5월 10위에서 6월 5위로 다섯 계단 올라 이번 호 최대 상승을 기록했습니다.",
    introduction: [
      "오노사카 유이카는 FANZA 통판 월간 배우 랭킹에서 2026년 5월 10위, 6월 5위로 확인됐습니다. 비교 가능한 두 달 자료에서 가장 큰 상승 폭인 5계단을 기록했습니다.",
      "상승 폭은 두 월간 랭킹의 순위 차이를 단순 비교한 값이며 판매량 증가율을 뜻하지 않습니다.",
    ],
    keywords: ["월간 5위", "최대 상승", "상승 5계단"],
    image: commonsRedirect(
      "Trend Girls Photo Session (May 4, 2025)IMG 3206.jpg",
    ),
    imagePosition: "50% 18%",
    photoCredit: "Bject",
    photoLicense: "CC BY-SA 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Trend_Girls_Photo_Session_(May_4,_2025)IMG_3206.jpg",
  },
  {
    slug: "miyu-aizawa",
    rank: 6,
    nameKo: "아이자와 미유",
    nameJp: "逢沢みゆ",
    nameEn: "Miyu Aizawa",
    status: "활동 중",
    trend: "down",
    previousRank: 1,
    movement: 5,
    categories: ["overall", "steady"],
    headline: "5월 1위에 이어 6월에도 상위 10위 유지",
    summary:
      "2026년 6월 월간 6위로 조정됐지만 5월 1위에 이어 두 달 연속 상위권입니다.",
    introduction: [
      "아이자와 미유는 FANZA 통판 월간 배우 랭킹에서 2026년 5월 1위, 6월 6위로 확인됐습니다. 순위는 5계단 내려갔지만 두 달 연속 상위 10위에 포함됐습니다.",
      "하락 표시는 판매량 감소율이 아니라 월간 순위 위치의 변화만 뜻합니다. 원시 구매 건수는 공개되지 않았습니다.",
    ],
    keywords: ["월간 6위", "전월 1위", "2개월 연속"],
    image: commonsRedirect("Miyu Aizawa, 2024 (cropped).jpg"),
    imagePosition: "50% 15%",
    photoCredit: "Bject",
    photoLicense: "CC BY 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Miyu_Aizawa,_2024_(cropped).jpg",
  },
  {
    slug: "yu-tano",
    rank: 7,
    nameKo: "타노 유",
    nameJp: "田野憂",
    nameEn: "Yū Tano",
    debut: "2024",
    status: "활동 중",
    trend: "new",
    categories: ["overall", "newcomer"],
    headline: "6월 통판 월간 상위 10위에 새로 진입",
    summary:
      "2026년 5월 상위 10위 밖에서 6월 7위로 새롭게 확인된 배우입니다.",
    introduction: [
      "타노 유는 FANZA 통판 월간 배우 랭킹에서 2026년 6월 7위로 확인됐습니다. 5월 상위 10위에는 없었기 때문에 이번 호에서는 신규 진입으로 표시합니다.",
      "신규 진입은 데뷔를 뜻하지 않습니다. 비교 대상인 직전 월간 상위 10위에 없었다는 의미입니다.",
    ],
    keywords: ["월간 7위", "신규 진입", "2024 데뷔"],
    image: commonsRedirect("Yu Tano, 2025 (cropped).jpg"),
    imagePosition: "50% 11%",
    photoCredit: "夙川御影",
    photoLicense: "CC BY-SA 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Yu_Tano,_2025_(cropped).jpg",
  },
  {
    slug: "mitsuri-nagahama",
    rank: 8,
    nameKo: "나가하마 미츠리",
    nameJp: "長浜みつり",
    nameEn: "Mitsuri Nagahama",
    status: "활동 중",
    trend: "new",
    categories: ["overall", "newcomer"],
    headline: "6월 월간 8위로 상위 10위 신규 진입",
    summary:
      "2026년 5월 상위 10위 밖에서 6월 FANZA 통판 월간 8위로 확인됐습니다.",
    introduction: [
      "나가하마 미츠리는 FANZA 통판 월간 배우 랭킹에서 2026년 6월 8위로 확인됐습니다. 직전 달 상위 10위에 없었기 때문에 신규 진입으로 분류했습니다.",
      "11위 이하의 정확한 이전 순위는 공개 기사만으로 확인하지 못해 임의의 상승 폭은 표시하지 않습니다.",
    ],
    keywords: ["월간 8위", "신규 진입", "이번 호 주목"],
    image: commonsRedirect(
      "Trend Girls Photo Session (September 14, 2024)IMG 4990.jpg",
    ),
    imagePosition: "50% 18%",
    photoCredit: "Bject",
    photoLicense: "CC BY 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Trend_Girls_Photo_Session_(September_14,_2024)IMG_4990.jpg",
  },
  {
    slug: "nao-jinguji",
    rank: 9,
    nameKo: "진구지 나오",
    nameJp: "神宮寺ナオ",
    nameEn: "Nao Jinguji",
    status: "활동 중",
    trend: "new",
    categories: ["overall", "newcomer"],
    headline: "6월 통판 월간 9위로 신규 진입",
    summary:
      "2026년 5월 상위 10위 밖에서 6월 FANZA 통판 월간 9위로 확인됐습니다.",
    introduction: [
      "진구지 나오는 FANZA 통판 월간 배우 랭킹에서 2026년 6월 9위로 확인됐습니다. 5월 상위 10위에는 없어 이번 호 신규 진입 목록에 포함했습니다.",
      "디지털과 렌탈 랭킹은 구매·이용 방식이 다르므로 통판 순위와 하나의 점수로 합치지 않습니다.",
    ],
    keywords: ["월간 9위", "신규 진입", "FANZA 통판"],
    image: commonsRedirect("TRE20250810Videoframe_477481.png"),
    imagePosition: "50% 15%",
    photoCredit: "RIKIBRO 瑞奇哥",
    photoLicense: "CC BY 3.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:TRE20250810Videoframe_477481.png",
  },
  {
    slug: "kana-morisawa",
    rank: 10,
    nameKo: "모리사와 가나",
    nameJp: "森沢かな",
    nameEn: "Kana Morisawa",
    status: "활동 중",
    trend: "new",
    categories: ["overall", "newcomer"],
    headline: "6월 월간 10위로 상위권에 새로 등장",
    summary:
      "2026년 5월 상위 10위 밖에서 6월 FANZA 통판 월간 10위로 확인됐습니다.",
    introduction: [
      "모리사와 가나는 FANZA 통판 월간 배우 랭킹에서 2026년 6월 10위로 확인됐습니다. 직전 달 상위 10위에 없었기 때문에 신규 진입으로 표시합니다.",
      "사진은 Wikimedia Commons의 공개 라이선스 자료를 사용하며 저작자와 원본 링크를 프로필마다 표시합니다.",
    ],
    keywords: ["월간 10위", "신규 진입", "FANZA 통판"],
    image: commonsRedirect(
      'Movie “Blue Porno” Stage Greetings Ikebukuro Cinema Rosa IMG 9655-1.jpg',
    ),
    imagePosition: "50% 12%",
    photoCredit: "Bject",
    photoLicense: "CC BY-SA 4.0",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Movie_%E2%80%9CBlue_Porno%E2%80%9D_Stage_Greetings_Ikebukuro_Cinema_Rosa_IMG_9655-1.jpg",
  },
];

export const CATEGORY_LABELS: Record<
  RankingCategory,
  { label: string; note: string }
> = {
  overall: {
    label: "월간 판매",
    note: "2026년 6월 FANZA 통판 구매수 기준 공식 배우 순서",
  },
  rising: {
    label: "급상승",
    note: "2026년 5월과 6월 통판 월간 순위를 비교해 상승한 배우",
  },
  newcomer: {
    label: "신규 진입",
    note: "5월 상위 10위 밖에서 6월 상위 10위에 새로 들어온 배우",
  },
  steady: {
    label: "2개월 연속",
    note: "2026년 5월과 6월 월간 상위 10위에 모두 포함된 배우",
  },
};

export const METHODOLOGY = [
  {
    index: "01",
    title: "공식 순서를 그대로 씁니다",
    description:
      "2026년 6월 FANZA 통판 구매수 기준 배우 순서를 임의 점수로 재가공하지 않습니다.",
  },
  {
    index: "02",
    title: "변동은 전월과만 비교합니다",
    description:
      "급상승·하락·신규 진입은 같은 지표의 2026년 5월 월간 순위와 비교합니다.",
  },
  {
    index: "03",
    title: "통판·디지털·렌탈을 분리합니다",
    description:
      "구매 방식과 지표가 다른 순위를 하나의 종합 인기 점수로 섞지 않습니다.",
  },
  {
    index: "04",
    title: "공개되지 않은 수치는 만들지 않습니다",
    description:
      "원시 구매 건수·판매량·11위 이하 순위는 공개 자료로 확인되지 않으면 표시하지 않습니다.",
  },
];

export type ArchivePeriod = {
  key: string;
  label: string;
  shortLabel: string;
  period: string;
  issue: string;
  kind: "monthly" | "annual";
  checkedAt: string;
  sourceUrl: string;
  sourceLabel: string;
  rankings: Array<[string, string, string]>;
};

export const ARCHIVE_PERIODS: ArchivePeriod[] = [
  { key: "2026-06", label: "2026년 6월", shortLabel: "6월", period: "2026.06", issue: "01", kind: "monthly", checkedAt: "2026.07.16", sourceUrl: "https://taishurx.jp/detail/32733/", sourceLabel: "2026년 6월 공개 순위", rankings: ACTRESSES.map(({ nameKo, nameJp, nameEn }) => [nameKo, nameJp, nameEn]) },
  { key: "2026-05", label: "2026년 5월", shortLabel: "5월", period: "2026.05", issue: "02", kind: "monthly", checkedAt: "2026.07.22", sourceUrl: "https://www.sina.cn/news/detail/5305006739947620.html", sourceLabel: "2026년 5월 공개 순위", rankings: [
    ["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["세토 칸나","瀬戸環奈","Kanna Seto"],["하타노 유이","波多野結衣","Yui Hatano"],["카와키타 사이카","河北彩伽","Saika Kawakita"],["사츠키 나오","彩月七緒","Nao Satsuki"],["이시카와 미오","石川澪","Mio Ishikawa"],["키타오카 카린","北岡果林","Karin Kitaoka"],["유키무라 미즈키","幸村泉希","Mizuki Yukimura"],["하카타 이로하","博多彩葉","Iroha Hakata"],["오노사카 유이카","小野坂ゆいか","Yuika Onosaka"]] },
  { key: "2026-04", label: "2026년 4월", shortLabel: "4월", period: "2026.04", issue: "03", kind: "monthly", checkedAt: "2026.07.22", sourceUrl: "https://www.dmm.co.jp/mono/dvd/-/ranking/=/mode=actress/term=monthly/", sourceLabel: "FANZA 통판 월간 아카이브", rankings: [
    ["세토 칸나","瀬戸環奈","Kanna Seto"],["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["카와키타 사이카","河北彩伽","Saika Kawakita"],["사츠키 나오","彩月七緒","Nao Satsuki"],["이시카와 미오","石川澪","Mio Ishikawa"],["후쿠다 유아","福田ゆあ","Yua Fukuda"],["키타오카 카린","北岡果林","Karin Kitaoka"],["하타노 유이","波多野結衣","Yui Hatano"],["오노사카 유이카","小野坂ゆいか","Yuika Onosaka"],["모리사와 가나","森沢かな","Kana Morisawa"]] },
  { key: "2026-03", label: "2026년 3월", shortLabel: "3월", period: "2026.03", issue: "04", kind: "monthly", checkedAt: "2026.07.22", sourceUrl: "https://www.sina.cn/news/detail/5282992792800942.html", sourceLabel: "2026년 3월 공개 순위", rankings: [
    ["세토 칸나","瀬戸環奈","Kanna Seto"],["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["카와키타 사이카","河北彩伽","Saika Kawakita"],["후쿠다 유아","福田ゆあ","Yua Fukuda"],["사츠키 나오","彩月七緒","Nao Satsuki"],["키타오카 카린","北岡果林","Karin Kitaoka"],["하타노 유이","波多野結衣","Yui Hatano"],["모리사와 가나","森沢かな","Kana Morisawa"],["오노사카 유이카","小野坂ゆいか","Yuika Onosaka"],["이시카와 미오","石川澪","Mio Ishikawa"]] },
  { key: "2026-02", label: "2026년 2월", shortLabel: "2월", period: "2026.02", issue: "05", kind: "monthly", checkedAt: "2026.07.22", sourceUrl: "https://www.dmm.co.jp/mono/dvd/-/ranking/=/mode=actress/term=monthly/", sourceLabel: "FANZA 통판 월간 아카이브", rankings: [
    ["세토 칸나","瀬戸環奈","Kanna Seto"],["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["카와키타 사이카","河北彩伽","Saika Kawakita"],["이시카와 미오","石川澪","Mio Ishikawa"],["후쿠다 유아","福田ゆあ","Yua Fukuda"],["키타오카 카린","北岡果林","Karin Kitaoka"],["하타노 유이","波多野結衣","Yui Hatano"],["모리사와 가나","森沢かな","Kana Morisawa"],["시시도 리호","宍戸里帆","Riho Shishido"],["오노사카 유이카","小野坂ゆいか","Yuika Onosaka"]] },
  { key: "2026-01", label: "2026년 1월", shortLabel: "1월", period: "2026.01", issue: "06", kind: "monthly", checkedAt: "2026.01.05", sourceUrl: "https://jci.nagoya/260105-ranking_actress/", sourceLabel: "FANZA 통판 월간 스냅샷", rankings: [
    ["세토 칸나","瀬戸環奈","Kanna Seto"],["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["카와키타 사이카","河北彩伽","Saika Kawakita"],["이시카와 미오","石川澪","Mio Ishikawa"],["키타오카 카린","北岡果林","Karin Kitaoka"],["후쿠다 유아","福田ゆあ","Yua Fukuda"],["이노우에 모모","井上もも","Momo Inoue"],["시시도 리호","宍戸里帆","Riho Shishido"],["하타노 유이","波多野結衣","Yui Hatano"],["모리사와 가나","森沢かな","Kana Morisawa"]] },
  { key: "2025-year", label: "2025년 연간 종합", shortLabel: "25년 종합", period: "2025.YEAR", issue: "07", kind: "annual", checkedAt: "2026.07.22", sourceUrl: "https://fanza-guide.jp/features/fanza2025-ranking", sourceLabel: "2025년 연간 베스트", rankings: [
    ["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["유즈리하 카렌","楪カレン","Karen Yuzuriha"],["세토 칸나","瀬戸環奈","Kanna Seto"],["카와키타 사이카","河北彩伽","Saika Kawakita"],["키타오카 카린","北岡果林","Karin Kitaoka"],["모리사와 가나","森沢かな","Kana Morisawa"],["이츠카이치 메이","五日市芽依","Mei Itsukaichi"],["시라미네 미우","白峰ミウ","Miu Shiramine"],["아사노 코코로","浅野こころ","Kokoro Asano"],["이시카와 미오","石川澪","Mio Ishikawa"]] },
  { key: "2025-12", label: "2025년 12월", shortLabel: "25년 12월", period: "2025.12", issue: "08", kind: "monthly", checkedAt: "2025.12.13", sourceUrl: "https://jci.nagoya/251213-ranking_actress/", sourceLabel: "FANZA 통판 월간 스냅샷", rankings: [
    ["카와키타 사이카","河北彩伽","Saika Kawakita"],["세토 칸나","瀬戸環奈","Kanna Seto"],["아이자와 미유","逢沢みゆ","Miyu Aizawa"],["아라타 아리나","新ありな","Arina Arata"],["타노 유","田野憂","Yū Tano"],["후쿠다 유아","福田ゆあ","Yua Fukuda"],["이시카와 미오","石川澪","Mio Ishikawa"],["와시오 메이","鷲尾めい","Mei Washio"],["키노시타 리리코","木下凛々子","Ririko Kinoshita"],["사사키 아키","佐々木あき","Aki Sasaki"]] },
];
