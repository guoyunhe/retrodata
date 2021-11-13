import React from "react";
import { Link as RRLink } from "react-router-dom";

import { makeStyles, createStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";
import SearchBox from "./SearchBox";
import AuthMenu from "./auth/AuthMenu";

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

export default function Navbar({}: NavbarProps) {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="sticky" color="transparent">
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
                    {process.env.MIX_APP_NAME}
                </Link>
                <SearchBox />
                <div className={classes.sectionDesktop}>
                    <Button color="inherit" component={RRLink} to="/labs">
                        Labs
                    </Button>
                    <Button color="inherit" component={RRLink} to="/about">
                        About
                    </Button>
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
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
