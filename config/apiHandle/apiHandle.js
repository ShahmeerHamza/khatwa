import axios from "axios"
import { save_tokens_constant } from "../../utils/contants"
import AsyncStorage from "@react-native-async-storage/async-storage";





// const baseURL = 'http://192.168.100.5:5000/user'
const baseURL = 'https://reader-intellect-backend-2023.herokuapp.com'


export const apiHandle = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
    
  },

})


axios.defaults.timeout = 15000;

apiHandle.interceptors.request.use(async req => {
  const auth_token = await AsyncStorage.getItem(save_tokens_constant)  || ''
  if (auth_token) {
    req.headers.Authorization = `Bearer ${auth_token}`

  }

  return req

})

