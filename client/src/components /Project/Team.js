import { useRef } from "react";
import Slider from "./Slider";
import mainhome from "../../images/main-home.png";
import maincategory from "../../images/main-category.png";
import mainmypage from "../../images/main-mypage.png";
import mainpost from "../../images/main-post.png";
import mainchat from "../../images/main-chat.png";
import mainaddpost from "../../images/main-addpost.png";
import mainresponsive from "../../images/main-responsive.png";
import prehome from "../../images/pre-home.png";
import prequestions from "../../images/pre-question.png";
import praskquestions from "../../images/pre-askquestion.png";
import preuser from "../../images/pre-user.png";
import preedit from "../../images/pre-editquestion.png";
import pretag from "../../images/pre-tags.png";

import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const images = useRef([
    { id: 0, title: "메인 페이지", src: mainhome },
    { id: 1, title: "카테고리 별 페이지", src: maincategory },
    { id: 2, title: "사용자 프로필 페이지", src: mainmypage },
    { id: 3, title: "게시물", src: mainpost },
    { id: 4, title: "채팅", src: mainchat },
    { id: 5, title: "게시물 작성", src: mainaddpost },
    { id: 6, title: "반응형 ", src: mainresponsive },
  ]);
  const images2 = useRef([
    { id: 0, title: "메인 페이지", src: prehome },
    { id: 1, title: "게시물과 댓글 페이지", src: prequestions },
    { id: 2, title: "질문을 작성하는 페이지", src: praskquestions },
    { id: 3, title: "사용자 프로필 페이지", src: preuser },
    { id: 3, title: "질문을 수정하는 페이지", src: preedit },
    { id: 3, title: "Tags 페이지", src: pretag },
  ]);

  const team = [
    {
      id: 1,
      title: "Look At Me",
      images: images,
      subtitle: "패션을 공유하고 대여 서비스까지 제공하는 웹 서비스입니다.",
      content:
        "사용자가 제품을 착용한 사진을 올리고 제품에 대한 설명과 구매링크를 공유하며 대여가 가능할시에는 대여 마크가 표시되도록 하여 사용자간 옷공유가 가능한 웹 사이트 입니다.",
      role: "• Team Leader, Frontend",
      function1: "• useEffect, useMemo 등 Hook을 이용한 기능 작업",
      function2: "• Axios를 이용한 데이터 통신",
      function3: "• Styled-component를 이용한 CSS 작업",
      function4: "• AWS(S3)로 React 배포",
      skill: "Javascript, React, Styled-component, Axios, Aws(S3)",
      github_link: "https://github.com/codestates-seb/seb41_main_035",
      retrospect_link:
        "https://velog.io/@dagg762/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%9A%8C%EA%B3%A0",
      goto: "/project/lookatme",
    },
    {
      id: 2,
      title: "스택오버플로우 클론 코딩",
      images: images2,
      subtitle: "스택오버플로우 클론 웹 사이트 입니다.",
      content:
        "처음으로 Git을 이용하여 백엔드와 협업한 첫 프로젝트이며 서버와 통신을 하는 방식을 이해하고 익숙해지는 계기가 되었습니다. ",
      role: "• Frontend",
      // function1: "• useEffect,useState 등 Hook을 이용한 기능 작업",
      function1: "• Redux-toolkit을 이용하여 상태관리",
      function2: "• Axios를 이용한 데이터 통신",
      function3: "• Styled-component를 이용한 CSS 작업",
      skill: "Javascript,React, Styled-component,  Redux-toolkit, Axios",
      github_link: "https://github.com/codestates-seb/seb41_pre_007",
      retrospect_link:
        "https://velog.io/@dagg762/%ED%94%84%EB%A6%AC%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
      goto: "/project/clone",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      className="sm:w-4/5 w-full bg-emerald-600/50 education flex flex-col  justify-center items-center"
    >
      <p className="text-3xl text-white text-left w-5/6 m-3">Team Project</p>
      {team.map((team) => {
        return (
          <div
            key={team.id}
            className="bg-white w-11/12 xl:w-5/6 flex flex-col items-center mb-4 p-5 rounded-md "
          >
            <p className="text-2xl sm:text-4xl font-semibold font-is-sunflower">
              {team.title}
            </p>
            <div className="project-introduce flex flex-col lg:flex-row mt-4 sm:mt-8 w-full  items-center">
              <Slider images={team.images} />
              <div className="introduce sm:ml-4 mt-2 sm:mt-0">
                <p className="sm:text-xl text-lg"> ✔︎개요</p>
                <p>{team.subtitle} </p>
                <p>{team.content}</p>
                <div className="mt-4">
                  <p className="sm:text-xl text-lg"> ✔︎역할</p>
                  <ul>
                    <li> {team.role}</li>
                    <li> {team.function1}</li>
                    <li> {team.function2}</li>
                    <li> {team.function3}</li>
                    <li> {team.function4}</li>
                    <li> {team.function5}</li>
                  </ul>
                  <div className="mt-4">
                    <p className="sm:text-xl text-lg">✔︎Skill</p>
                    <p>{team.skill}</p>
                  </div>
                </div>
                <div className="flex mt-4 justify-center items-center">
                  <div className="flex justify-center ">
                    <a
                      href={team.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 items-center cursor-pointer flex bg-transparent text-slate-600 font-semibold border border-slate-600 rounded hover:bg-slate-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                    >
                      <BsGithub className="mr-1" /> Github
                    </a>
                    <a
                      href={team.retrospect_link}
                      target="_blank"
                      rel="noreferrer"
                      className=" p-1  ml-3 items-center cursor-pointer flex bg-transparent text-slate-600 font-semibold border border-slate-600 rounded hover:bg-slate-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                    >
                      <SiVelog className="mr-1" />
                      회고
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      navigate(team.goto);
                    }}
                    class="sm:w-32 ml-3 h-8 p-1 items-center cursor-pointer flex bg-transparent justify-center text-slate-600 font-semibold border border-slate-600 rounded hover:bg-slate-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
export default Team;
