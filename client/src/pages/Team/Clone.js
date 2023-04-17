import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";

const Clone = () => {
  const onMoveLink = (link) => {
    window.open(link, "", "");
  };
  const Github = "https://github.com/codestates-seb/seb41_pre_007";
  const Velog =
    "https://velog.io/@dagg762/%ED%94%84%EB%A6%AC%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0";
  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-4/5 w-full p-3 sm:p-0">
        <div className="w-3/4  mt-3  flex ">
          <p className="sm:text-xl text-slate-500 ">home ▶︎ </p>
          <p className="sm:text-xl text-slate-500 ml-3"> project ▶︎ </p>
          <p className="sm:text-xl text-emerald-600/75 ml-3"> Stackoverflow </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-4xl sm:text-5xl">Stackoverflow Clone </p>
            <p>2022.12 - 2023.01</p>
            <p>팀원 : 프론트엔드 3명, 백엔드 3명</p>
          </div>
          <div className="sm:flex flex-col mt-5 hidden">
            <p className="text-xl">📎 Links</p>
            <div className="flex">
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
                  onMoveLink(Velog);
                }}
                className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300"
              >
                <SiVelog />
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
              github
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300"
                onClick={() => {
                  onMoveLink(Velog);
                }}
              >
                <SiVelog />
              </button>
              Velog
            </div>
          </div>
        </div>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">✏️ 서비스 내용</p>
          <p className="mt-2 text-lg sm:text-xl"> - 주요 기능 -</p>
          <p className="text-sm">(색깔로 표시한것은 내가 구현한 것)</p>
          <p className="text-md sm:text-lg">• 회원가입, 로그인(로그아웃) </p>
          <p className="text-md sm:text-lg">
            • <span className="text-cyan-600  ">게시물 CRUD</span>
          </p>
          <div className="flex text-md sm:text-lg">
            <p>• 댓글 CRUD </p>
          </div>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-slate-200 border-dashed"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">🗂️ 개발내용</p>

          <p className="mt-2 text-xl font-bold">
            - <span className="text-orange-600">Redux-toolkit</span>을 이용한
            상태관리 -
          </p>
          <p>
            검색창을 클릭한 상태를 Redux-toolkit으로 관리하였습니다. 이때
            리듀서, 액션타입, 액션 생성함수, 초기상태를 하나의 함수로 편하게
            선언하는 장점을 느낄수 있었습니다.
          </p>
          <p className="mt-2 text-xl font-bold">
            - 다양한 <span className="text-orange-600">React Hook</span>을
            이용한 기능 구현 -
          </p>
          <p>
            UPDATE 기능을 구현시 useState를 이용하여 편집한 텍스트를 상태를
            확인하여 편집할시 입력한 텍스트가, 편집을 하지 않았다면 원래
            존재하는 데이터가 그대로 patch 되도록 작성하였습니다.
          </p>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-slate-200 border-dashed"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">💡 배운점</p>
          <p className="mt-2 text-xl font-bold">- 백엔드 분들과의 첫 협업 -</p>
          <p>
            처음 백엔드 분들과 협업하는 것이기에 서로의 용어를 이해하는 데에
            어려움이 있었습니다. 하지만 서로의 이해를 돕기 위해 사진이나
            블로그를 공유하는 등의 노력을 통해 프로젝트를 진행할 수 있었습니다.
            또한 commit convention을 정하고, 매일 회의록을 작성하는 등
            협업에서의 의사소통의 중요성을 느꼈습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Clone;
