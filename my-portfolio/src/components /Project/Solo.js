import Slider from "./Slider";
import { useRef } from "react";
import mainhome from "./images/main-home.png";
import maincategory from "./images/main-category.png";
import mainmypage from "./images/main-mypage.png";
import mainpost from "./images/main-post.png";
import mainchat from "./images/main-chat.png";
import mainaddpost from "./images/main-addpost.png";
import mainresponsive from "./images/main-responsive.png";
import { useNavigate } from "react-router-dom";
const Solo = () => {
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
  const solo = [
    {
      id: 1,
      title: "부동산 웹사이트(진행중)",
      images: images,
      subtitle: "패션을 공유하고 대여 서비스까지 제공하는 웹 서비스입니다.",
      content: "Next.js를 사용하여 ",
      function1: "오시는길(지도), 블로그 연결 등",
      function2: "• Next.js",
      function3: "• Vercel를 이용하여 정적웹사이트 배포",
      skill: "Javascript, Next.js, vercel",
      github_link: "https://github.com/codestates-seb/seb41_main_035",
      github: "github.com/codestates-seb/seb41_main_035",
      retrospect_link:
        "https://velog.io/@dagg762/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%9A%8C%EA%B3%A0",
      retrospect: "velog.io/@dagg762",
      goto: "/project/Realestate",
    },
    {
      id: 2,
      title: "포트폴리오 웹사이트",
      images: images,
      subtitle: "포트폴리오 목적으로 제작한 웹사이트입니다.",
      content:
        " 백엔드와 협업한 첫 프로젝트이며 서버와 통신을 하는 방식을 이해하고 익숙해지는 계기가 되었습니다. 그리고 redux-toolkit을",
      function1: "• Tailwind를 이용하여 CSS 작업",
      function2: "• Netlify를 이용하여 정적 웹사이트 배포",

      skill: "React, Styled-component, Javascript, Redux-toolkit, Axios",
      github_link: "https://github.com/codestates-seb/seb41_pre_007",
      github: "github.com/codestates-seb/seb41_pre_007",
      retrospect_link:
        "https://velog.io/@dagg762/%ED%94%84%EB%A6%AC%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
      retrospect: "velog.io/@dagg762",
      goto: "/project/Portfolio",
    },
  ];
  return (
    <div className="w-4/5 bg-emerald-600/50 education flex flex-col justify-center items-center">
      <p className="text-3xl text-white text-left w-4/5 m-3">Solo Project</p>
      {solo.map((data) => {
        return (
          <div
            key={data.id}
            className="bg-white w-4/5 flex flex-col items-center mb-4 p-5 rounded-md "
          >
            <p className=" text-4xl">{data.title}</p>

            <div className="project-introduce flex mt-8 w-full">
              <Slider images={data.images} />
              <div className="introduce ml-4">
                <p className="text-xl"> ✔︎개요</p>
                <p>{data.subtitle} </p>
                <p>{data.content}</p>

                <div className="mt-4">
                  <p className="text-xl"> ✔︎역할</p>
                  <ul>
                    <li> {data.function1}</li>
                    <li> {data.function2}</li>
                    <li> {data.function3}</li>
                    <li> {data.function4}</li>
                    <li> {data.function5}</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-xl">✔︎Skill</p>
                  <p>{data.skill}</p>
                </div>
                <div className="flex mt-4">
                  <div className="flex justify-center ">
                    <a
                      href={data.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-2 bg-slate-200"
                    >
                      Github
                    </a>
                    <a
                      href={data.retrospect_link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 bg-slate-200"
                    >
                      Velog(회고)
                    </a>
                  </div>
                  <button
                    className="bg-slate-200 hover:bg-slate-400 ml-8"
                    onClick={() => {
                      navigate(data.goto);
                    }}
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Solo;
