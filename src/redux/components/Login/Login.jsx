import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../redux/modules/actions";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import useUserForm from "../../redux/modules/useUserForm";

function Login() {
  const email = useUserForm("");
  const password = useUserForm("");
  const dispatch = useDispatch();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log(userCredential);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async (event) => {
    event.preventDefault();
    try {
      await signOut(auth);
      dispatch(clearUser());
      console.log("로그아웃 완료");
    } catch (error) {
      console.error("로그아웃 에러", error);
    }
  };

  return (
    <div>
      <h2>로그인 페이지</h2>
      <form onSubmit={signIn}>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email.value}
            onChange={email.onChange}
            required
          />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password.value}
            onChange={password.onChange}
            required
          />
        </div>
        <Link to="/signup">회원가입하기</Link>
        <button type="submit">로그인</button>
        <button onClick={logOut}>로그아웃</button>
      </form>
    </div>
  );
}

export default Login;
