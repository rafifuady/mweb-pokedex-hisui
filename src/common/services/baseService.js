import Axios from "axios";

export class baseService {
  #baseURL = process.env.REACT_APP_API_URL;
  constructor(baseURL) {
    this.#baseURL = typeof baseURL === "undefined" ? this.#baseURL : baseURL;
  }

  getHeader(useAuth) {
    const AUTH_TOKEN = JSON.parse(localStorage.getItem("nekot_htua"));
    let headers = {};
    headers = {
      ...headers,
      ...{
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    if (AUTH_TOKEN && useAuth) {
      headers = { ...headers, ...{ Authorization: "Bearer " + AUTH_TOKEN } };
    }

    return headers;
  }

  async baseHTTP(url, method, body, useAuth) {
    let response = {
      isError: false,
      message: "",
      data: null,
    };
    try {
      if (method === "GET" || method === "DELETE") {
        response.data = await (
          await Axios({
            method: method,
            url: this.#baseURL + url,
            headers: this.getHeader(useAuth),
          })
        ).data;
      } else {
        response.data = await (
          await Axios({
            method: method,
            url: this.#baseURL + url,
            headers: this.getHeader(useAuth),
            data: body,
          })
        ).data;
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("nekot_htua");
      }
      response = {
        isError: true,
        error: error?.response?.data,
        message: error?.response?.data?.message,
      };
    }
    return response;
  }

  baseGET(url, useAuth) {
    return this.baseHTTP(url, "GET", {}, useAuth);
  }

  basePOST(url, body, useAuth) {
    return this.baseHTTP(url, "POST", body, useAuth);
  }

  baseDELETE(url, useAuth) {
    return this.baseHTTP(url, "DELETE", {}, useAuth);
  }

  basePUT(url, body, useAuth) {
    return this.baseHTTP(url, "PUT", body, useAuth);
  }

  async baseHTTPImage(url, useAuth) {
    let response = {
      isError: false,
      message: "",
      data: null,
    };
    try {
      response.data = await (
        await Axios({
          method: "GET",
          url: this.#baseURL + url,
          responseType: "blob",
          headers: this.getHeader(useAuth),
        })
      ).data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("nekot_htua");
        localStorage.removeItem("lastLogin");
        localStorage.removeItem("role");
      }
      response = {
        isError: true,
        error: error?.response?.data,
        message: error?.response?.data?.message,
      };
    }
    return response;
  }
}
