import { config } from '../config';
import axios, { AxiosError, AxiosResponse } from 'axios';
import store from '../store'


const usersService = {
  Authorization: ()=>({
      Authorization: `Bearer ${store.getState().token}`,
  }),

  url: `${config.baseurl}${config.prefix}/users`,

  getAllUsers(): Promise<IUser[]> {
    return axios
      .get(this.url)
      .then((response: AxiosResponse<IUser[]>) => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        return Promise.reject(error.response?.data.message);
      });
  },

  addUser(user: IUser): Promise<StatusCreateUser> {
    return axios
      .post(this.url, user)
      .then((response: AxiosResponse<StatusCreateUser>) => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        return Promise.reject(error.response?.data);
      });
  },

  removeUser(cpf: string): Promise<StatusCreateUser> {
    return axios
      .delete(`${this.url}/${cpf}`, { data:{}, headers: {...this.Authorization()} })
      .then((response: AxiosResponse<StatusCreateUser>) => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        return Promise.reject(error.response?.data);
      });
  },

  findUser(cpf: string): Promise<any> {
    return axios
      .get(`${this.url}/${cpf}`)
      .then((response: AxiosResponse<any>) => {
        return Promise.resolve(response.data);
      })
      .catch((error: AxiosError) => {
        return Promise.reject(error.response?.data);
      });
  },

};
export default usersService