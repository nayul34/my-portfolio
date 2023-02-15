import styled from "styled-components";
const Header =()=>{
    return(<SWrapper>
        <SHeaderContatiner>
        <span>김나율 포트폴리오</span>
        <div className="category">
        <button>About Me</button>
        <button>Projects</button>
        <button>Skills</button>
        <button>Educations</button>
        <button>Contact</button>
        </div>
       </SHeaderContatiner>
    </SWrapper>)
}
const SWrapper=styled.div`
width:100%;
height:100px;
border-bottom:2px solid grey;
display:flex;
justify-content: center;

`;
const SHeaderContatiner=styled.div`
display:flex;
flex-direction: row;`;
export default Header