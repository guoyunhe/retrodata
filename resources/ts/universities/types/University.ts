import { Image } from "../../types/image";
import { Model } from "../../types/model";

export interface University extends Model {
    slug: string;
    name: string;
    logo: Image | null;
    logo_id: number | null;
    contact_name: string | null;
    contact_email: string | null;
    contact_phone: string | null;
}
