import React from "react";

import { makeStyles, createStyles } from "@mui/styles";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useAuth } from "../auth/AuthContext";
import ImageUploadCard from "../images/ImageUploadCard";
import ImageUploadGrid from "../images/ImageUploadGrid";
import { upload } from "../images/service";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(6),
        },
    })
);

export default function Settings() {
    const classes = useStyles();
    const { user, setUser } = useAuth();

    return (
        <Container className={classes.root} maxWidth="sm">
            <Typography variant="h1">Settings</Typography>
            <Typography variant="h2">Images</Typography>
            <ImageUploadCard
                onChange={(file) => {
                    if (file) {
                        upload(file);
                    }
                }}
            />
            <ImageUploadGrid />
        </Container>
    );
}
