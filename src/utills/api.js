import axios from "axios";
export const API_URL = "http://192.168.0.107:4000";       //for local
// export const API_URL = "https://node.egmcb.in";        //for live
export const ADMIN_API_URL = "https://admin.egmcb.in";
let api = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

export default api;
