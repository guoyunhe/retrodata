import axios from "axios";
import { User } from "../../types/user";

export function fetchUser() {
    return axios.get<User>("/api/user");
}
