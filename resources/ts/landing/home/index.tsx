import React from "react";
import { useTranslation } from "react-i18next";
import { Features } from "./Features";
import { Header } from "./Header";

export default function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <Features />
        </div>
    );
}
