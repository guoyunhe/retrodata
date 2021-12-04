import { Image } from "../../admin/types/image";
import { Model } from "../../admin/types/model";

export interface University extends Model {
    slug: string;
    name: string;
    name_en?: string | null;
    logo: Image | null;
    logo_id: number | null;
    contact_name: string | null;
    contact_email: string | null;
    contact_phone: string | null;
}

interface Window {
    university: University;
}
