import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      headers?: AxiosRequestConfig["headers"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const config: AxiosRequestConfig = {
        url: baseUrl + url,
        method: method,
        data: data,
        params: params,
      };

      /**
       *  modified the regex so that it add x-header requests
       * to baseurls with hyphen in between like servce-store and without hyphens*/
      const regex = new RegExp(`\\/\\w+\\-\\w+\\/`);
      const regex2 = new RegExp(`\\/\\w+\\/`);
      const applicationMatch = window.location.href.match(regex)
        ? window.location.href.match(regex)
        : window.location.href.match(regex2);
    

      const result = await axios(config);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
