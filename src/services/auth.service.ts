import { config } from '../config';
import axios, { AxiosError, AxiosResponse } from 'axios';
const authService = {

  url: `${config.baseurl}${config.prefix}/auth`,

  login(credentials: Credentials): Promise<Token> {
    return axios
      .post(`${this.url}/login`, credentials)
      .then((response: AxiosResponse<Token>) => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        return Promise.reject(error.response?.data);
      });
  },

};
export default authService