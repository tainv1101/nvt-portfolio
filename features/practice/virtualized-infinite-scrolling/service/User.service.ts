import APIRequest from "@/lib/axios"
// import axios from "axios"
const BASE_URL = 'https://randomuser.me/api/'

export default class UserService {

  static getUsers(params: { page: number, results: number }) {
    return APIRequest.get(BASE_URL, {params})
  }
}