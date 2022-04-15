import Tab from "@mui/material/Tab";
import React from "react";
import { NavLink } from "react-router-dom";

export function LinkTab(props: any) {
    return <Tab component={NavLink} {...props} />;
}
