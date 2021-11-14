import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    return (
        <label className={classes.root}>
            <SearchIcon sx={{ ml: 1 }} />
            <InputBase placeholder={t("Search")} sx={{ px: 1 }} />
        </label>
    );
}
