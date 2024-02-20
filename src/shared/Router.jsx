import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../redux/components/Login/Login";
import SignupForm from "../redux/components/SignupForm/SignupForm";
import FanletterList from "../redux/components/FanletterList/FanletterList";
import Header from "../redux/components/Header/Header";

//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
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
              <FanletterList />
            </>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
