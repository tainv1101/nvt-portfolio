import axios from "axios"
const BASE_URL = 'https://randomuser.me/api/'

export default class UserService {

  static getUsers(params: { page: number, results: number }) {
    return axios.get(BASE_URL, {params})
  }
}