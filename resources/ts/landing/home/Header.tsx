import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

export function Header() {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                height: "40vw",
                display: "flex",
                alignItems: "stretch",
            }}
        >
            <Box
                sx={{
                    flex: "1 1 50%",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: blueGrey[50],
                }}
            >
                <Container
                    maxWidth="sm"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                    }}
                >
                    <Typography variant="h2">
                        {t("landing-header-title")}
                    </Typography>
                    <Typography variant="h5">
                        {t("Join the leading reagent management platform now")}
                    </Typography>
                    <Box display="flex" gap={3}>
                        <Button variant="contained" size="large">
                            {t("Researcher")}
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            {t("Supplier")}
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundImage: "url(/img/landing-banner.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    flex: "1 1 50%",
                }}
            />
        </Box>
    );
}
