import React from "react";

import { makeStyles, createStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "#0000000F",
            "&:hover": {
                backgroundColor: "#0000001F",
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
            },
        },
    })
);

export default function SearchBox() {
    const classes = useStyles();
    return (
        <label className={classes.root}>
            <SearchIcon sx={{ ml: 1 }} />
            <InputBase placeholder="Search" sx={{ px: 1 }} />
        </label>
    );
}
