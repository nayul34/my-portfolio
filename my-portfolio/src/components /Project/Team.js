import { useRef } from "react";
import Slider from "./Slider";
import mainhome from "./images/main-home.png";
import maincategory from "./images/main-category.png";
import mainmypage from "./images/main-mypage.png";
import mainpost from "./images/main-post.png";
import mainchat from "./images/main-chat.png";
import mainaddpost from "./images/main-addpost.png";
import mainresponsive from "./images/main-responsive.png";
import prehome from "./images/pre-home.png";
import prequestions from "./images/pre-question.png";
import praskquestions from "./images/pre-askquestion.png";
import preuser from "./images/pre-user.png";
// import { BsGithub } from "react-icons/bs";
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
  ]);

  return (
    <div className="w-4/5 bg-emerald-600/50 education flex flex-col justify-center items-center">
      <p className="text-3xl text-white text-left w-4/5 m-3">Team Project</p>
      <div className="bg-white w-4/5 flex flex-col items-center mb-4 p-3 rounded-md ">
        <p className=" text-4xl">Look At Me</p>

        <div className="project-introduce flex ">
          <Slider images={images} />
          <div className="introduce">
            <p>패션을 공유하고 대여 서비스까지 제공하는 웹 서비스입니다. </p>
            <p>
              사용자가 제품을 착용한 사진을 올리고 제품에 대한 설명과 구매링크를
              공유하며 대여가 가능할시에는 대여 마크가 표시되도록 하여 사용자간
              옷공유가 가능한 웹 사이트 입니다.
            </p>

            <div className="mt-4">
              <ul>
                <li>• Team Leader, Frontend</li>
                <li>
                  • 게시글 및 댓글 CRUD , 채팅 기능 API(조회, 전송),
                  정렬기능(좋아요 많은순, 최신 순, 가격 높은 순/낮은 순),
                  필터기능(대여 가능, 카테고리 별)
                </li>
              </ul>

              <div className="flex">
                <p>•Skill</p>
                <p>Javascript, React, Styled-component, Axios, Aws(S3)</p>
              </div>
              <div className="flex">
                <p>•Github</p>
                <a
                  href="https://github.com/codestates-seb/seb41_main_035"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/codestates-seb/seb41_main_035
                </a>
              </div>
              <div className="flex">
                <p>•회고</p>
                <a
                  href="https://velog.io/@dagg762/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%9A%8C%EA%B3%A0"
                  target="_blank"
                  rel="noreferrer"
                >
                  velog.io/@dagg762
                </a>
              </div>
            </div>
            <button
              className="bg-slate-200"
              onClick={() => {
                navigate("/project/Look-At-Me");
              }}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-4/5 flex flex-col items-center mb-4 p-3">
        <p className="text-4xl">스택오버플로우 클론 코딩</p>
        <div className="project-introduce flex">
          <Slider images={images2} />
          <div className="introduce">
            <p>스택오버플로우 클론 웹 사이트 입니다.</p>
            <p>
              {" "}
              백엔드와 협업한 첫 프로젝트이며 서버와 통신을 하는 방식을 이해하고
              익숙해지는 계기가 되었습니다. 그리고 redux-toolkit을{" "}
            </p>
            <div>
              <ul>
                <li>• Frontend</li>
                <li>• 게시물 CRUD</li>
              </ul>
            </div>
            <div>
              <p>•Skill</p>
              <p>react, styled component, javascript, redux-toolkit, axios</p>
            </div>
            <div>
              <p>•Github</p>
              <a
                href="https://github.com/codestates-seb/seb41_main_035"
                target="_blank"
                rel="noreferrer"
              >
                github.com/codestates-seb/seb41_main_035
              </a>
            </div>
            <div>
              <p>•회고</p>
              <a
                href="https://velog.io/@dagg762/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%9A%8C%EA%B3%A0"
                target="_blank"
                rel="noreferrer"
              >
                velog.io/@dagg762
              </a>
            </div>
            <button
              className="bg-slate-200"
              onClick={() => {
                navigate("/project/Look-At-Me");
              }}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
