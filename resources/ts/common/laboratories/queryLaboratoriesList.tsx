import axios from "axios";
import { Laboratory } from "./Laboratory";

export interface QueryLaboratoriesListParams {
    university_id: number;
    college_id?: number;
}

export function queryLaboratoriesList(params: QueryLaboratoriesListParams) {
    return axios.get<Laboratory[]>("/api/laboratories", {
        params,
    });
}
