import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Login from "../redux/components/Login/Login";
import SignUp from "../redux/components/SignUp/SignUp";
import FanLetterList from "../redux/components/FanLetterList";
import Header from "../redux/components/Header/Header";

//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Header />
              <Detail />
            </>
          }
        />
        <Route
          path="/:memberName"
          element={
            <>
              <Header />
              <FanLetterList />
            </>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
