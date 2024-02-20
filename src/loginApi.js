import axios from "axios";

// 환경 변수로 설정시 오류가 발생
const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입 API
export const register = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.log(error.response);
        throw error.response.data;
    }
};

// 로그인 API
export const login = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        console.error(error.response);
        throw error.response.data;
    }
};

// 회원정보 확인 API
export const checkUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await axios.get(`${BASE_URL}/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.response);
        throw error.response.data;
    }
};


// 프로필 변경 API
export const changeProfile = async (userData) => {
    const { imgFile, nickname } = userData;
    const formData = new FormData();
    // avatar와 nickname 중 하나 또는 모두 변경 가능
    formData.append("avatar", imgFile);
    formData.append("nickname", nickname);
    const accessToken = localStorage.getItem('accessToken');
    // 요청 시 Content-Type에 유의
    const response = await axios.patch(`${BASE_URL}/profile`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
        },
    }
    );
    return response.data;
}
