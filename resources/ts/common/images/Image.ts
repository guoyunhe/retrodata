import { Model } from "../base";
import { User } from "../users/User";

export interface Image extends Model {
    user_id: number;
    user?: User | null;
    path: string;
    url: string;
    width: number;
    height: number;
}
