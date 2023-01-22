import axios from "axios"; 

const BASEURL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: BASEURL,
    headers: { "Content-Type": "application/json" },
});

const getChampionData = async () => {
    try {
        const response = await axiosInstance.get(BASEURL);
        if (response) {
            return response;
        }
    } catch (err) {
        return err;
    }
}

export { getChampionData };