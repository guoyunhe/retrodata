import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { updateUser, useAuth } from "../auth";
import { ImageUploadCard, uploadImage } from "../images";
import { User } from "./User";

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
    const { t } = useTranslation();

    return (
        <Container className={classes.root} maxWidth="sm">
            <Typography variant="h1" sx={{ mt: 5 }}>
                {t("settings")}
            </Typography>
            <Typography variant="h2">Avatar</Typography>
            <ImageUploadCard
                image={user?.avatar?.url}
                onChange={(file) => {
                    if (file && user) {
                        uploadImage(file, 300, 300, true).then((res) => {
                            const avatar = res.data;
                            const newUser: User = {
                                ...user,
                                avatar,
                                avatar_id: avatar.id,
                            };
                            updateUser(newUser);
                            setUser(newUser);
                        });
                    }
                }}
            />
            <Typography variant="h2">User Information</Typography>
        </Container>
    );
}
