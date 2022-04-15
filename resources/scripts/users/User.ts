import { Model } from "../base";
import { Image } from "../images";

export interface User extends Model {
    name: string;
    name_en: string | null;
    type: string;
    avatar_id: number | null;
    avatar: Image | null;
    email_verified_at: string | null;
}
