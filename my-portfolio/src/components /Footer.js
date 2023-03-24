import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
const Footer = () => {
  return (
    <div className="h-24 text-slate-600 w-full bg-slate-200/25 flex flex-col justify-center items-center relative translate-y-full">
      <div className="flex my_record link ">
        <a href="https://github.com/nayul34" target="_blank" rel="noreferrer">
          <BsGithub className="m-2.5 cursor-pointer  text-2xl" />
        </a>
        <a href="https://velog.io/@dagg762" target="_blank" rel="noreferrer">
          <SiVelog className="m-2.5 cursor-pointer  text-2xl" />
        </a>
      </div>
      <p>nayul's portfolio</p>
    </div>
  );
};
export default Footer;
