import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderStyle,
  LogoImgStyle,
  LogoBtn,
  MypageBtnStyle,
  LogoutBtnStyle,
  HeaderTopBtnStyle,
} from "./styles";
import LogoImg from "../../../assets/bts-logo.png";
import { logout } from "../../modules/auth";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToHome = () => {
    navigate("/");
  };
  const goToMypage = () => {
    navigate("/mypage");
  };

  const handleLogout = () => {
    dispatch(logout());
    // 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    <header>
      <HeaderStyle>
        <HeaderTopBtnStyle>
          <MypageBtnStyle onClick={goToMypage}>마이페이지</MypageBtnStyle>
          <LogoutBtnStyle onClick={handleLogout}>로그아웃</LogoutBtnStyle>
        </HeaderTopBtnStyle>
        <LogoBtn onClick={goToHome}>
          <LogoImgStyle src={LogoImg} alt="bts-logo" />
        </LogoBtn>
      </HeaderStyle>
    </header>
  );
}

export default Header;
