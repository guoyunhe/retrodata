import axios from "axios";
import { Laboratory } from "./Laboratory";

export function fetchLaboratory(id: number | string) {
    return axios.get<Laboratory>("/api/laboratories/" + id);
}
