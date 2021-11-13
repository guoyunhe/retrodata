import React from "react";

import { makeStyles, createStyles } from "@mui/styles";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useAuth } from "../auth/AuthContext";
import ImageUploadCard from "../images/ImageUploadCard";
import ImageUploadGrid from "../images/ImageUploadGrid";
import { upload } from "../images/service";
import { User } from "../types/user";

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
            <Typography variant="h1" sx={{ mt: 5 }}>
                Settings
            </Typography>
            <Typography variant="h2">Avatar</Typography>
            <ImageUploadCard
                image={user?.avatar?.url}
                onChange={(file) => {
                    if (file && user) {
                        upload(file, 300, 300, true).then((res) => {
                            const avatar = res.data;
                            const newUser: User = {
                                ...user,
                                avatar,
                                avatar_id: avatar.id,
                            };
                            setUser(newUser);
                        });
                    }
                }}
            />
            <ImageUploadGrid />
            <Typography variant="h2">User Information</Typography>
        </Container>
    );
}
