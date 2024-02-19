import { useNavigate } from "react-router-dom";
import { HeaderStyle, LogoImgStyle, LogoBtn } from "./styles";
import LogoImg from "../../../assets/bts-logo.png";

function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <header>
      <HeaderStyle>
        <LogoBtn onClick={goToHome}>
          <LogoImgStyle src={LogoImg} alt="bts-logo" />
        </LogoBtn>
      </HeaderStyle>
    </header>
  );
}

export default Header;
