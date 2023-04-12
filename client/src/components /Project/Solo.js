import Slider from "./Slider";
import { useRef } from "react";
import porthome from "../../images/portfolio-home.png";
import portpro from "../../images/portfolio-project.png";
import portabout from "../../images/portfolio-aboutme.png";
import portmore from "../../images/portfolio-more.png";
import estate from "../../images/real.png";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
const Solo = () => {
  const navigate = useNavigate();
  const images = useRef([{ id: 0, title: "메인 페이지", src: estate }]);
  const images2 = useRef([
    { id: 0, title: "메인 페이지", src: porthome },
    { id: 1, title: "프로젝트 페이지", src: portpro },
    { id: 2, title: "About me 페이지", src: portabout },
    { id: 3, title: "프로젝트 상세 페이지", src: portmore },
  ]);
  const solo = [
    {
      id: 1,
      title: "부동산 웹사이트(진행중)",
      images: images,
      subtitle:
        "부동산 관련 정보와 매물정보가 있는 어머니의 블로그에 바로 접속할 수 있도록 제작한 웹사이트입니다.",
      content: "",
      function1: "오시는길(지도), 블로그 연결 등",
      // function2: "• Next.js",
      function2: "• Vercel를 이용하여 정적웹사이트 배포",
      skill: "Javascript, Next.js, Vercel,Styled-component",
      github_link: "https://github.com/nayul34/real-estate__web",
      retrospect_link: "",
      goto: "/project/realestate",
    },
    {
      id: 2,
      title: "포트폴리오 웹사이트",
      images: images2,
      subtitle: "포트폴리오 목적으로 제작한 웹사이트입니다.",
      content:
        "Tailwind CSS를 처음 사용해보며 클래스 명을 고민하거나, 일일이 찾는 수고를 하지 않아도 되는 등의 유용성을 느낄 수 있었고, Github Actions를 이용해 AWS S3 배포 자동화를 하였습니다. ",
      function1: "• Tailwind를 이용하여 CSS 작업",
      function2: "• S3로 배포 후 github actions를 이용한 배포 자동화",
      skill: "React, Javascript, Tailwind CSS, AWS(S3)",
      github_link: "https://github.com/nayul34/my-portfolio",
      retrospect_link:
        "https://velog.io/@dagg762/%ED%9A%8C%EA%B3%A0-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4",
      goto: "",
    },
  ];
  return (
    <div className="sm:w-4/5 w-full bg-emerald-600/50 education flex flex-col  justify-center items-center">
      <p className="text-3xl text-white text-left w-5/6 m-3">Solo Project</p>
      {solo.map((data) => {
        return (
          <div
            key={data.id}
            className="bg-white w-11/12 xl:w-5/6 flex flex-col items-center mb-4 p-5 rounded-md "
          >
            <p className=" text-2xl sm:text-4xl">{data.title}</p>

            <div className="project-introduce flex flex-col lg:flex-row mt-4 sm:mt-8 w-full  items-center">
              <Slider images={data.images} />
              <div className="introduce sm:ml-4 mt-2 sm:mt-0">
                <p className="sm:text-xl text-lg"> ✔︎개요</p>
                <p>{data.subtitle} </p>
                <p>{data.content}</p>

                <div className="mt-4">
                  <p className="sm:text-xl text-lg"> ✔︎역할</p>
                  <ul>
                    <li> {data.function1}</li>
                    <li> {data.function2}</li>
                    <li> {data.function3}</li>
                    <li> {data.function4}</li>
                    <li> {data.function5}</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="sm:text-xl text-lg">✔︎Skill</p>
                  <p>{data.skill}</p>
                </div>
                <div className="flex mt-4 justify-center">
                  <div className="flex justify-center ">
                    <a
                      href={data.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 items-center cursor-pointer flex bg-transparent text-slate-600 font-semibold border border-slate-600 rounded hover:bg-slate-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                    >
                      <BsGithub className="mr-1" /> Github
                    </a>
                    {data.retrospect_link !== "" ? (
                      <a
                        href={data.retrospect_link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 ml-3 items-center cursor-pointer flex bg-transparent text-slate-600 font-semibold border border-slate-600 rounded hover:bg-slate-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                      >
                        <SiVelog className="mr-1" />
                        회고
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  {data.goto !== "" ? (
                    <button
                      className="sm:w-32 ml-3 h-8 p-1 items-center cursor-pointer flex bg-transparent justify-center text-slate-600 font-semibold border border-slate-600 rounded hover:bg-slate-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                      onClick={() => {
                        navigate(data.goto);
                      }}
                    >
                      자세히 보기
                    </button>
                  ) : (
                    <div></div>
                  )}
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
