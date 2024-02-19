import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signupUser } from "../../modules/signup";
import {
  SignupBackgroundStyle,
  SignupBoxStyle,
  LoginLinkStyle,
  SignupFormStyle,
  SignupBtnStyle,
} from "./styles";
import LogoImg from "../../../assets/bts-logo.png";
import { LogoImgStyle } from "../Header/styles";
import ValidationModal from "../Modal/ValidationModal";
import { openModal, closeModal } from "../../modules/modal";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux에서 회원가입 상태 가져오기
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.signup
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ nickname, id: email, password }));
    dispatch(openModal({ message: "회원가입이 완료되었습니다." }));
  };

  const handleConfirm = () => {
    dispatch(closeModal());
    navigate("/login");
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <SignupBackgroundStyle>
      <LogoImgStyle src={LogoImg} alt="bts-logo" />
      <SignupBoxStyle>
        <h2>회원가입</h2>
        <SignupFormStyle onSubmit={handleSubmit}>
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
          <SignupBtnStyle type="submit" disabled={isLoading}>
            가입하기
          </SignupBtnStyle>
          <span>이미 가입한 계정이 있나요?</span>
          <LoginLinkStyle to="/login">로그인</LoginLinkStyle>
          {isSuccess && (
            <ValidationModal
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
        </SignupFormStyle>
      </SignupBoxStyle>
    </SignupBackgroundStyle>
  );
}

export default SignupForm;
