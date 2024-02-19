import axios from "axios";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입 API
export const register = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};