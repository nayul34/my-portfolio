import { BsGithub } from "react-icons/bs";

const Realestate = () => {
  const onMoveLink = (link) => {
    window.open(link, "", "");
  };
  const Github = "https://github.com/nayul34/real-estate__web";

  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-4/5 w-full p-3 sm:p-0">
        <div className="w-3/4  mt-3  flex ">
          <p className="sm:text-xl text-slate-500 ">home ▶︎ </p>
          <p className="sm:text-xl text-slate-500 ml-3"> project ▶︎ </p>
          <p className="sm:text-xl text-emerald-600/75 ml-3"> Real_esate </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-4xl sm:text-5xl">부동산 웹사이트 </p>
            <p>2023.03 - 진행중</p>
          </div>
          <div className="mt-5 flex-col justify-center items-center hidden sm:flex">
            <p className="text-xl">📎 Links</p>
            <button
              onClick={() => {
                onMoveLink(Github);
              }}
              className="bg-slate-200 rounded-full w-12 h-12 flex justify-center items-center hover:bg-slate-300"
            >
              <BsGithub />
            </button>
          </div>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-black"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">✏️ 서비스 내용</p>
          <p className="text-lg sm:text-xl">
            부동산 관련 정보와 매물정보가 있는 어머니의 블로그에 바로 접속할 수
            있도록 제작한 웹사이트입니다.
          </p>
          <p className="mt-2 text-lg sm:text-xl">- background -</p>
          <p className="text-md sm:text-lg">
            어머니께서 운영하시는 부동산의 웹사이트가 있으면 고객분들이 정보들에
            더욱 접근하기 쉬울거같다고 하셔서 기획하게 되었습니다.
          </p>
          <p className="mt-2 text-lg sm:text-xl"> - 주요 기능 -</p>
          <p className="text-md sm:text-lg">• 지도 기능 </p>
        </div>
        <hr className=" w-full border-[1px] mt-2 border-slate-200 border-dashed"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">🗂️ 개발내용</p>
          <p>추후에 업데이트 하겠습니다.</p>
          {/* <p className="mt-2 text-xl font-bold">- Next.js를 이용한 개발 -</p>
          <p>
            채팅 기능을 구현하며 메시지 전송 시 클릭 시점과 받는 사용자의 정보에
            대한 시점이 맞지 않아 어려움을 겪었지만 useEffect를 이용하여 특정
            사용자에 대한 데이터를 먼저 받은 후, 그 데이터에서 받는 사용자에
            대한 정보를 얻는 순서로 변경하여 해결할 수 있었습니다. 이외에도
            react hook의 useMemo를 사용하여 필터 기능 등을 구현하였습니다.
          </p> */}
        </div>
        <hr className=" w-full border-[1px] mt-2 border-slate-200 border-dashed"></hr>
        <div className="m-3">
          <p className="sm:text-3xl text-2xl">💡 배운점</p>
          <p>추후에 업데이트 하겠습니다.</p>
        </div>
      </div>
    </div>
  );
};
export default Realestate;
