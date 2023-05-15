import Enviroment from '@/lib/config/Enviroment';
import axios from 'axios';
const AxiosInstance = axios.create({
  baseURL: Enviroment.baseUrl,
  timeout: 4000,
});

export default AxiosInstance;
