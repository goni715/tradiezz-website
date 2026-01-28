import { BASE_URL } from "@/constant/global.constant";
import axios from "axios";

axios.defaults.baseURL=BASE_URL;

const customAxios = axios;
export default customAxios;