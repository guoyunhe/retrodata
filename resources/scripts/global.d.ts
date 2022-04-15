import { University } from "./common/universities";

export declare global {
    interface Window {
        appName: string;
        appUrl: string;
        university: University;
    }
}
