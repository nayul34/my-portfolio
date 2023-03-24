import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mainhome from "../components /Project/images/main-home.png";
import prehome from "../components /Project/images/pre-home.png";
import { motion } from "framer-motion";
const Main = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const content =
    "안녕하세요.\n하고 싶은게 많은 프론트엔드 개발자 김나율입니다.";

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
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <motion.div
      className=" flex flex-col items-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-4/5 h-128 flex mt-8 ">
        <div className=" h-full w-1/2 mr-14 bg-emerald-600/50 flex flex-col justify-center items-center">
          <div
            className="img  h-full w-full bg-center bg-contain bg-no-repeat flex justify-center items-center"
            style={{ backgroundImage: `url(${mainhome})` }}
          ></div>
        </div>
        <div className="w-1/2 h-full bg-zinc-200 flex justify-center items-center">
          <p className="animate-typingCursor text-emerald-600/50 text-4xl inline ">
            {title}
          </p>
        </div>
      </div>
      <div className="w-4/5 h-104 bg-zinc-200 flex flex-col items-center mt-4 ">
        <p className="text-3xl mt-4">Projects</p>
        <div className="h-64 w-full flex justify-center">
          <div className="h-60 w-104 bg-white m-4">
            <div
              className="img  h-full w-full bg-center bg-contain bg-no-repeat flex justify-center items-center"
              style={{ backgroundImage: `url(${mainhome})` }}
            ></div>
          </div>
          <div className="h-60 w-104 bg-white m-4">
            <div
              className="img  h-full w-full bg-center bg-contain bg-no-repeat flex justify-center items-center"
              style={{ backgroundImage: `url(${prehome})` }}
            ></div>
          </div>
        </div>
        <button
          className="w-44 h-12 bg-slate-600 mt-8 hover:bg-slate-200"
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
