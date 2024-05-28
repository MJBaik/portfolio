import { cloudyImages } from "./projectImages";

export interface IProject {
  title: string;
  period: string;
  desc: string;
  pjt: string;
  mywork: string;
  skills: string[];
  detail: React.ReactElement;
  images: string[];
  etc: string;
}

export const projectItems: { [name: string]: IProject } = {
  cloudy: {
    title: "Cloudy",
    desc: "AWS 서비스를 활용한 AWS Digital Learning Platform 개발 (6인)",
    pjt: "검색어 교정 및 자동완성     강의 및 로드맵 추천     유저 및 커뮤니티",
    period: "24.04.08 ~ 05.17 (6주)",
    mywork:
      "(FE) UI/UX 설계, 메인 페이지, 이벤트 스트림을 통한 실시간 챗봇 구현, 커뮤니티 전체 목록(필터링 및 무한스크롤), 커뮤니티 디테일 및 CRUD <br /> (BE) 커뮤니티 API (게시글 및 덧글 CRUD,  이미지 업로드)",
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
    images: cloudyImages,
    etc: "SSAFY 자율 프로젝트 기업연계 최우수상 수상",
  },
  // talkydoki: { title: "TalkyDoki", desc: "토키도키" },
  // logintoyou: { title: "너에게 로그인", desc: "너에게로그인" },
  // collect: { title: "Collec.T", desc: "콜렉티" },
};
