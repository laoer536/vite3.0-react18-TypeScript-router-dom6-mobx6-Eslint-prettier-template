import ApiRequest from "@/network/request";
import { getCanvasData } from "@/network/api-params-moudle";
import { GetCityTotal } from "@/network/api-res-model";

/** 这里枚举定义所有接口 */
enum APIS {
  GET_CITY_TOTAL_NUMBER = "/xxxx/xxxx/xxxxxxx",
}

/** 一个示例 */
export const getCityTotalNumber = (params: getCanvasData) =>
  ApiRequest.get<GetCityTotal>(APIS.GET_CITY_TOTAL_NUMBER, params);
