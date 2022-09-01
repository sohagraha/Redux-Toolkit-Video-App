import axiosInstance from "../../utils/axios";

export const getVideos = async (tags, search, author) => {
    let queryString = '';
    if (tags.length > 0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join('&');
    }
    if (search) {
        queryString += `&q=${search}`;
    }
    if (author) {
        queryString += `&author=${author}`;
    }
    const response = await axiosInstance.get(`/videos?${queryString}`);
    return response.data;
}