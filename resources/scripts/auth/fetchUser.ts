import axios from "axios";
import { User } from "../users/User";

export function fetchUser() {
    return axios.get<User>("/api/user");
}
