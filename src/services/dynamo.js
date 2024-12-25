import apiClient from "./api";

export const getData = async (part, index) => {
    try {
        const response = await apiClient.get(`/item?part=${part}&index=${index}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};


export const postData = async (part, index, pk, value) => {
    try {
        const param = {
            part: part,
            index: index,
            pk: pk,
            value: value
        }
        const response = await apiClient.post('/item', param);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};
