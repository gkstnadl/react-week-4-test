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
import { __login } from "../../modules/authSlice";
import ValidationModal from "../Modal/ValidationModal";
import { openModal, closeModal } from "../../../redux/modules/modal";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux에서 로그인 상태 가져오기
  const { isLogin, isError, message } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      dispatch(__login({ id, password }));
      navigate("/");
    }
  };

  const handleConfirm = () => {
    dispatch(closeModal());
    if (isLogin) {
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
              type="id"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디"
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
        {isLogin && (
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
