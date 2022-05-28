import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Box, Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RRLink } from "react-router-dom";
import AuthMenu from "../auth/AuthMenu";
import { LangMenu } from "./LangMenu";
import { SearchBox } from "./SearchBox";

export interface NavbarProps {}

export function Navbar({}: NavbarProps) {
    const { t, i18n } = useTranslation();
    return (
        <AppBar position="sticky" color="default">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        marginRight: (theme: Theme) => theme.spacing(2),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Link
                    color="inherit"
                    component={RRLink}
                    to="/"
                    variant="h6"
                    noWrap
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                    }}
                >
                    {(window as any).university?.[
                        i18n.language === "zh" ? "name" : "name_en"
                    ] || window.appName}
                </Link>
                <SearchBox />
                <div
                    style={{
                        flexGrow: 1,
                    }}
                />
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                        },
                    }}
                >
                    <LangMenu />
                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                    <AuthMenu />
                </Box>
                <Box
                    sx={{
                        display: {
                            xs: "flex",
                            md: "none",
                        },
                    }}
                >
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
