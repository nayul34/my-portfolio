const Introduce = () => {
  const aboutme = [
    { id: 0, content: " 1. 코드 개선을 위해 노력하는 개발자" },
    { id: 1, content: " 2. 꼼꼼하게 빈틈을 채워나가는 개발자" },
    {
      id: 2,
      content: " 3. 한번 시작한 일은 끝까지 완수하기 위해 노력하는 개발자",
    },
    {
      id: 3,
      content:
        " 4. 완벽한 것은 없다고 생각하여 최선을 끌어내기 위해 끝없이 고민하는 개발자",
    },
  ];
  return (
    <div className="w-11/12 sm:w-4/5  bg-emerald-600/50 rounded-lg introduce flex flex-col">
      <div className="sm:m-10 m-5">
        <p className="text-3xl text-white font-bold">Introduce</p>
        <hr className=" w-32 "></hr>
        <p className="text-xl sm:text-3xl mt-4">
          프론트엔드 개발자 김나율에 대해 소개합니다!
        </p>
        {aboutme.map((me) => {
          return (
            <ol className="m-4" key={me.id}>
              <li className="text-md sm:text-xl mt-2">{me.content}</li>
            </ol>
          );
        })}

        {/* <p>
   프로젝트를 진행하며 다른 사람이 내 코드를 보면 이해를 할 수 있을까?
   등의 고민을 많이 하였습니다. 이러한 고민들을 해결하기 위해 검색하고,
   모르는 부분을 명확히 제시하여 질문하고 원하는 답을 얻는 소통방식
   등을 통해 답을 찾는 과정을 반복하여 제 코드에 적용하며 진취적으로
   문제를 해결하였습니다.{" "}
 </p> */}

        {/* <p>
   배운 것을 나의 것으로 만들기 위해 블로그에 정리합니다. 이후 이해가
   안 되는 부분이 있다면 다른 문서를 찾아 추가로 채워넣거나 코드를 직접
   작성해봄으로써 명확히 나의 것으로 만듭니다.
 </p> */}
      </div>
    </div>
  );
};
export default Introduce;
