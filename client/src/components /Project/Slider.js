import { GrPrevious, GrNext } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
const Slider = ({ images }) => {
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

  return (
    <div>
      <div className="picture flex justify-center ">
        <button>
          <GrPrevious
            className="text-2xl"
            onClick={() => {
              moveSlide(-1);
            }}
          />
        </button>
        <div className=" bg-slate-200 w-72 h-72 xl:w-112 xl:h-104  lg:w-80 sm:w-96 sm:h-96 overflow-hidden  rounded-md border-2">
          <div className="flex " style={style}>
            {images.current.map((img) => (
              <div
                key={img.id}
                className="sm:mt-6 xl:w-111 w-71 h-71 lg:w-79 sm:w-95 sm:h-95 bg-center bg-contain bg-no-repeat flex-none  "
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <p className="text-center sm:text-xl lg:mt-3 xl:-mt-2">
                  {" "}
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button>
          <GrNext
            className="text-2xl"
            onClick={() => {
              moveSlide(1);
            }}
          />
        </button>
      </div>
      <div className="dots mt-4 flex justify-center ">
        {images.current.map((img) => (
          <div
            key={img.id}
            className={
              img.id === current
                ? " bg-gray-700 rounded-full h-2.5 w-2.5 ml-2"
                : " bg-slate-400 rounded-full h-2.5 w-2.5 ml-2"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
