import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { logout } from "../../modules/authSlice";
import { ContainerStyle, MypageBtnStyle, LogoutBtnStyle } from "./styles";

function Layout() {
  const dispatch = useDispatch();
  return (
    <>
      <ContainerStyle>
        <MypageBtnStyle to="/mypage">마이페이지</MypageBtnStyle>
        <LogoutBtnStyle onClick={() => dispatch(logout())}>
          로그아웃
        </LogoutBtnStyle>
      </ContainerStyle>
      <Outlet />
    </>
  );
}

export default Layout;
