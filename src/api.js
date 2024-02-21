import axios from "axios";
// import store from "./redux/config/configStore";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

// 요청 인터셉터
api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 스토어와 상호 의존성이 있어서 주석처리함
// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         const { status } = error.response;
//         if (status === 401) {
//             store.dispatch(logout());
//         }
//         return Promise.reject(error);
//     }
// );

export default api;