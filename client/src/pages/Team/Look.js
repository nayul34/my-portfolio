// import { AiOutlineHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { SiVelog } from "react-icons/si";
const Look = () => {
  // const Url = "http://mainproject-035.s3-website.ap-northeast-2.amazonaws.com/";
  const Github = "https://github.com/codestates-seb/seb41_main_035";
  const Presentation = "https://www.youtube.com/watch?v=JwH2jbXSR4w";
  const Velog =
    "https://velog.io/@dagg762/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%9A%8C%EA%B3%A0";
  const onMoveLink = (link) => {
    window.open(link, "", "");
  };
  return (
    <div className="w-full flex justify-center font-is-sunflower">
      <div className="sm:w-4/5 w-full p-3 sm:p-0">
        <div className="w-3/4  mt-3  flex ">
          <p className="sm:text-xl text-slate-500 ">home ▶︎ </p>
          <p className="sm:text-xl text-slate-500 ml-3"> project ▶︎ </p>
          <p className="sm:text-xl text-emerald-600/75 ml-3"> Look At Me </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-4xl sm:text-5xl">Look At Me </p>
            <p>2023.01 - 2023.02</p>
            <p>팀원 : 프론트엔드 3명, 백엔드 3명</p>
          </div>
          <div className="sm:flex flex-col mt-5 hidden">
            <p className="text-xl">📎 Links</p>
            <div className="flex">
              <button
                className="bg-slate-200 mr-2 rounded-full w-12 h-12 flex justify-center items-center text-center hover:bg-slate-300"
                onClick={() => {
                  onMoveLink(Velog);
                }}
              >
                <SiVelog />
              </button>
              <button
                onClick={() => {
                  onMoveLink(Github);
                }}
                className="bg-slate-200 mr-2 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300"
              >
                <BsGithub />
              </button>
              <button
                onClick={() => {
                  onMoveLink(Presentation);
                }}
                className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300"
              >
                <MdOndemandVideo />
              </button>
            </div>
          </div>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-black"></hr>
        <div className="flex sm:hidden flex-col m-3">
          <p className="text-xl">📎Links</p>
          <div className="flex justify-around ">
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  onMoveLink(Github);
                }}
                className="bg-slate-200 mr-2 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300"
              >
                <BsGithub />
              </button>
              Github
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="bg-slate-200 mr-2 rounded-full w-12 h-12 flex justify-center items-center text-center hover:bg-slate-300"
                onClick={() => {
                  onMoveLink(Velog);
                }}
              >
                <SiVelog />
              </button>
              Velog
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300">
                <MdOndemandVideo />
              </button>
              Presentation
            </div>
          </div>
        </div>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">✏️ 서비스 내용</p>
          <p className="text-lg sm:text-xl">
            패션을 공유하고 대여 서비스까지 제공하는 웹 서비스입니다. 처음으로
            기획부터 배포까지 다 해본 프로젝트 입니다.
          </p>
          <p className="mt-2 text-lg sm:text-xl">- background -</p>
          <p className="text-md sm:text-lg">
            다양한 사용자들이 올린 게시물들을 보며 코디에 대한 고민을 해결하고,
            사람들이 옷을 공유하며 활용가치가 있는 의류가 버려지거나 방치되는
            것을 막기 위해 이러한 서비스를 기획하게 되었습니다.
          </p>
          <p className="mt-2 text-lg sm:text-xl"> - 주요 기능 -</p>
          <p className="text-sm">(색깔로 표시한것은 내가 구현한 것)</p>
          <p className="text-md sm:text-lg">• 회원가입, 로그인(로그아웃) </p>
          <p className=" text-md sm:text-lg">
            •<span className="text-cyan-600 "> 게시물 작성, 조회, 삭제</span>
          </p>
          <p className=" text-md sm:text-lg">
            •<span className="text-cyan-600 "> 댓글 작성, 조회, 수정</span>
            <span>, 삭제</span>
          </p>
          <p className=" text-md sm:text-lg">
            •
            <span className="text-cyan-600">
              정렬기능 ( 최신순, 좋아요 많은순, 낮은/높은 가격순 )
            </span>
          </p>
          <p className=" text-md sm:text-lg">
            •<span> 필터기능 ( </span>
            <span className="text-cyan-600  ">
              대여 가능한 것, 내가 작성한 게시물, 카테고리별
            </span>
            <span>, 좋아요 누른것 )</span>
          </p>
          <p className=" text-md sm:text-lg">
            •<span className="text-cyan-600  "> 채팅 조회, 작성 </span>
          </p>
          <p className="text-md sm:text-lg">• 좋아요 기능</p>
          <p className="text-md sm:text-lg">• 팔로우 기능</p>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-slate-200 border-dashed"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">🗂️ 개발내용</p>
          <p className="mt-2 text-xl font-bold">
            - 다양한 <span className="text-orange-600 ">react hook</span>을
            이용한 기능 구현 -
          </p>
          <p>
            채팅 기능을 구현하며 메시지 전송 시 클릭 시점과 받는 사용자의 정보에
            대한 시점이 맞지 않아 어려움을 겪었지만 useEffect를 이용하여 특정
            사용자에 대한 데이터를 먼저 받은 후, 그 데이터에서 받는 사용자에
            대한 정보를 얻는 순서로 변경하여 해결할 수 있었습니다. 이외에도
            react hook의 useMemo를 사용하여 필터 기능 등을 구현하였습니다.
          </p>
          <p className="mt-2 text-xl font-bold">
            {" "}
            - <span className="text-orange-600 ">Axios</span>를 이용한 통신 -
          </p>
          <p>
            Axios를 이용하여 게시물 데이터를 전송 시 사진 파일, 글, 배열 형태의
            데이터를 한꺼번에 보내야 했기에 formData 형태로 전송하였습니다.
            이뿐만 아니라 게시글, 댓글, 채팅 등을 위한 다양한 통신을 하였습니다.
            또한 들어온 data를 어떻게 화면에 보여지게 할지에 대한 고민을 많이
            하였습니다.
          </p>
          <p className="mt-2 text-xl font-bold">
            {" "}
            - <span className="text-orange-600">반응형과 웹 내비게이션</span> -
          </p>
          <p>
            웹 환경뿐만 아니라 모바일 환경에서도 사용자가 보기 편하게
            구현하였으며, 유저가 웹 사이트 내에서 자연스럽게 이동할 수 있도록
            현재 위치의 카테고리는 색깔을 다르게 하고, 카테고리는 항상 보이도록
            하는 등의 UX/UI 디자인에 대해 많이 고민하였습니다.
          </p>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-slate-200 border-dashed"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">💡 배운점</p>
          <p className="mt-2 text-xl font-bold">
            - <span className="text-orange-600">AWS(S3)</span>를 이용한 배포 -
          </p>
          <p>
            S3를 이용하여 배포를 해보았는데 자동으로 빌드/배포가 되게 하지 않아
            매번 build 파일을 업로드 해야하는 불편함이 있었습니다. 다음
            프로젝트를 하게 된다면 CI/CD를 해보고자 합니다.
          </p>
          <p className="mt-2 text-xl font-bold">
            {" "}
            - HTML5 <span className="text-orange-600">'meta'</span>요소 -
          </p>
          <p>
            name 속성을 keywords로 준 후 키워드를 지정하여 검색엔진 최적화도
            하였고, viewport 속성을 설정함으로써 사용자가 웹사이트의 크기가
            조절하며 볼수 있도록 하는 등 실제 사이트처럼 구성해보았습니다.
          </p>
          <p className="mt-2 text-xl font-bold"> - 팀장으로서의 역할 -</p>
          <p>
            팀장으로서 팀원들을 케어하고 일정관리 등의 어려움이 있었지만, 팀원
            들에게 사기를 북돋아 주고 어려움이 있으면 함께 해결해 주는 등
            프로젝트를 잘 이끌어가기 위해 노력하여 원만하게 프로젝트를 마무리할
            수 있었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Look;
