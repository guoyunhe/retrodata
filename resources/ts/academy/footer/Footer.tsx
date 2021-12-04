import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Link from "@mui/material/Link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RRLink } from "react-router-dom";

export function Footer() {
    const { t } = useTranslation();
    return (
        <Box
            display="flex"
            gap={2}
            justifyContent="center"
            py={3}
            sx={{ background: grey["100"] }}
        >
            &copy; {new Date().getFullYear()} {window.university.name}
            <Link component={RRLink} to="/about">
                {t("About")}
            </Link>
            <Link component={RRLink} to="/privacy">
                {t("Privacy")}
            </Link>
            <Link component={RRLink} to="/terms">
                {t("Terms")}
            </Link>
        </Box>
    );
}
