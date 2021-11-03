import React, { useRef, useState, ChangeEvent } from "react";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            position: "relative",
        },
    })
);

export interface ImageUploadGridProps<T extends { id: string }> {
    images?: T[];
    max?: number;
}

export default function ImageUploadGrid<T extends { id: string }>({
    max,
}: ImageUploadGridProps<T>) {
    const classes = useStyles();

    return <div></div>;
}
