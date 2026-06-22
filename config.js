/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "노성길",
    nameEn: "Groom",
    father: "노재일",
    mother: "주현주",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이희선",
    nameEn: "Bride",
    father: "이중근",
    mother: "김명례",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-17",
    time: "12:00",
    venue: "MBC 컨벤션 진주",
    hall: "3관 CHAPEL HALL",
    address: "경상남도 진주시 동진로 415(충무공동) 진주종합경기장내",
    tel: "055-762-0200"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "2016년 가을날 시작된 인연이\n어느덧 10년의 시간을 지나\n부부로서 새로운 시작을 맞이하게 되었습니다.\n\n오래도록 함께해 주신 여러분을\n소중한 자리에 초대합니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께해 온 시간들이\n이제는 흔들림 없는 믿음과 사랑이 되었습니다.\n\n언제나 그랬듯이\n서로의 가장 친한 친구로서\n처음과 같은 마음으로 사랑하며 살겠습니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://map.kakao.com/?urlX=758838.0000000063&urlY=469955.9999999986&urlLevel=3&itemId=21354129&q=%EC%97%A0%EB%B9%84%EC%94%A8%EC%BB%A8%EB%B2%A4%EC%85%98%EC%A7%84%EC%A3%BC&srcid=21354129&map_type=TYPE_MAP",
    naver: "https://map.naver.com/p/entry/place/31575756?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605241640&locale=ko&svcName=map_pcv5"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "노성길", bank: "우리은행", number: "1002-065-052010" },
      { role: "아버지", name: "노재일", bank: "국민은행", number: "862801-01-212948" },
      { role: "어머니", name: "주현주", bank: "농협은행", number: "178123-52-069038" }
    ],
    bride: [
      { role: "신부", name: "이희선", bank: "하나은행", number: "194-910384-05107" },
      { role: "아버지", name: "이중근", bank: "농협은행", number: "845049-52-101913" },
      { role: "어머니", name: "김명례", bank: "농협은행", number: "845049-52-047711" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "노성길 ♥ 이희선 결혼합니다",
    description: "2026년 10월 17일, 소중한 분들을 초대합니다."
  }
};
