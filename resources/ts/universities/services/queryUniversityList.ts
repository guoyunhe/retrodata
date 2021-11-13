import axios from "axios";
import { University } from "../types/University";

export function queryUniversityList() {
    return axios.get<University[]>("/api/universities");
}
