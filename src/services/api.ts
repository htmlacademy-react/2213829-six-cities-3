import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {getToken} from './token.ts';
import {StatusCodes} from 'http-status-codes';
import {processErrorHandle} from './process-error-handle.ts';
import { Offer } from '../types/Offer.ts';
import { Cities } from '../const.ts';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  console.log('API created:', api);
  

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        if (shouldDisplayError(error.response)) {
          const detailMessage = error.response.data;
          processErrorHandle(detailMessage.message);
        }
      } else {
        console.error('Network error:', error.message);
        processErrorHandle('Network error, please try again later.');
      }
      throw error;
    }
  );

  return api;
};
