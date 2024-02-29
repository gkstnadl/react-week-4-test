import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "./redux/modules/authSlice";
// import store from "./redux/config/configStore";

export const authApi = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
    headers: {
        "Content-Type": "application/json",
    },
});
export const jsonApi = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
});

authApi.interceptors.request.use(
    (config) => {
        // 헤더에 토큰 넣기
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

authApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        toast.error(err.response.data.message);
        if (
            err.response.data.message ===
            "토큰이 만료되었습니다. 다시 로그인 해주세요."
        ) {
            // 로그아웃처리 스토어 오류나서 실패
            return;
        }
        return Promise.reject(err);
    }
);

jsonApi.interceptors.request.use(
    async (config) => {
        const { data } = await authApi.get("/fanletters");
        if (data.success) return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
