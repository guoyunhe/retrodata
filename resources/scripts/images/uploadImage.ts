import axios from "axios";
import { Image } from "./Image";

export function uploadImage(
    image: File,
    width?: number,
    height?: number,
    cropped?: boolean
) {
    const data = new FormData();
    data.append("image", image);
    if (width && width >= 0 && height && height >= 0) {
        data.append("width", width.toString());
        data.append("height", height.toString());
        if (cropped) {
            data.append("cropped", "1");
        }
    }
    return axios.post<Image>("/api/images", data);
}
