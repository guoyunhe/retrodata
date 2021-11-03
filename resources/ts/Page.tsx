import React, { ReactNode } from "react";

import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            background: theme.palette.background.default,
        },
    })
);

export interface PageProps {
    children: ReactNode;
}

export default function Page({ children }: PageProps) {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
}
