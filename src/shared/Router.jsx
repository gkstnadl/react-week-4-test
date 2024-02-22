import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../redux/components/Login/Login";
import SignupForm from "../redux/components/SignupForm/SignupForm";
import FanletterList from "../redux/components/FanletterList/FanletterList";

import Error from "../redux/components/Common/Error";
import Mypage from "../pages/Mypage";
import Layout from "../redux/components/Common/Layout";
import { useSelector } from "react-redux";

const Router = () => {
  const { isSuccess, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {isSuccess ? (
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/:memberName" element={<FanletterList />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/error" element={<Error />} />
            {/* <Route path="*" element={<Navigate replace to="/login" />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
