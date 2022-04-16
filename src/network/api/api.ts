import { request } from "@/network/axios";
import { getCanvasData } from "./api-params-moudle";
import { GetCityTotal } from "./api-res-model";

/** 这里枚举定义所有接口 */
enum APIS {
  GET_CITY_TOTAL_NUMBER = "/xxxx/xxxx/xxxxx",
}

/** 一个示例 */
export const getCityTotalNumber = (params: getCanvasData) =>
  request.get<GetCityTotal>(APIS.GET_CITY_TOTAL_NUMBER, params);
