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
  const [id, setId] = useState("");
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
    // 이메일 유효성 검사 (4~10글자)
    if (id.length < 4 || id.length > 10) {
      dispatch(openModal({ message: "이메일은 4~10글자 사이여야 합니다." }));
      return;
    }
    // 비밀번호 유효성 검사 (4~15글자)
    if (password.length < 4 || password.length > 15) {
      dispatch(openModal({ message: "비밀번호는 4~15글자 사이여야 합니다." }));
      return;
    }
    // 닉네임 유효성 검사 (1~10글자)
    if (nickname.length < 1 || nickname.length > 10) {
      dispatch(openModal({ message: "닉네임은 1~10글자 사이여야 합니다." }));
      return;
    }
    dispatch(signupUser({ nickname, id, password }));
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
              placeholder="닉네임 (1~10글자)"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디 (4~10글자)"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 (4~15글자)"
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
