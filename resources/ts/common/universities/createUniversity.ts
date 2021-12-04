import axios from "axios";
import { University } from "./University";

export interface CreateUniversityData {}

export function createUniversity(data: CreateUniversityData) {
    return axios.post<University>("/api/universities", data);
}
