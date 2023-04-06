import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import prehome from "../images/pre-home.png";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import mainhome2 from "../images/main-home2.png";
import background from "../images/background.jpg";
const Main = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const content = "개발자 김나율입니다 :)";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + content[count]
          : content[0];

        setCount(count + 1);

        if (count >= content.length) {
          setCount(0);
          setTitle("");
        }

        return result;
      });
    }, 250);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <motion.div
      className=" flex flex-col items-center w-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      {/* <div className="w-4/5 h-96 md:h-128 flex flex-col md:flex-row items-center mt-8 rounded-lg"> */}
      <div className="w-full sm:w-11/12 h-100  flex flex-col justify-center items-center mt-2 ">
        <div
          className="img  h-100  w-full bg-center bg-cover bg-no-repeat flex justify-center items-center relative z-1"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="text-xl flex flex-col items-center justify-center  md:text-4xl ">
            <FaQuoteLeft />
            <p className="mb-5 mt-2">안녕하세요.</p>
            <p className="mb-5">하고 싶은게 많아 끝없이 노력하는</p>
            <div className="mb-5 "> {title}</div>
            <FaQuoteRight />
            <p className="mt-5 text-2xl">Welcome to the Nayul's portfolio</p>
          </div>
        </div>
      </div>

      {/* </div> */}
      <div className="w-4/5 h-160 md:h-104  rounded-lg flex flex-col  items-center mt-4 ">
        <p className="text-3xl mt-1 text-slate-600">Projects</p>
        <div className="md:h-64 lg:w-5/6 w-full flex flex-col md:flex-row bg-emerald-600/50 mt-4 justify-center items-center">
          <div className="h-60 w-5/6 md:w-104 bg-white m-4">
            <div
              className="img  h-full w-full bg-center bg-slate-200 bg-contain bg-no-repeat flex justify-center items-center"
              style={{ backgroundImage: `url(${mainhome2})` }}
            ></div>
          </div>
          <div className="h-60 w-5/6 md:w-104 bg-white m-4 ">
            <div
              className="img  h-full w-full bg-center bg-slate-200 bg-contain bg-no-repeat flex justify-center items-center"
              style={{ backgroundImage: `url(${prehome})` }}
            ></div>
          </div>
        </div>
        <button
          className="w-44 h-12 bg-slate-200 mt-4 md:mt-2 hover:bg-slate-400"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/project");
          }}
        >
          More View
        </button>
      </div>
    </motion.div>
  );
};

export default Main;
