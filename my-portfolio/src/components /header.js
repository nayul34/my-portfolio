import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-24 flex justify-center sticky top-0 ">
      <div className="flex flex-row justify-between items-end w-4/5  bg-white">
        <span
          className="m-2.5 text-5xl title cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Nayul's
        </span>
        <div className="flex category">
          <button
            className="m-2.5 category-name text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="m-2.5 category-name text-xl"
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            About Me
          </button>
          <button
            className="m-2.5 category-name text-xl"
            onClick={() => {
              navigate("/project");
            }}
          >
            Projects
          </button>
          {/* <button className="m-2.5 category-name">Contact</button> */}
        </div>
        <div className="flex my_record link">
          <a href="https://github.com/nayul34" target="_blank" rel="noreferrer">
            <BsGithub className="m-2.5 cursor-pointer  text-xl" />
          </a>
          <a href="https://velog.io/@dagg762" target="_blank" rel="noreferrer">
            <SiVelog className="m-2.5 cursor-pointer  text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
