import axios from "axios";
import { userService } from "../shared/auth/user-services";

export const axiosInstance = axios.create(
  {
  baseURL: "https://localhost:5001",
  headers: {
    Authorization: `Bearer ${userService.token}`,
  },
  
});
