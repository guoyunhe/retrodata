import React from "react";

export interface ImageUploadGridProps<T extends { id: string }> {
    images?: T[];
    max?: number;
}

export default function ImageUploadGrid<T extends { id: string }>({
    max,
}: ImageUploadGridProps<T>) {
    return <div></div>;
}
