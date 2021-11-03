import React from "react";

import { makeStyles, createStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "#00000008",
            "&:hover": {
                backgroundColor: "#000000F0",
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
            },
        },
        icon: {
            padding: theme.spacing(0, 1),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from icon
            paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
    })
);

export default function SearchBox() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.icon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    );
}
