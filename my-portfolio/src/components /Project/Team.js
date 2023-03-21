import { GrPrevious, GrNext } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import mainhome from "./images/main-home.png";
import maincategory from "./images/main-category.png";
import mainmypage from "./images/main-mypage.png";
import mainpost from "./images/main-post.png";
import mainchat from "./images/main-chat.png";
import mainaddpost from "./images/main-addpost.png";
import mainresponsive from "./images/main-responsive.png";
const Team = () => {
  const images = useRef([
    { id: 1, title: "메인 페이지", src: mainhome },
    { id: 2, title: "카테고리 별 페이지", src: maincategory },
    { id: 3, title: "내 프로필", src: mainmypage },
    { id: 4, title: "게시물", src: mainpost },
    { id: 5, title: "채팅", src: mainchat },
    { id: 6, title: "게시물 작성", src: mainaddpost },
    { id: 7, title: "반응형 ", src: mainresponsive },
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);
  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };
  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);
  console.log(current);
  return (
    <div className="h-96 w-4/5 bg-red-200 education flex flex-col justify-center items-center">
      <p>Team Project</p>
      <div>
        <p>Look At Me</p>
        <p>패션을 공유하고 대여 서비스까지 제공하는 웹 서비스</p>
        <div className="project-introduce">
          <div className="picture flex">
            <button>
              <GrPrevious
                onClick={() => {
                  moveSlide(-1);
                }}
              />
            </button>
            <div className="window bg-orange-300 w-60 h-60 overflow-hidden">
              <div className="flexbox flex" style={style}>
                {images.current.map((img) => (
                  <div
                    key={img.id}
                    className="img  w-60 h-60 bg-center bg-contain bg-no-repeat flex-none"
                    style={{ backgroundImage: `url(${img.src})` }}
                  >
                    <p> {img.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <button>
              <GrNext
                onClick={() => {
                  moveSlide(1);
                }}
              />
            </button>
          </div>
          {/* <div className="dots mt-4 flex justify-center ">
            {images.current.map((img) => (
              <div
                key={img.id}
                className={
                  img.id === current
                    ? " bg-gray-700"
                    : " bg-slate-400 rounded-full h-2.5 w-2.5 ml-2"
                }
              ></div>
            ))}
          </div> */}
          <div className="introduce"></div>
        </div>
      </div>
    </div>
  );
};
export default Team;
