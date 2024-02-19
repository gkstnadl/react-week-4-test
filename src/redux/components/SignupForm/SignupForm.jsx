import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signupUser } from "../../modules/signup";
import {
  SignupBackgroundStyle,
  SignupBoxStyle,
  LoginLinkStyle,
} from "./styles";
import LogoImg from "../../../assets/bts-logo.png";
import { LogoImgStyle } from "../Header/styles";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();

  // Redux에서 회원가입 상태 가져오기
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.signup
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ nickname, id: email, password }));
  };

  return (
    <SignupBackgroundStyle>
      <LogoImgStyle src={LogoImg} alt="bts-logo" />
      <SignupBoxStyle>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          {isError && <p>{message}</p>}
          <div>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임"
              required
            ></input>
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            ></input>
          </div>
          <button type="submit" disabled={isLoading}>
            가입하기
          </button>
          <p>이미 가입한 계정이 있나요?</p>
          <LoginLinkStyle to="/login">로그인</LoginLinkStyle>
          {isSuccess && <p>회원가입 성공! 로그인 페이지로 이동해주세요.</p>}
        </form>
      </SignupBoxStyle>
    </SignupBackgroundStyle>
  );
}

export default SignupForm;
