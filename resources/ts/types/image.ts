import { Model } from "./model";
import { User } from "./user";

export interface Image extends Model {
    user_id: number;
    user?: User;
    path: string;
    url: string;
    width: number;
    height: number;
    created_at: string;
    updated_at: string;
}
