import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Link from "@mui/material/Link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RRLink } from "react-router-dom";

export function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <Box
            display="flex"
            gap={2}
            justifyContent="center"
            py={3}
            sx={{ background: grey["100"] }}
        >
            &copy; {new Date().getFullYear()}{" "}
            {window.university[i18n.language === "zh" ? "name" : "name_en"]}
            <Link component={RRLink} to="/about">
                {t("about")}
            </Link>
            <Link component={RRLink} to="/privacy">
                {t("privacy")}
            </Link>
            <Link component={RRLink} to="/terms">
                {t("terms")}
            </Link>
        </Box>
    );
}
