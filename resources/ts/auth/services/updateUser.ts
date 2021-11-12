import axios from "axios";
import { User } from "../../types/user";

export function updateUser(user: User) {
    return axios.put<User>("/api/user", user);
}
