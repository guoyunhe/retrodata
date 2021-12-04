import axios from "axios";
import { User } from "../users/User";

export function login(email: string, password: string, remember: boolean) {
    return axios.post<User>("/login", {
        email,
        password,
        remember,
    });
}
