
import apiClient from "./api";

// DynamoDB에서 특정 사용자 데이터를 가져오는 함수
export const getData = async (part,index) => {
    try {
        const response = await apiClient.get(`/item?part=${part}&index=${index}`); // GET 요청
        return response.data; // API 응답 데이터 반환
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};
