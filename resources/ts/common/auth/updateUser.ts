import axios from "axios";
import { User } from "../users/User";

export function updateUser(user: User) {
    return axios.put<User>("/api/user", user);
}
