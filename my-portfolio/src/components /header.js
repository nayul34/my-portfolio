import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-32 flex flex-col items-center sticky top-0  bg-slate-100  z-50">
      <p
        className=" text-4xl pt-8 title cursor-pointer text-slate-600"
        onClick={() => {
          navigate("/");
        }}
      >
        Nayul's Portfolio
      </p>

      <div className="flex category  mt-2 w-1/2 justify-around">
        <button
          className="m-2.5 category-name text-2xl text-slate-600 hover:text-slate-400"
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
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
