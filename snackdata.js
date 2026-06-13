// ── 군것질 칼로리 데이터베이스 ──────────────────────────────
// 1회 제공량(1개/1봉지/1잔) 기준 대략적인 칼로리.
// AI(Claude)의 도움을 받아 구성한 데이터로, 일반적인 시판 제품 기준 근사치입니다.
// 키워드 매칭: 입력한 이름에 아래 키워드가 포함되면 해당 칼로리를 사용합니다.

const SNACK_DB = [
  // ── 초콜릿 / 사탕류 ──
  { keywords: ['초콜릿', '초콜렛', 'chocolate', '초코바', '가나초콜릿'], cal: 235, emoji: '🍫' },
  { keywords: ['초코파이', 'choco pie'], cal: 170, emoji: '🍫' },
  { keywords: ['킷캣', 'kitkat', '킷캣'], cal: 210, emoji: '🍫' },
  { keywords: ['스니커즈', 'snickers'], cal: 250, emoji: '🍫' },
  { keywords: ['엠앤엠', 'm&m', '엠엔엠'], cal: 240, emoji: '🍫' },
  { keywords: ['사탕', '캔디', 'candy'], cal: 25, emoji: '🍬' },
  { keywords: ['젤리', 'jelly', '하리보', 'gummy'], cal: 140, emoji: '🍬' },
  { keywords: ['막대사탕', '롤리팝', 'lollipop'], cal: 50, emoji: '🍭' },

  // ── 과자 / 스낵류 ──
  { keywords: ['감자칩', '포테토칩', '포카칩', '오감자', '수미칩', 'potato chip'], cal: 270, emoji: '🍟' },
  { keywords: ['감자', 'chip', '칩'], cal: 150, emoji: '🍟' },
  { keywords: ['프링글스', 'pringles'], cal: 290, emoji: '🍟' },
  { keywords: ['새우깡'], cal: 220, emoji: '🍤' },
  { keywords: ['꼬깔콘'], cal: 360, emoji: '🌽' },
  { keywords: ['포카칩', '오징어칩'], cal: 270, emoji: '🍟' },
  { keywords: ['나초', 'nacho', '도리토스', 'doritos'], cal: 250, emoji: '🌮' },
  { keywords: ['팝콘', 'popcorn'], cal: 150, emoji: '🍿' },
  { keywords: ['프레첼', 'pretzel'], cal: 110, emoji: '🥨' },
  { keywords: ['크래커', 'cracker', '참크래커'], cal: 130, emoji: '🍘' },
  { keywords: ['빼빼로', 'pepero'], cal: 250, emoji: '🥢' },
  { keywords: ['홈런볼'], cal: 230, emoji: '⚾' },
  { keywords: ['오레오', 'oreo'], cal: 160, emoji: '🍪' },
  { keywords: ['쿠키', 'cookie', '비스킷', 'biscuit'], cal: 150, emoji: '🍪' },
  { keywords: ['에이스', '버터링'], cal: 170, emoji: '🍪' },

  // ── 빵 / 베이커리 ──
  { keywords: ['도넛', '도너츠', 'donut', 'doughnut'], cal: 280, emoji: '🍩' },
  { keywords: ['케이크', '케익', 'cake', '조각케이크'], cal: 350, emoji: '🍰' },
  { keywords: ['치즈케이크', 'cheesecake'], cal: 400, emoji: '🍰' },
  { keywords: ['크로와상', '크루아상', 'croissant'], cal: 270, emoji: '🥐' },
  { keywords: ['머핀', 'muffin'], cal: 380, emoji: '🧁' },
  { keywords: ['컵케이크', 'cupcake'], cal: 300, emoji: '🧁' },
  { keywords: ['베이글', 'bagel'], cal: 250, emoji: '🥯' },
  { keywords: ['식빵', '토스트', 'toast'], cal: 130, emoji: '🍞' },
  { keywords: ['크림빵', '단팥빵', '소보로'], cal: 300, emoji: '🍞' },
  { keywords: ['카스테라', '카스텔라', 'castella'], cal: 180, emoji: '🍰' },
  { keywords: ['와플', 'waffle'], cal: 310, emoji: '🧇' },
  { keywords: ['빵', 'bread'], cal: 200, emoji: '🍞' },
  { keywords: ['붕어빵'], cal: 130, emoji: '🐟' },
  { keywords: ['호떡'], cal: 230, emoji: '🥮' },
  { keywords: ['타르트', 'tart', '에그타르트'], cal: 250, emoji: '🥧' },
  { keywords: ['마카롱', 'macaron'], cal: 90, emoji: '🍬' },

  // ── 아이스크림 / 디저트 ──
  { keywords: ['아이스크림', '아이스크림콘', 'ice cream', '월드콘', '메로나'], cal: 200, emoji: '🍦' },
  { keywords: ['하겐다즈', 'haagen'], cal: 290, emoji: '🍨' },
  { keywords: ['빙수', '팥빙수'], cal: 400, emoji: '🍧' },
  { keywords: ['젤라또', '젤라토', 'gelato'], cal: 220, emoji: '🍨' },
  { keywords: ['푸딩', 'pudding'], cal: 150, emoji: '🍮' },
  { keywords: ['요거트', '요구르트', 'yogurt'], cal: 120, emoji: '🥛' },

  // ── 음료 ──
  { keywords: ['콜라', 'cola', 'coke', '코카콜라'], cal: 140, emoji: '🥤' },
  { keywords: ['사이다', 'sprite', '스프라이트'], cal: 130, emoji: '🥤' },
  { keywords: ['환타', 'fanta'], cal: 160, emoji: '🥤' },
  { keywords: ['탄산음료', '탄산'], cal: 140, emoji: '🥤' },
  { keywords: ['에너지드링크', '레드불', '핫식스', 'redbull', 'energy'], cal: 160, emoji: '🥤' },
  // ※ 매칭은 위에서부터 진행되므로, 구체적인 종류를 일반 키워드보다 먼저 둡니다.
  { keywords: ['프라푸치노', 'frappuccino', '프라페'], cal: 380, emoji: '🥤' },
  { keywords: ['바닐라라떼', '카라멜마끼아또', '카라멜마키아토', '카라멜라떼'], cal: 250, emoji: '☕' },
  { keywords: ['믹스커피', '커피믹스'], cal: 55, emoji: '☕' },
  { keywords: ['카푸치노', 'cappuccino'], cal: 130, emoji: '☕' },
  { keywords: ['라떼', '카페라떼', 'latte', '카페라테'], cal: 190, emoji: '☕' },
  { keywords: ['아메리카노', '아아', 'americano'], cal: 10, emoji: '☕' },
  { keywords: ['커피', 'coffee'], cal: 10, emoji: '☕' },
  { keywords: ['버블티', '버블티', 'bubble tea', '밀크티', '버블', 'milk tea'], cal: 300, emoji: '🧋' },
  { keywords: ['주스', '쥬스', 'juice', '오렌지주스'], cal: 110, emoji: '🧃' },
  { keywords: ['스무디', 'smoothie'], cal: 200, emoji: '🥤' },
  { keywords: ['핫초코', '핫초콜릿', 'hot chocolate'], cal: 190, emoji: '☕' },
  { keywords: ['식혜'], cal: 130, emoji: '🍚' },

  // ── 분식 / 길거리 음식 ──
  { keywords: ['떡볶이', 'tteokbokki'], cal: 350, emoji: '🍢' },
  { keywords: ['순대'], cal: 300, emoji: '🍢' },
  { keywords: ['튀김', '오징어튀김', '야채튀김'], cal: 200, emoji: '🍤' },
  { keywords: ['어묵', '오뎅'], cal: 80, emoji: '🍢' },
  { keywords: ['김밥'], cal: 320, emoji: '🍙' },
  { keywords: ['핫도그', 'hotdog', '핫도그'], cal: 290, emoji: '🌭' },
  { keywords: ['타코야끼', '타코야키', 'takoyaki'], cal: 220, emoji: '🐙' },
  { keywords: ['만두', 'dumpling', '군만두'], cal: 230, emoji: '🥟' },
  { keywords: ['치킨', 'chicken', '후라이드', '양념치킨'], cal: 500, emoji: '🍗' },
  { keywords: ['피자', 'pizza'], cal: 280, emoji: '🍕' },
  { keywords: ['햄버거', '버거', 'burger', 'hamburger'], cal: 500, emoji: '🍔' },
  { keywords: ['감자튀김', '프렌치프라이', 'french fries', '프라이'], cal: 310, emoji: '🍟' },
  { keywords: ['라면', 'ramen', '컵라면'], cal: 500, emoji: '🍜' },

  // ── 과일 / 견과 ──
  { keywords: ['바나나', 'banana'], cal: 90, emoji: '🍌' },
  { keywords: ['사과', 'apple'], cal: 80, emoji: '🍎' },
  { keywords: ['귤', '오렌지', 'orange', '감귤'], cal: 50, emoji: '🍊' },
  { keywords: ['포도', 'grape'], cal: 60, emoji: '🍇' },
  { keywords: ['딸기', 'strawberry'], cal: 35, emoji: '🍓' },
  { keywords: ['견과', '아몬드', 'almond', '땅콩', 'peanut', '호두', '캐슈넛'], cal: 170, emoji: '🥜' },
  { keywords: ['건포도', '말린과일'], cal: 130, emoji: '🍇' },

  // ── 기타 ──
  { keywords: ['시리얼', 'cereal', '콘플레이크'], cal: 150, emoji: '🥣' },
  { keywords: ['그래놀라', 'granola', '에너지바', '프로틴바'], cal: 200, emoji: '🍫' },
  { keywords: ['젤리빈', 'jellybean'], cal: 100, emoji: '🍬' },
  { keywords: ['껌', 'gum'], cal: 5, emoji: '🍬' },
  { keywords: ['육포', 'jerky'], cal: 120, emoji: '🥩' },
  { keywords: ['치즈', 'cheese'], cal: 110, emoji: '🧀' },
  { keywords: ['요플레'], cal: 120, emoji: '🥛' },
];

// 입력한 이름과 DB를 매칭. 찾으면 { cal, emoji, matched } 반환, 없으면 null.
function lookupSnack(name) {
  const lower = name.toLowerCase().replace(/\s+/g, '');
  for (const item of SNACK_DB) {
    for (const kw of item.keywords) {
      if (lower.includes(kw.toLowerCase().replace(/\s+/g, ''))) {
        return { cal: item.cal, emoji: item.emoji, matched: kw };
      }
    }
  }
  return null;
}
