import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";

export function Landing() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
        </div>
    );
}
