import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function NotFound() {
    const { t } = useTranslation();

    return (
        <div>
            <Container maxWidth="sm">
                <div>
                    <Typography variant="h1">Not Found</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                        startIcon={<ArrowBackIcon />}
                    >
                        {t("Go back to home")}
                    </Button>
                </div>
            </Container>
        </div>
    );
}
