import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
const Header = () => {
  return (
    <SWrapper>
      <SHeaderContatiner>
        <span className="title">Nayul's</span>
        <div className="category">
          <button className="category name">About Me</button>
          <button className="category name">Projects</button>
          <button className="category name">Contact</button>
        </div>
        <div className="my_record link">
          <BsGithub />
        </div>
      </SHeaderContatiner>
    </SWrapper>
  );
};
const SWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid grey;
  display: flex;
  justify-content: center;
`;
const SHeaderContatiner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  .title {
    font-size: 2rem;
  }
  .category {
    display: flex;
    .name {
      background-color: white;
      border: none;
      font-size: 20px;
      cursor: pointer;
      margin: 0px 10px;
    }
  }
  .link {
    cursor: pointer;
  }
`;
export default Header;
