import axios from "axios";

export const API = axios.create({
  baseURL: "http://back.crm.saidoff.uz/api/v1/",
  timeout: 3000,
});
