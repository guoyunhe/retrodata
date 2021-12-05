import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

export function LaboratoryTabs() {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const pathList = pathname.split("/");
    const rootPath = pathList.slice(0, 3).join("/");
    const value = pathname.split("/")[3] || "reagent";

    return (
        <Tabs value={value} aria-label="laboratory nav tabs">
            <Tab
                component={NavLink}
                label={t("reagent")}
                to={rootPath}
                value="reagent"
            />
            <Tab
                component={NavLink}
                label={t("members")}
                to={rootPath + "/members"}
                value="members"
            />
            <Tab
                component={NavLink}
                label={t("settings")}
                to={rootPath + "/settings"}
                value="settings"
            />
        </Tabs>
    );
}
