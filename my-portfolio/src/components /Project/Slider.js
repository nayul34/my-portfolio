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
      <div className="picture flex ">
        <button>
          <GrPrevious
            className="text-lg"
            onClick={() => {
              moveSlide(-1);
            }}
          />
        </button>
        <div className="window bg-slate-200 w-104 h-84 overflow-hidden  rounded-md border-2">
          <div className="flexbox flex " style={style}>
            {images.current.map((img) => (
              <div
                key={img.id}
                className="img  w-104 h-96 bg-center bg-contain bg-no-repeat flex-none justify-center "
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <p className="text-center text-xl mt-4"> {img.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button>
          <GrNext
            className="text-lg"
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
