import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Link from "@mui/material/Link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RRLink } from "react-router-dom";
import { TransAttr } from "../../common/locales";

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
            <span>
                &copy;&nbsp;{new Date().getFullYear()}&nbsp;
                <TransAttr data={window.university} attr="name" />
            </span>
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
