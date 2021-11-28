import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import langs from "../locales/langs.json";

export function LangMenu() {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const currentLang = langs.find((lang) => i18n.language === lang.value);

    return (
        <>
            <Button
                id="lang-menu-button"
                aria-controls="lang-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                startIcon={<LanguageIcon />}
                color="inherit"
            >
                {currentLang?.label}
            </Button>
            <Menu
                id="lang-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                    setAnchorEl(null);
                }}
                MenuListProps={{
                    "aria-labelledby": "lang-menu-button",
                }}
            >
                {langs.map((lang) => (
                    <MenuItem
                        key={lang.value}
                        onClick={() => {
                            localStorage.setItem("language", lang.value);
                            i18n.changeLanguage(lang.value);
                            axios.defaults.headers.common["X-Language"] =
                                lang.value;
                            setAnchorEl(null);
                        }}
                        selected={lang.value === currentLang?.value}
                    >
                        {lang.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
