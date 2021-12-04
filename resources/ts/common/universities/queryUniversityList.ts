import axios from "axios";
import { University } from "./University";

export function queryUniversityList() {
    return axios.get<University[]>("/api/universities");
}
