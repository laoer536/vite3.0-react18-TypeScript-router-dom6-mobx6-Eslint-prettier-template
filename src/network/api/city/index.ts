import { request } from '@/network/axios'

import { getCanvasData } from './types.ts'
import { GetCityTotalNumberModel } from './types.ts'

enum APIS {
  GET_CITY_TOTAL_NUMBER = '/xxxx/xxxx/xxxxx',
}

export const getCityTotalNumber = (params: getCanvasData) =>
  request.get<GetCityTotalNumberModel[]>(APIS.GET_CITY_TOTAL_NUMBER, params)
