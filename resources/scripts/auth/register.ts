import axios from "axios";
import { User } from "../users/User";

export function register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
    type: string
) {
    return axios.post<User>("/register", {
        name,
        email,
        password,
        password_confirmation,
        type,
    });
}
