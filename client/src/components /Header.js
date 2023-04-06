import { useNavigate } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" sticky top-0   z-50">
      <div className="w-full  bg-white flex justify-center ">
        <div className="md:w-5/6 w-11/12 h-16 justify-between flex  items-center ">
          <p
            className=" md:text-4xl text-2xl title cursor-pointer text-slate-600"
            onClick={() => {
              navigate("/");
            }}
          >
            Nayul's Portfolio
          </p>

          {open === true ? (
            <AiOutlineClose
              className="md:hidden text-3xl cursor-pointer text-slate-600"
              onClick={onClose}
            />
          ) : (
            <GoThreeBars
              className="md:hidden text-3xl cursor-pointer text-slate-600"
              onClick={onOpen}
            />
          )}
          <div className=" category  mt-2 w-1/2 justify-end hidden md:flex">
            <button
              className="m-2.5  category-name text-2xl text-slate-600 hover:text-slate-400"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/");
              }}
            >
              Home
            </button>
            <button
              className="m-2.5 category-name text-2xl text-slate-600 hover:text-slate-400"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/project");
              }}
            >
              Projects
            </button>
            <button
              className="m-2.5 category-name text-2xl text-slate-600 hover:text-slate-400"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/aboutme");
              }}
            >
              About me
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="w-full flex h-20 flex-col text-center bg-slate-100 z-20 cursor-pointer md:hidden">
          <div
            className="w-full h-1/3 border-b-[1px] border-slate-200 hover:bg-slate-200 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
              setOpen(false);
            }}
          >
            HOME
          </div>
          <div
            className="w-full h-1/3 border-b-[1px] border-slate-200 hover:bg-slate-200 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/project");
              setOpen(false);
            }}
          >
            PROJECTS
          </div>
          <div
            className="w-full h-1/3 border-b-[1px] border-slate-200 hover:bg-slate-200 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/aboutme");
              setOpen(false);
            }}
          >
            ABOUT ME
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
