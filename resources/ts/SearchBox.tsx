import React from "react";

import { makeStyles, createStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            display: "flex",
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "#0000000F",
            "&:hover": {
                backgroundColor: "#0000001F",
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
    })
);

export default function SearchBox() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.icon}>
                <SearchIcon />
            </div>
            <InputBase placeholder="Search" sx={{ pl: 4, pr: 1 }} />
        </div>
    );
}
