import { useDispatch } from "react-redux";
import {
  SignupBackgroundStyle,
  SignupBoxStyle,
  LoginLinkStyle,
} from "../SignupForm/styles";
import LogoImg from "../../../assets/bts-logo.png";
import { LogoImgStyle } from "../Header/styles";

function Login() {
  return (
    <SignupBackgroundStyle>
      <LogoImgStyle src={LogoImg} alt="bts-logo" />
      <SignupBoxStyle>
        <h2>로그인</h2>
        <form>
          <div>
            <input
              type="email"
              id="email"
              placeholder="이메일"
              required
            ></input>
          </div>
          <div>
            <input type="password" placeholder="비밀번호" required></input>
          </div>
          <button type="submit">로그인</button>
          <p>아이디가 없다면?</p>
          <LoginLinkStyle to="/signup">회원가입</LoginLinkStyle>
        </form>
      </SignupBoxStyle>
    </SignupBackgroundStyle>
  );
}

export default Login;
