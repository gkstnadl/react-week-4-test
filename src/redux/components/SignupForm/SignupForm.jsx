import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signupUser } from "../../modules/signup";

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
    dispatch(signupUser({ email, password, nickname }));
  };

  return (
    <div>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit}>
        {isError && <p>{message}</p>}
        <div>
          <label htmlFor="nickname">닉네임 : </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit" disabled={isLoading}>
          가입하기
        </button>
        {isSuccess && <p>회원가입 성공! 로그인 페이지로 이동해주세요.</p>}
      </form>
    </div>
  );
}

export default SignupForm;
