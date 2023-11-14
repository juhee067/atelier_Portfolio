import { AiOutlineFolderOpen, AiOutlineMessage } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";

export const projectData = [
  {
    id: 0,
    icon: FaReact,
    color: "#61DBFB",
    projectNum: "01",
    text: "독서 버킷리스트",
    period: "2023. 02 - 2023. 07",
    stack: "React | JavaScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project01.png`,
    des: [
      "사용자는 독서 경험을 보다 의미 있게 기록하고 공유할 수 있어 독서에 대한 새로운 동기부여 생성되도록 합니다.",
      "독서 버킷리스트는 도서 검색, 버킷리스트 관리 및 독후감 작성을 통한 개인화된 독서 경험을 제공하는 웹 애플리케이션입니다.",
      "버킷리스트에서 완료한 도서에 대한 독후감을 작성할 수 있도록 설계되었습니다.",
    ],
    background: [
      "1년동안의 버킷리스트를 만드는 프로젝트에 참여한 적이 있습니다.",
      "버킷리스트를 제작하면서 내가 좋아하는 도서 버킷리스트로 만들면 어떨까? 하는 생각에서 프로젝트를 기획하게 되었습니다.",
      "사용자는 책을 읽을 때마다 느낀 감정과 생각을 기록할 수 있고, 자신의 독서 목표를 설정하고,",
      "완료한 책을 한 눈에 보고 성취감을 느끼게 하고자 이 프로젝트를 기획했습니다.",
    ],
    isModal: false,
    video: "/image/video/book.gif",
    projectSrc: "https://juhee067.github.io/bookbucketWeb/",
    githubSrc: "https://github.com/juhee067/bookbucketWeb",
    featureList: [
      " 교보문고 API를 활용하여 사용자들이 원하는 도서를 검색할 수 있는 기능을 제공",
      "도서 버킷리스트 관리 기능(추가,삭제,완료)",
      "완료된 도서는 독후감 작성 기능 제공",
      "localStorage 데이터 관리",
      "반응형 웹사이트",
    ],
    effectList: [
      "사용자는 독서 경험을 보다 의미 있게 기록하고 공유할 수 있어 독서에 대한 새로운 동기부여 생성되도록 합니다.",
      "버킷리스트를 통해 독서 목표를 명확하게 설정하고, 완료한 목표를 체크함으로써 성취감 얻도록합니다.",
    ],
    update: [
      "사용자가 기록한 독서 데이터를 기반으로 선호하는 장르나 저자를 파악하여 다음에 읽을 도서를 추천하는 기능을 추가",
    ],
    useStack: [
      {
        category: "View",
        badges: [
          { label: "React", logo: "react", color: "61DAFB" },
          { label: "React Router", logo: "reactrouter", color: "CA4245" },
          { label: "Axios", logo: "axios", color: "5A29E4" },
        ],
      },
      {
        category: "State Management",
        badges: [{ label: "Redux", logo: "redux", color: "764ABC" }],
      },
      {
        category: "CSS",
        badges: [{ label: "Sass", logo: "sass", color: "CC6699" }],
      },
      {
        category: "Code Quality",
        badges: [
          { label: "Prettier", logo: "prettier", color: "2C414F" },
          { label: "ESLint", logo: "eslint", color: "4B32C3" },
        ],
      },
      {
        category: "Design Tool",
        badges: [
          { label: "Figma", logo: "figma", color: "F24E1E" },
          { label: "Adobe Illustrator", logo: "adobeillustrator", color: "FF9A00" },
        ],
      },
    ],
  },
  {
    id: 1,
    icon: FaReact,
    color: "#61DBFB",
    projectNum: "02",
    text: "메신저 대화 분석 시각화 웹",
    period: "2023. 04 - 2023. 08",
    stack: "React | TypeScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project02.png`,
    des: [
      "메신저 대화 분석 시각화 웹은 사용자들에게 카카오톡 대화 데이터를 더 잘 이해하고,",
      "관리할 수 있는 도구를 제공하며, 그래프 및 차트를 통해 데이터의 시각화를 지원합니다.",
      "사용자는 개인적인 데이터를 분석하고 공유하며, 대화 기록을 효과적으로 관리할 수 있게 됩니다.",
    ],
    background: [
      "주식 정보시각화를 만들어본 경험으로, 새로운 아이디어를 찾던 중 ",
      "평소에 사용하는 메신저의 대화 데이터를 더 효과적으로 활용할 수 있는 방법에 대한 고민을 하게되었습니다.",
      "일상적인 대화에서는 자주 놓치기 쉬운 패턴으로, 이를 시각적으로 표현하면 어떨까? 하는 아이디어가 떠올랐습니다.",
      "이 아이디어에서 출발하여 '메신저 대화 분석 시각화 웹'을 기획하게 되었습니다.",
    ],
    isModal: false,
    video: "/image/video/kakao.gif",
    projectSrc: "http://kmg-env-1.eba-332qe2dv.ap-northeast-2.elasticbeanstalk.com/",
    githubSrc: "https://github.com/KakaoMagnifyingGlass/KMG",
    featureList: [
      " 카카오톡 대화 텍스트 파일을 데이터화하여 그래프와 차트로 시각화",
      "회원가입, 로그인&로그아웃 RESTful API",
      "게시판 CRUD",
      "반응형 웹사이트",
      "Rechart 라이브러리를 활용하여 데이터 시각화",
    ],
    effectList: [
      "메신저 데이터를 시각적으로 분석하여 사용자에게 채팅 패턴, 대화량, 키워드 등을 제공하여 사용자들의 개인 소통 습관을 알 수 있습니다.",
      "개개인의 카톡 이용량을 파악하여 습관을 깨닫고, 필요에 따라 조절할 수 있습니다.",
    ],
    update: ["없음"],
    useStack: [
      {
        category: "View",
        badges: [
          { label: "React", color: "282C34", logo: "react" },
          { label: "TypeScript", color: "3178C6", logo: "typescript" },
          { label: "React Router", color: "CA4245", logo: "reactrouter" },
        ],
      },
      {
        category: "State Management",
        badges: [{ label: "Redux", color: "764ABC", logo: "redux" }],
      },
      {
        category: "CSS",
        badges: [
          {
            label: "Styled Components",
            color: "DB7093",
            logo: "styledcomponents",
          },
        ],
      },
      {
        category: "Code Quality",
        badges: [
          { label: "Prettier", color: "2C414F", logo: "prettier" },
          { label: "ESLint", color: "4B32C3", logo: "eslint" },
        ],
      },
      {
        category: "Design Tool",
        badges: [{ label: "Figma", color: "F24E1E", logo: "figma" }],
      },
    ],
  },
  {
    id: 2,
    icon: FaReact,
    color: "#61DBFB",
    projectNum: "03",
    text: "메시지 전달형 자살예방웹사이트",
    period: "2023. 07 - 2023. 10",
    stack: "React | TypeScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project03.png`,
    des: [
      "메시지 전달형 자살예방 웹사이트는 중요한 사회 문제를 다루는 동시에 사용자 경험을 개선하고 안전하게 소통할 수 있는 기능을 강조합니다.",
      "사용자들에게 우울증 및 자살 예방에 대한 정보와 지원을 제공하며, 커뮤니티와 응원 메시지 게시판을 통해 서로에게 지원과 희망을 주는 플랫폼을 제공합니다.",
    ],
    background: [
      "평소, 정신적으로 고통 받고 있는 친구들이 주변에 많았습니다. 이 친구들에게 가장 좋은 치료약은 무엇일까?",
      "생각해보다가 그들에게 가장 필요한 것은 도움이라 생각이 들어 그 친구들에게 맞는 위로의 메세지 전달해주자는 마음에 기획하게 되었습니다.",
      "졸업전시회에서 사용한 프로젝트를 리뉴얼하여 그들에게 필요한 지원을 다시 전하고자 합니다.",
    ],
    isModal: false,
    video: "/image/video/helpgatekeeper.gif",
    projectSrc: "https://helpgatekeeper.web.app/",
    githubSrc: "https://github.com/juhee067/suicide-prevent",
    featureList: [
      "Cloud Firestore를 사용해 비회원 응원메시지 게시판 구축",
      "Cloud Firestore를 사용해 회원 커뮤니티 게시판 구축",
      "자가 진단 테스트를 통해 우울증 정도를 점수로 환산",
      "Kakao Maps API를 통해 상담센터 위치 표시",
      "Map Maker를 통해 클릭 시 상담센터 웹 사이트 이동",
      "PC에서 번호 복사, 모바일에선 상담센터 연락처 클릭시 자동 전화 연결",
    ],
    effectList: [
      "어려운 상황에서 도움이 필요한 이들에게 센터의 위치와 연락처를 제공하여 실질적인 도움을 줍니다.",
      "우울증 테스트로 정신 상태를 평가해 자가 확인을 돕도록 합니다.",
      "응원 메시지와 게시판을 통해 긍정적인 에너지를 공유하고 정보를 교류하여 서로에게 힘을 주고자합니다.",
    ],
    update: ["게시물 이미지 업로드", "최적화"],
    useStack: [
      {
        category: "View",
        badges: [
          { label: "React", color: "282C34", logo: "react" },
          { label: "TypeScript", color: "3178C6", logo: "typescript" },
          { label: "React Router", color: "CA4245", logo: "reactrouter" },
        ],
      },
      {
        category: "State Management",
        badges: [{ label: "Redux", color: "764ABC", logo: "redux" }],
      },
      {
        category: "Database",
        badges: [{ label: "Firebase", color: "FFCA28", logo: "Firebase" }],
      },
      {
        category: "CSS",
        badges: [
          {
            label: "Styled Components",
            color: "DB7093",
            logo: "styledcomponents",
          },
        ],
      },
      {
        category: "Code Quality",
        badges: [
          { label: "Prettier", color: "2C414F", logo: "prettier" },
          { label: "ESLint", color: "4B32C3", logo: "eslint" },
        ],
      },
      {
        category: "Design Tool",
        badges: [
          { label: "Figma", color: "F24E1E", logo: "figma" },
          {
            label: "Adobe Illustrator",
            color: "FF9A00",
            logo: "adobeillustrator",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: FaReact,
    color: "#61DBFB",
    projectNum: "04",
    text: "와인 공유 커뮤니티",
    period: "2023. 03 - 2023. 04",
    stack: "React | Javascript ",
    src: `s`,
    des: ["/"],
    background: ["/"],
    isModal: false,
    video: "/image/video/book.mov",
    projectSrc: "/",
    githubSrc: "https://github.com/Maswillaeng/MSL-frontend-myo",
    featureList: ["/"],
    effectList: ["/"],
    update: ["없음"],
    useStack: [
      {
        category: "View",
        badges: [],
      },
      {
        category: "State Management",
        badges: [],
      },
      {
        category: "CSS",
        badges: [],
      },
      {
        category: "Code Quality",
        badges: [],
      },
      {
        category: "Design Tool",
        badges: [],
      },
    ],
  },
];

export const menuData = [
  { icon: BiHomeAlt, color: "#757575", menu: "home" },
  { icon: RiAccountCircleLine, color: "#757575", menu: "about" },
  { icon: AiOutlineFolderOpen, color: "#757575", menu: "project" },
  { icon: AiOutlineMessage, color: "#757575", menu: "contact" },
  { icon: FiAlertTriangle, color: "#757575", menu: "id" },
];
