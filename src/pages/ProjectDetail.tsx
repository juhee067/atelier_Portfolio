import { Intro } from "../components/projectDetail/Intro";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const projectData = [
  {
    projectNum: "project01",
    title: "독서 버킷리스트",
    period: "2023. 02 - 2023. 07",
    stack: "React | JavaScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project01.png`,
    des: "독서 버킷리스트는 도서 검색, 버킷리스트 관리 및 독후감 작성을 통한  개인화된 독서 경험을 제공하는 웹 애플리케이션입니다.이 프로젝트는 교보문고 API를 활용하여 사용자가 원하는 도서를 검색하고, 버킷리스트에 도서를 추가, 삭제하며, 버킷리스트에서 완료한 도서에 대한 독후감을 작성할 수 있도록 설계되었습니다.",
  },
  {
    projectNum: "project02",
    title: "메신저 대화 분석 시각화 웹",
    period: "2023. 04 - 2023. 08",
    stack: "React | TypeScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project02.png`,
    des: "독서 버킷리스트는 도서 검색, 버킷리스트 관리 및 독후감 작성을 통한  개인화된 독서 경험을 제공하는 웹 애플리케이션입니다.이 프로젝트는 교보문고 API를 활용하여 사용자가 원하는 도서를 검색하고, 버킷리스트에 도서를 추가, 삭제하며, 버킷리스트에서 완료한 도서에 대한 독후감을 작성할 수 있도록 설계되었습니다.",
  },
  {
    projectNum: "project03",
    title: "메시지 전달형 자살예방웹사이트",
    period: "2023. 07 - 2023. 10",
    stack: "React | TypeScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project03.png`,
    des: "독서 버킷리스트는 도서 검색, 버킷리스트 관리 및 독후감 작성을 통한  개인화된 독서 경험을 제공하는 웹 애플리케이션입니다.이 프로젝트는 교보문고 API를 활용하여 사용자가 원하는 도서를 검색하고, 버킷리스트에 도서를 추가, 삭제하며, 버킷리스트에서 완료한 도서에 대한 독후감을 작성할 수 있도록 설계되었습니다.",
  },
  {
    projectNum: "project04",
    title: "와인 공유 커뮤니티",
    period: "2023. 03 - 2023. 04",
    stack: "React | Javascript ",
    src: `s`,
    des: "독서 버킷리스트는 도서 검색, 버킷리스트 관리 및 독후감 작성을 통한  개인화된 독서 경험을 제공하는 웹 애플리케이션입니다.이 프로젝트는 교보문고 API를 활용하여 사용자가 원하는 도서를 검색하고, 버킷리스트에 도서를 추가, 삭제하며, 버킷리스트에서 완료한 도서에 대한 독후감을 작성할 수 있도록 설계되었습니다.",
  },
];

export const ProjectDetail = () => {
  return <div>{/* <Intro title={title} period={period} stack={stack} src={src} des={des} /> */}</div>;
};
