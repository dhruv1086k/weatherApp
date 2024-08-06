import styled from "styled-components";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Logo() {
  return (
    <>
      <LogoBox>
        <WbSunnyIcon className="WbSunnyIcon" />
      </LogoBox>
    </>
  );
}

let LogoBox = styled.div`
  padding: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(62, 62, 62, 0.8);
  box-shadow: 0px 0px 10px #161616;
  border-radius: 10px;
  .WbSunnyIcon {
    color: #fff;
    font-size: 1.2rem;
  }
`;
