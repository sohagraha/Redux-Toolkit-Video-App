import axiosInstance from "../../utils/axios";

export const getRelatedVideos = async (url) => {
    const response = await axiosInstance.get(`/videos/?${url}`);
    return response.data;
}