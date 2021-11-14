import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavigationItem } from "./types/navigation";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        placeholder: {
            opacity: 0,
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        root: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        navbar: {
            backdropFilter: "blur(32px)",
            backgroundColor: "#FFFFFF88",
        },
    })
);

export interface BottomNavbarProps {
    elevation?: number;
    items?: NavigationItem[];
}

export default function BottomNavbar({
    items = [],
    elevation = 3,
}: BottomNavbarProps) {
    const classes = useStyles();
    const location = useLocation();
    const show = !!items.find((item) => item.href === location.pathname);
    return (
        <>
            <Slide direction="up" in={show}>
                <Box className={classes.root} boxShadow={elevation}>
                    <BottomNavigation
                        className={classes.navbar}
                        showLabels
                        value={location.pathname}
                    >
                        {items.map((item) => (
                            <BottomNavigationAction
                                key={item.href}
                                label={item.text}
                                value={item.href}
                                icon={item.icon}
                                component={NavLink}
                                exact
                                to={item.href}
                            />
                        ))}
                    </BottomNavigation>
                </Box>
            </Slide>
        </>
    );
}
