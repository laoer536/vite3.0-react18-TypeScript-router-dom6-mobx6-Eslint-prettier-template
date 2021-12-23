import ApiRequest from "@/network/request";
import { GetToken } from "@/network/api-moudle";

export const getToken = (params: GetToken) =>
  ApiRequest.get("/cmii/api/getToken", params);
