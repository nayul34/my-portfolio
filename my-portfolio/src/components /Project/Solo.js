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
  return (
    <div className="w-4/5 bg-emerald-600/50 education flex flex-col justify-center items-center">
      <p className="text-3xl text-white text-left w-4/5 m-3">Solo Project</p>
      <div className="drop-shadow-2xl bg-white w-4/5 flex flex-col items-center mb-4 p-3 rounded-md ">
        <p className=" text-4xl">부동산 웹사이트(진행중)</p>
        <div className="project-introduce flex">
          <Slider images={images} />
          <div className="introduce">
            {" "}
            <p>어머니가 운영하는 부동산의 웹사이트입니다.</p>
            <p>Next.js를 사용하여 </p>
            <div className="mt-4">
              <ul>
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

      <div className="bg-white w-4/5 flex flex-col items-center mb-4 p-3 rounded-md ">
        <p className=" text-4xl">포트폴리오 웹사이트 </p>
        <div className="project-introduce flex">
          <Slider images={images} />
          <div className="introduce">hihi</div>
        </div>
      </div>
    </div>
  );
};
export default Solo;
