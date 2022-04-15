import axios from "axios";

export function resendEmail() {
    return axios.post("/email/resend");
}
