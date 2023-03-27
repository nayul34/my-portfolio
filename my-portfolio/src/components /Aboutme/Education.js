const Education = () => {
  return (
    <div className="w-4/5  bg-emerald-600/50  rounded-lg">
      <div className="m-10">
        <p className="text-3xl text-white">Education</p>
        <hr className=" w-32 "></hr>
        <div className="flex">
          <div className="border-l-[2px] lg:h-44 pl-2 w-44 text-lg mt-12 md:ml-12 flex flex-col justify-between text-white">
            <p>2022.08 - 2023.03</p>
            <p>2018.03 - 2022.02</p>
          </div>
          <div className=" mt-12 md:ml-12">
            <div>
              <p className="text-xl font-bold">코드스테이츠(CodeStates)</p>
              <p className="text-lg">Front-End Engineering Bootcamp(41기)</p>
              <p className="text-lg">
                • Javascript 기반으로 프론트엔드 과정 학습
              </p>
              <p className="text-lg">
                • 6개월 동안 페어프로그래밍, 팀프로젝트를 통한 협업 경험
              </p>
              <p className="text-lg">
                • 20주 동안 매일 알고리즘 문제 풀이와 코드 리뷰 경험
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl font-bold">동아대학교</p>
              <p className="text-lg">전자공학과 (3.81/4.5) 졸업</p>
              <p className="text-lg">• 과 학생회 홍보부장으로 활동</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
