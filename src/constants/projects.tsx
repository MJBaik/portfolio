import {
  cloudyImages,
  collectImages,
  logintoyouImages,
  talkydokiImages,
} from "./projectImages";
import {
  cloudyThumbs,
  collectThumbs,
  logintoyouThumbs,
  talkydokiThumbs,
} from "./projectThumbnails";
import Notion from "../assets/images/notion.png";
import Git from "../assets/images/git.png";

export interface IProject {
  title: string;
  period: string;
  desc: string;
  pjt: React.ReactElement;
  mywork: React.ReactElement;
  skills: string[];
  detail: React.ReactElement;
  thumbnails: string[];
  images: string[];
  etc: string;
  link: string[][];
}

export const project_kr: { [name: string]: IProject } = {
  cloudy: {
    title: "Cloudy",
    desc: "AWS 서비스를 활용한 AWS Digital Learning Platform 개발 (6인)",
    pjt: (
      <ul>
        <li>검색어 교정 및 자동완성</li>
        <li>강의 및 로드맵 추천</li>
        <li>유저 및 커뮤니티</li>
      </ul>
    ),
    period: "24.04.08 ~ 05.17 (6주)",
    mywork: (
      <>
        (FE) UI/UX 설계, 메인 페이지, 이벤트 스트림을 통한 실시간 챗봇 구현,
        커뮤니티 전체 목록(필터링 및 무한스크롤), 커뮤니티 디테일 및 CRUD <br />{" "}
        (BE) 커뮤니티 API (게시글 및 덧글 CRUD, 이미지 업로드)
      </>
    ),
    skills: [
      "Next.js 14",
      "Typescript",
      "SASS",
      "Zustand",
      "Jest",
      "StoryBook",
      "React-Hook-Form",
      "Prisma",
      "Zod",
      "Supabase",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        AWS 기업 연계 프로젝트로 시행된 AWS 학습 추천 플랫폼 개발
        프로젝트입니다. SEO 향상을 위해 <span>GA</span>와 <span>Next 14</span>를
        도입하였으며, <span>Jest</span>와 <span>Storybook</span>,{" "}
        <span>Git</span>, <span>Jira</span>를 활용하여 테스트 및 협업 지향적으로
        프로젝트를 진행하였습니다. 또한, <span>Supabase</span>와{" "}
        <span>Prisma</span>를 통하여 커뮤니티의 API를 구현하고{" "}
        <span>Amplify</span>를 통해 프론트의 배포를 진행하였습니다. 처음
        사용해보는 기술이 많고, 또 기본에 충실하고자 했기 때문에 프로젝트를
        진행하는 동안 많은 것을 배울 수 있었습니다.
      </p>
    ),
    thumbnails: cloudyThumbs,
    images: cloudyImages,
    etc: "SSAFY 기업연계 프로젝트 최우수상 수상",
    link: [
      [
        "notion",
        "https://www.notion.so/S207-51157c9cb2b34f04a4f61695eb118c68",
        Notion,
      ],
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2405_Cloudy",
        Git,
      ],
    ],
  },
  talkydoki: {
    title: "TalkyDoki",
    desc: "빅데이터 및 AI를 활용한 일본어 회화 학습 서비스 (6인)",
    pjt: (
      <ul>
        <li>사용자 관심 키워드에 맞는 일본 뉴스 기사 추천</li>
        <li>일어 뉴스 기사 문장별 쉐도잉 및 쉐도잉 결과 평가</li>
        <li>챗봇을 활용한 상황별 일어 회화 연습</li>
        <li>회원 및 나의 학습 정보 확인</li>
      </ul>
    ),
    period: "24.02.26 ~ 04.05 (6주)",
    mywork: (
      <>
        (FE) UI/UX 디자인, 메인 페이지, 뉴스 전체 리스트(필터림 및 무한스크롤),
        뉴스 디테일(STT, TTS, 단어사전), 뉴스 쉐도잉, 마이페이지, 유저 단어장,
        회원정보 수정 및 탈퇴, 데이터 유효성 검사, 일본어 관련 후처리
      </>
    ),
    skills: [
      "React",
      "Typescript",
      "React Query",
      "Zustand",
      " Styled Components",
      "MUI",
      "Apex Charts",
      " AWS Polly",
      " React Speech Recognition",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        일본어 읽기와 말하기를 직접 연습해볼 수 있는 학습 플랫폼입니다. React로
        제작되었으며, <span>React Query</span>와 <span>Zustand</span>를 활용하여
        API 및 사이트 내부 상태 관리의 효율성을 증진시켰습니다. 또,{" "}
        <span>MUI</span>와 <span>Styled Component</span>,{" "}
        <span>Apex Charts</span>를 활용하여 UI의 통일성을 향상시키고 다크모드를
        구현하였습니다. TTS 구현을 위해 <span>AWS Polly</span>를, STT 구현을
        위해 <span>React Speech Recognition</span>을 활용하였는데, 각각을 통해
        AWS와 GCP에 대한 이해도를 높일 수 있었습니다. 그 외에도 렌더링 개선이나
        <span>RegExp</span>를 이용한 유효성 검사에 집중하며 페이지의 안정성을
        증진시킬 수 있도록 하였습니다.
      </p>
    ),
    images: talkydokiImages,
    thumbnails: talkydokiThumbs,
    etc: "SSAFY 빅데이터 도메인 프로젝트 우수상 수상",
    link: [
      [
        "notion",
        "https://translucent-polish-c76.notion.site/Talkydoki-07e378a00ab54e089874ca28178d3f8d",
        Notion,
      ],
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2403_TalkyDoki",
        Git,
      ],
    ],
  },
  logintoyou: {
    title: "너에게 로그인",
    desc: "WebRTC 기술을 활용한 커플 다이어리 서비스 (6인)",
    pjt: (
      <ul>
        <li>회원 및 카카오톡 API를 활용한 커플 등록</li>
        <li>커플 사진 (원거리 사진 촬영 후 합성 / 같은 공간에서 함께 찍기)</li>
        <li>커플 다이어리 (날짜별 조회 / 일기 작성 / 사진 모아보기)</li>
        <li>채팅 (읽음 표시 및 역 무한스크롤 구현)</li>
        <li>커플 캘린더, 밸런스 게임, 커플 질문, 출석 체크 및 도전 과제 등</li>
      </ul>
    ),
    period: "24.01.08 ~ 02.16 (6주)",
    mywork: (
      <>
        (FE, 팀장) UI/UX 디자인, JWT (토큰 연동 및 리프레쉬 토큰 발급), 다이어리
        조회 및 일기 작성, 채팅 (역무한스크롤, 읽음표시, 안읽은 개수 표시),
        환경설정, 유저설정, 테마 기능
      </>
    ),
    skills: [
      "React",
      "Typescript",
      "PWA",
      "Zustand",
      " Styled Components",
      "STOMP",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        원거리에서 사진 촬영이 가능한 커플 어플리케이션입니다.{" "}
        <span>React</span>로 진행한 첫 번째 프로젝트이며, 상태 관리에는
        <span>Zustand</span>를 사용했습니다. 커플 소통 어플리케이션인만큼{" "}
        <span>Stomp</span>를 활용한 실시간 채팅 기능과 읽음 표시 기능을 제공하고
        있으며, 그 외에도 여태까지 찍은 사진을 볼 수 있는 갤러리나 일기를 쓸 수
        있는 다이어리, 커플 일정 캘린더 등 함께 즐길 수 있는 기능을 6주간 10개
        이상 구현하였습니다. UI면에서는 <span>Styled Components</span>를
        이용하였으며, 사용자의 편의를 위하여 테마 기능을 추가하였습니다.
        처음으로 백엔드 개발자와 팀을 꾸려 진행한 프로젝트인 만큼 백엔드와의
        소통을 중시하였으며, <span>JWT토큰</span>을 활용한 보안이나 리프레쉬
        토큰 발급, 로그인 유지 등의 기능을 구현하는 방법을 알게 되었습니다.
        배포는 PWA를 통하여 진행되었습니다.
      </p>
    ),
    images: logintoyouImages,
    thumbnails: logintoyouThumbs,
    etc: "",
    link: [
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2401_LogInToYou",
        Git,
      ],
    ],
  },
  collect: {
    title: "Collec.T",
    desc: "TMDB API를 활용한 영화 추천 웹 페이지 (2인)",
    pjt: (
      <ul>
        <li>랜덤 및 장르별 영화 추천과 영화 디테일 조회</li>
        <li>영화 리뷰 CRUD, 팔로우 중인 유저가 작성한 리뷰 조회</li>
        <li>영화 커뮤니티 CRUD, 추천</li>
        <li>유저 기능 및 유저 팔로우, 유저 프로필 조회</li>
      </ul>
    ),
    period: "23.11.16 - 11.23 (2주)",
    mywork: (
      <>
        (FE, BE, 팀장) 데이터 크롤링, 회원가입 및 로그인 API를 제외한 전체 FE/BE
        개발
      </>
    ),
    skills: [
      "Vue3",
      "Django",
      "SQLite",
      "Pinia",
      "Bootstrap",
      "django-rest-api",
      "restauth",
      "corsheaders",
    ],
    detail: (
      <p className="desc">
        영화 리뷰 작성 및 유저 작성 리뷰의 장르를 토대로 영화를 추천해주는
        커뮤니티 서비스입니다. <span>Django</span>와 <span>Vue3</span>를
        이용하여 제작되었으며, 저의 첫 프로젝트인 만큼 의미가 깊은 작업물입니다.
        <span>Pinia</span>를 이용하여 상태를 관리하였으며,{" "}
        <span>django rest api</span>와 <span>restauth</span>등을 활용하여 회원
        기능을 구현하였습니다. <span>Bootstrap</span>을 활용하며 반응형으로 UI를
        구성하였으며, 동적이고 Interactive한 페이지를 구현하기 위해
        노력했습니다. Youtube API를 활용하여 영화의 트레일러를 제공하고 있으며,
        직접 API를 제작하기도 하며 API에 대한 이해도를 높일 수 있는
        프로젝트였습니다.
      </p>
    ),
    images: collectImages,
    thumbnails: collectThumbs,
    etc: "SSAFY 학기말 프로젝트 최우수상 수상",
    link: [
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2312_collec.T",
        Git,
      ],
    ],
  },
};

export const project_en: { [name: string]: IProject } = {
  cloudy: {
    title: "Cloudy",
    desc: "AWS 서비스를 활용한 AWS Digital Learning Platform 개발 (6인)",
    pjt: (
      <ul>
        <li>검색어 교정 및 자동완성</li>
        <li>강의 및 로드맵 추천</li>
        <li>유저 및 커뮤니티</li>
      </ul>
    ),
    period: "24.04.08 ~ 05.17 (6주)",
    mywork: (
      <>
        (FE) UI/UX 설계, 메인 페이지, 이벤트 스트림을 통한 실시간 챗봇 구현,
        커뮤니티 전체 목록(필터링 및 무한스크롤), 커뮤니티 디테일 및 CRUD <br />{" "}
        (BE) 커뮤니티 API (게시글 및 덧글 CRUD, 이미지 업로드)
      </>
    ),
    skills: [
      "Next.js 14",
      "Typescript",
      "SASS",
      "Zustand",
      "Jest",
      "StoryBook",
      "React-Hook-Form",
      "Prisma",
      "Zod",
      "Supabase",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        AWS 기업 연계 프로젝트로 시행된 AWS 학습 추천 플랫폼 개발
        프로젝트입니다. SEO 향상을 위해 <span>GA</span>와 <span>Next 14</span>를
        도입하였으며, <span>Jest</span>와 <span>Storybook</span>,{" "}
        <span>Git</span>, <span>Jira</span>를 활용하여 테스트 및 협업 지향적으로
        프로젝트를 진행하였습니다. 또한, <span>Supabase</span>와{" "}
        <span>Prisma</span>를 통하여 커뮤니티의 API를 구현하고{" "}
        <span>Amplify</span>를 통해 프론트의 배포를 진행하였습니다. 처음
        사용해보는 기술이 많고, 또 기본에 충실하고자 했기 때문에 프로젝트를
        진행하는 동안 많은 것을 배울 수 있었습니다.
      </p>
    ),
    thumbnails: cloudyThumbs,
    images: cloudyImages,
    etc: "SSAFY 기업연계 프로젝트 최우수상 수상",
    link: [
      [
        "notion",
        "https://www.notion.so/S207-51157c9cb2b34f04a4f61695eb118c68",
        Notion,
      ],
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2405_Cloudy",
        Git,
      ],
    ],
  },
  talkydoki: {
    title: "TalkyDoki",
    desc: "빅데이터 및 AI를 활용한 일본어 회화 학습 서비스 (6인)",
    pjt: (
      <ul>
        <li>사용자 관심 키워드에 맞는 일본 뉴스 기사 추천</li>
        <li>일어 뉴스 기사 문장별 쉐도잉 및 쉐도잉 결과 평가</li>
        <li>챗봇을 활용한 상황별 일어 회화 연습</li>
        <li>회원 및 나의 학습 정보 확인</li>
      </ul>
    ),
    period: "24.02.26 ~ 04.05 (6주)",
    mywork: (
      <>
        (FE) UI/UX 디자인, 메인 페이지, 뉴스 전체 리스트(필터림 및 무한스크롤),
        뉴스 디테일(STT, TTS, 단어사전), 뉴스 쉐도잉, 마이페이지, 유저 단어장,
        회원정보 수정 및 탈퇴, 데이터 유효성 검사, 일본어 관련 후처리
      </>
    ),
    skills: [
      "React",
      "Typescript",
      "React Query",
      "Zustand",
      " Styled Components",
      "MUI",
      "Apex Charts",
      " AWS Polly",
      " React Speech Recognition",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        일본어 읽기와 말하기를 직접 연습해볼 수 있는 학습 플랫폼입니다. React로
        제작되었으며, <span>React Query</span>와 <span>Zustand</span>를 활용하여
        API 및 사이트 내부 상태 관리의 효율성을 증진시켰습니다. 또,{" "}
        <span>MUI</span>와 <span>Styled Component</span>,{" "}
        <span>Apex Charts</span>를 활용하여 UI의 통일성을 향상시키고 다크모드를
        구현하였습니다. TTS 구현을 위해 <span>AWS Polly</span>를, STT 구현을
        위해 <span>React Speech Recognition</span>을 활용하였는데, 각각을 통해
        AWS와 GCP에 대한 이해도를 높일 수 있었습니다. 그 외에도 렌더링 개선이나
        <span>RegExp</span>를 이용한 유효성 검사에 집중하며 페이지의 안정성을
        증진시킬 수 있도록 하였습니다.
      </p>
    ),
    images: talkydokiImages,
    thumbnails: talkydokiThumbs,
    etc: "SSAFY 빅데이터 도메인 프로젝트 우수상 수상",
    link: [
      [
        "notion",
        "https://translucent-polish-c76.notion.site/Talkydoki-07e378a00ab54e089874ca28178d3f8d",
        Notion,
      ],
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2403_TalkyDoki",
        Git,
      ],
    ],
  },
  logintoyou: {
    title: "Log In To You",
    desc: "WebRTC 기술을 활용한 커플 다이어리 서비스 (6인)",
    pjt: (
      <ul>
        <li>회원 및 카카오톡 API를 활용한 커플 등록</li>
        <li>커플 사진 (원거리 사진 촬영 후 합성 / 같은 공간에서 함께 찍기)</li>
        <li>커플 다이어리 (날짜별 조회 / 일기 작성 / 사진 모아보기)</li>
        <li>채팅 (읽음 표시 및 역 무한스크롤 구현)</li>
        <li>커플 캘린더, 밸런스 게임, 커플 질문, 출석 체크 및 도전 과제 등</li>
      </ul>
    ),
    period: "24.01.08 ~ 02.16 (6주)",
    mywork: (
      <>
        (FE, 팀장) UI/UX 디자인, JWT (토큰 연동 및 리프레쉬 토큰 발급), 다이어리
        조회 및 일기 작성, 채팅 (역무한스크롤, 읽음표시, 안읽은 개수 표시),
        환경설정, 유저설정, 테마 기능
      </>
    ),
    skills: [
      "React",
      "Typescript",
      "PWA",
      "Zustand",
      " Styled Components",
      "STOMP",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        원거리에서 사진 촬영이 가능한 커플 어플리케이션입니다.{" "}
        <span>React</span>로 진행한 첫 번째 프로젝트이며, 상태 관리에는
        <span>Zustand</span>를 사용했습니다. 커플 소통 어플리케이션인만큼{" "}
        <span>Stomp</span>를 활용한 실시간 채팅 기능과 읽음 표시 기능을 제공하고
        있으며, 그 외에도 여태까지 찍은 사진을 볼 수 있는 갤러리나 일기를 쓸 수
        있는 다이어리, 커플 일정 캘린더 등 함께 즐길 수 있는 기능을 6주간 10개
        이상 구현하였습니다. UI면에서는 <span>Styled Components</span>를
        이용하였으며, 사용자의 편의를 위하여 테마 기능을 추가하였습니다.
        처음으로 백엔드 개발자와 팀을 꾸려 진행한 프로젝트인 만큼 백엔드와의
        소통을 중시하였으며, <span>JWT토큰</span>을 활용한 보안이나 리프레쉬
        토큰 발급, 로그인 유지 등의 기능을 구현하는 방법을 알게 되었습니다.
        배포는 PWA를 통하여 진행되었습니다.
      </p>
    ),
    images: logintoyouImages,
    thumbnails: logintoyouThumbs,
    etc: "",
    link: [
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2401_LogInToYou",
        Git,
      ],
    ],
  },
  collect: {
    title: "Collec.T",
    desc: "TMDB API를 활용한 영화 추천 웹 페이지 (2인)",
    pjt: (
      <ul>
        <li>랜덤 및 장르별 영화 추천과 영화 디테일 조회</li>
        <li>영화 리뷰 CRUD, 팔로우 중인 유저가 작성한 리뷰 조회</li>
        <li>영화 커뮤니티 CRUD, 추천</li>
        <li>유저 기능 및 유저 팔로우, 유저 프로필 조회</li>
      </ul>
    ),
    period: "23.11.16 - 11.23 (6주)",
    mywork: (
      <>
        (FE, BE, 팀장) 데이터 크롤링, 회원가입 및 로그인 API를 제외한 전체 FE/BE
        개발
      </>
    ),
    skills: [
      "Vue3",
      "Django",
      "SQLite",
      "Pinia",
      "Bootstrap",
      "django-rest-api",
      "restauth",
      "corsheaders",
    ],
    detail: (
      <p className="desc">
        영화 리뷰 작성 및 유저 작성 리뷰의 장르를 토대로 영화를 추천해주는
        커뮤니티 서비스입니다. <span>Django</span>와 <span>Vue3</span>를
        이용하여 제작되었으며, 저의 첫 프로젝트인 만큼 의미가 깊은 작업물입니다.
        <span>Pinia</span>를 이용하여 상태를 관리하였으며,{" "}
        <span>django rest api</span>와 <span>restauth</span>등을 활용하여 회원
        기능을 구현하였습니다. <span>Bootstrap</span>을 활용하며 반응형으로 UI를
        구성하였으며, 동적이고 Interactive한 페이지를 구현하기 위해
        노력했습니다. Youtube API를 활용하여 영화의 트레일러를 제공하고 있으며,
        직접 API를 제작하기도 하며 API에 대한 이해도를 높일 수 있는
        프로젝트였습니다.
      </p>
    ),
    images: collectImages,
    thumbnails: collectThumbs,
    etc: "SSAFY 학기말 프로젝트 최우수상 수상",
    link: [
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2312_collec.T",
        Git,
      ],
    ],
  },
};

export const project_jp: { [name: string]: IProject } = {
  cloudy: {
    title: "Cloudy",
    desc: "AWSサービスを活用したAWS Digital Learning Platformの開発 (6人)",
    pjt: (
      <ul>
        <li>検索キーワードの予測と誤字脱字の自動変換</li>
        <li>おすすめ講義・ロードマップ</li>
        <li>ユーザ・コミュニティー</li>
      </ul>
    ),
    period: "24.04.08 ~ 05.17 (６週）",
    mywork: (
      <>
        【FE】
        <br />
        UI/UXの設計、ホームページ、イベントストリームを用いたリアルタイムチャットボットの具現、コミュニティーリスト照会（フィルター機能と無限スクロール）、コミュニティーの詳細紹介・リプ
        <br />
        【BE】
        <br />
        コミュニティーAPI（ポスト・リプCRUD、イメージ処理）
      </>
    ),
    skills: [
      "Next.js 14",
      "Typescript",
      "SASS",
      "Zustand",
      "Jest",
      "StoryBook",
      "React-Hook-Form",
      "Prisma",
      "Zod",
      "Supabase",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        AWS
        Koreaの企業連携プロジェクトとして作られたAWS学習のロードマップ・フラットフォームの開発プロジェクトです。SEOをあげるため
        <span>GA</span>と<span>Next 14</span>を導入しております。なお、
        <span>Jest</span>と<span>StoryBook</span>、<span>Git</span>、
        <span>Jira</span>
        を活用し、よりテストしやすく、協業に向いた環境でプロジェクトを進行いたしました。また、
        <span>Supabase</span>と<span>Prisma</span>
        を使いコミュニティーのAPIを作り、<span>Amplify</span>を用いてFront-Endの
        デプロイを行いました。初めて使うスタックが多く、基本に充実するよう心掛けていたため、学べることが多く、やりがいのあるプロジェクトでした。
      </p>
    ),
    thumbnails: cloudyThumbs,
    images: cloudyImages,
    etc: "SSAFY企業連携プロジェクト最優秀賞受賞",
    link: [
      [
        "notion",
        "https://www.notion.so/S207-51157c9cb2b34f04a4f61695eb118c68",
        Notion,
      ],
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2405_Cloudy",
        Git,
      ],
    ],
  },
  talkydoki: {
    title: "TalkyDoki",
    desc: "ビックデータ及びAIを活用した日本語会話学習サービス（６人）",
    pjt: (
      <ul>
        <li>ユーザーの興味にあう日本語ニュースの提案</li>
        <li>日本語ニュースのシャドーイング技能とその結果の評価</li>
        <li>チャットボットを活用した状況別日本語会話の練習</li>
        <li>ユーザーの学習現況の確認</li>
      </ul>
    ),
    period: "24.02.26 ~ 04.05 (６週)",
    mywork: (
      <>
        【FE】
        <br />
        UI/UXのデザイン、ホームページ、ニュースリスト照会（フィルター・無限スクロール）、ニュース詳細（STT,
        TTS,
        単語辞書）、ニュースのシャドーイング、マイページ、ユーザ単語帳、会員情報の変更・退会・データ有効性検査、日本語データの処理
      </>
    ),
    skills: [
      "React",
      "Typescript",
      "React Query",
      "Zustand",
      " Styled Components",
      "MUI",
      "Apex Charts",
      " AWS Polly",
      " React Speech Recognition",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        日本語の読みと会話を直接練習できる学習フラットフォームです。Reactで作られており、
        <span>React Query</span>と<span>Zustand</span>
        を活用し、API及びサイト内でのステート管理の効率を上げました。また、
        <span>MUI</span>と<span>Styled Component</span>、
        <span>Apex Charts</span>
        を活用することでUIの統一性を上げ、ダークモードを具現しました。TTSのために
        <span>AWS Polly</span>を、STTのためには
        <span>React Speech Recognition</span>
        を用いておりますが、それぞれを活用しながらAWSとGCPに対する理解を深めることができました。他にもレンダリングの改善や
        <span>RegExp</span>
        を用いた有効性の検査に集中し、ページの安定性を高めるために尽力いたしました。
      </p>
    ),
    images: talkydokiImages,
    thumbnails: talkydokiThumbs,
    etc: "SSAFYビックデータドメイン・プロジェクト優秀賞受賞",
    link: [
      [
        "notion",
        "https://translucent-polish-c76.notion.site/Talkydoki-07e378a00ab54e089874ca28178d3f8d",
        Notion,
      ],
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2403_TalkyDoki",
        Git,
      ],
    ],
  },
  logintoyou: {
    title: "Log In To You",
    desc: "WebRTC技術を活用したカップル・ダイアリーサービス（６人）",
    pjt: (
      <ul>
        <li>ユーザー技能とKakao Talk APIを活用したカップルの登録</li>
        <li>
          カップル写真撮影（遠距離で撮影しながら合成・近距離で一緒に撮影）
        </li>
        <li>カップルダイアリー（日付ごとの紹介・日記作成・イメージ照会）</li>
        <li>チャット</li>
        <li>
          カップルカレンダー、二択ゲーム、カップル質問、出席、チャレンジなど
        </li>
      </ul>
    ),
    period: "24.01.08 ~ 02.16 （６週）",
    mywork: (
      <>
        【FE，チームリーダー】
        <br />
        UI/UXのデザイン、JWT、ダイアリー照会、日記作成、チャット（既読・逆無限スクロール、未読数）、アプリ設定、ユーザー設定、テーマ
      </>
    ),
    skills: [
      "React",
      "Typescript",
      "PWA",
      "Zustand",
      " Styled Components",
      "STOMP",
      "Git",
      "Jira",
    ],
    detail: (
      <p className="desc">
        遠距離で同時に写真を撮ることができるカップル向けのアプリケーションです。初めて
        <span>React</span>を使ったプロジェクトで、ステートの管理には
        <span>Zustand</span>
        を使いました。カップルのコミュニケーションのためのアプリである分、
        <span>Stomp</span>
        を用いたリアルタイムチェットと既読確認技能を提供しており、そのほかにも今まで取った写真を確認できる写真帳や日記を書けるダイアリー、カップル共用のカレンダーなど一緒に楽しめる機能を１０個以上具現しました。UI面では
        <span>Styled Components</span>
        を使い、テーマ機能を追加いたしました。初めてBEとチームを組んで進行したプロジェクトである分、BEとのコミュニケーションを重視しており、その過程で
        <span>JWT Token</span>を使った保安やRefresh
        Tokenの発行、ログイン維持などの機能を作る方法を学ぶことができました。デプロイはPWAを通じて進行いたしました。
      </p>
    ),
    images: logintoyouImages,
    thumbnails: logintoyouThumbs,
    etc: "",
    link: [
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2401_LogInToYou",
        Git,
      ],
    ],
  },
  collect: {
    title: "Collec.T",
    desc: "TMDB APIを活用した映画のおすすめウェブサイト (２人)",
    pjt: (
      <ul>
        <li>ランダムまたはジャンル別の映画の提案と映画の詳細照会</li>
        <li>映画のレビューCRUD、フォロー中のユーザーが書いたレビューの照会</li>
        <li>映画のフォラム</li>
        <li>ユーザ昨日、フォロー、ユーザープロファイルの紹介</li>
      </ul>
    ),
    period: "23.11.16 - 11.23 (６週)",
    mywork: (
      <>
        【FE, BE, チームリーダー】
        <br />
        データ収集、会員登録・ログインAPIを除いたFE/BE全体
      </>
    ),
    skills: [
      "Vue3",
      "Django",
      "SQLite",
      "Pinia",
      "Bootstrap",
      "django-rest-api",
      "restauth",
      "corsheaders",
    ],
    detail: (
      <p className="desc">
        映画のレビュー作成と、ユーザーが書いたレビューのジャンルをもとに映画をおすすめする映画のフォラムです。
        <span>Django</span>と<span>Vue3</span>
        で作られており、私の初プロファイルである分私にとっても意味深いサービスです。
        <span>Pinia</span>を使ってステートを管理しており、
        <span>django rest api</span>や<span>restauth</span>
        などを活用し会員機能を具現いたしました。<span>Bootstrap</span>
        を活用しResponsiveなUIを構成しており、動的なページにするためスクロール効果などを活用いたしました。Youtube
        APIを通じて映画の予告編を提供しており、直接APIを作りながらAPIに対する理解を深めることができました。
      </p>
    ),
    images: collectImages,
    thumbnails: collectThumbs,
    etc: "SSAFY学期末プロジェクト最優秀賞受賞",
    link: [
      [
        "git",
        "https://github.com/MJBaik/pjt_readme/tree/master/2312_collec.T",
        Git,
      ],
    ],
  },
};
