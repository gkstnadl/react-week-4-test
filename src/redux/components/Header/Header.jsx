import { useNavigate } from "react-router-dom";
import { HeaderStyle, LogoImgStyle, LogoDivStyle } from "./styles";
import LogoImg from "../../../assets/bts-logo.png";

function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <HeaderStyle>
      <LogoDivStyle>
        <LogoImgStyle onClick={goToHome} src={LogoImg} alt="bts-logo" />
      </LogoDivStyle>
    </HeaderStyle>
  );
}

export default Header;
