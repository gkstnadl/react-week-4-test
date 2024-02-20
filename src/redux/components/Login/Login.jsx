import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SignupBackgroundStyle,
  SignupBoxStyle,
  LoginLinkStyle,
  SignupBtnStyle,
  SignupFormStyle,
} from "../SignupForm/styles";
import LogoImg from "../../../assets/bts-logo.png";
import { LogoImgStyle } from "../Header/styles";
import { loginUser } from "../../../redux/modules/auth";
import ValidationModal from "../Modal/ValidationModal";
import { openModal, closeModal } from "../../../redux/modules/modal";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux에서 로그인 상태 가져오기
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ id: email, password }))
      .unwrap()
      .then(() => {
        dispatch(
          openModal({
            message: "로그인 성공!",
            showConfirmButton: true,
          })
        );
      })
      .catch((err) => {
        console.log("로그인 실패", err);
        dispatch(
          openModal({
            message: err.message,
            showConfirmButton: true,
          })
        );
      });
  };

  const handleConfirm = () => {
    dispatch(closeModal());
    if (isSuccess) {
      navigate("/");
    }
  };

  return (
    <SignupBackgroundStyle>
      <LogoImgStyle src={LogoImg} alt="bts-logo" />
      <SignupBoxStyle>
        <h2>로그인</h2>
        <SignupFormStyle onSubmit={handleSubmit}>
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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            ></input>
          </div>
          <SignupBtnStyle type="submit">로그인</SignupBtnStyle>
          <span>아이디가 없다면?</span>
          <LoginLinkStyle to="/signup">회원가입</LoginLinkStyle>
        </SignupFormStyle>
        {isSuccess && (
          <ValidationModal
            onConfirm={handleConfirm}
            message={message}
            showConfirmButton={false}
          />
        )}
        {isError && (
          <ValidationModal
            onConfirm={handleConfirm}
            message={message}
            showConfirmButton={false}
          />
        )}
      </SignupBoxStyle>
    </SignupBackgroundStyle>
  );
}

export default Login;
