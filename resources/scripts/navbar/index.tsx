import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RRLink } from "react-router-dom";
import AuthMenu from "../auth/AuthMenu";
import { LangMenu } from "./LangMenu";
import { SearchBox } from "./SearchBox";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {},
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex",
            },
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
    })
);

export interface NavbarProps {}

export function Navbar({}: NavbarProps) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    return (
        <AppBar className={classes.root} position="sticky" color="default">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Link
                    color="inherit"
                    component={RRLink}
                    to="/"
                    className={classes.title}
                    variant="h6"
                    noWrap
                >
                    {(window as any).university?.[
                        i18n.language === "zh" ? "name" : "name_en"
                    ] || window.appName}
                </Link>
                <SearchBox />
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <LangMenu />
                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                    <AuthMenu />
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
