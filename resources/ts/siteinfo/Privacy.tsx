import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

export function Privacy() {
    const { t } = useTranslation();
    return (
        <Container>
            <Typography variant="h1" sx={{ my: 4 }}>
                {t("Privacy")}
            </Typography>
            <p>TODO</p>
        </Container>
    );
}
