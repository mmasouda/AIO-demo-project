import axios from "axios";

export const axiosReq = axios.create({
    baseURL: "https://bc.game/api/game/home/provider/list",
});
