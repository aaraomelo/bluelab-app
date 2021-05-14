import { config } from '../config';
import axios, { AxiosError, AxiosResponse } from 'axios';
const usersService =
{
  url: `${config.baseurl}${config.prefix}/users`,

  getAllUsers(): Promise<IUser[]> {
    return axios
      .get(this.url)
      .then((response: AxiosResponse<IUser[]>) => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        return Promise.reject(error.response?.data);
      });
  },
};
export default usersService