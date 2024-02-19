import axios from "axios";

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