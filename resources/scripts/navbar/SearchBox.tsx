import SearchIcon from "@mui/icons-material/Search";
import { Box, Theme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React from "react";
import { useTranslation } from "react-i18next";

export function SearchBox() {
    const { t } = useTranslation();
    return (
        <Box
            component="label"
            sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                borderRadius: (theme: Theme) => theme.shape.borderRadius,
                backgroundColor: "#0000000F",
                "&:hover": {
                    backgroundColor: "#0000001F",
                },
                mr: 2,
                ml: { xs: 0, sm: 3 },
                width: { sm: "auto" },
            }}
        >
            <SearchIcon sx={{ ml: 1 }} />
            <InputBase placeholder={t("search")} sx={{ px: 1 }} />
        </Box>
    );
}
