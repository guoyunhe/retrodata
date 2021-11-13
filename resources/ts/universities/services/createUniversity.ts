import axios from "axios";
import { University } from "../types/University";

export interface CreateUniversityData {}

export function createUniversity(data: CreateUniversityData) {
    return axios.post<University>("/api/universities", data);
}
