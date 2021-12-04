import { Model } from "../base";
import { Image } from "../images";
import { University } from "../universities";

export interface College extends Model {
    name: string;
    name_en: string | null;
    slug: string;
    logo_id: number | null;
    logo?: Image | null;
    university_id: number;
    university?: University;
}
