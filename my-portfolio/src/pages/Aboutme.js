const Aboutme = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="h-12 w-4/5 bg-gray-300 flex justify-between">
        <p>Skill</p>
        <p>Introduce</p>
        <p>Education</p>
      </div>
      <div className="h-96 w-4/5 bg-red-200">
        프론트엔드 개발자 김나율에 대해 소개합니다!
      </div>
      <hr className=" w-full  "></hr>
      <div className="h-96 w-4/5 bg-red-200">기술스택</div>
      <hr className=" w-full  "></hr>
      <div className="h-96 w-4/5 bg-red-200">Education</div>
    </div>
  );
};

export default Aboutme;
