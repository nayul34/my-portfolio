import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-24 flex justify-center ">
      <div className="flex flex-row justify-between items-end w-4/5">
        <span className="m-2.5 text-3xl title">Nayul's</span>
        <div className="flex category">
          <button
            className="m-2.5 category-name"
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            About Me
          </button>
          <button
            className="m-2.5 category-name"
            onClick={() => {
              navigate("/project");
            }}
          >
            Projects
          </button>
          {/* <button className="m-2.5 category-name">Contact</button> */}
        </div>
        <div className="flex my_record link">
          <BsGithub className="m-2.5 cursor-pointer" />
          <SiVelog className="m-2.5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
