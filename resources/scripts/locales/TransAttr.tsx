import React from "react";
import { useTranslation } from "react-i18next";

export interface TranslateAttributeProps {
    data: any;
    attr: string;
}

export function TransAttr({ data, attr }: TranslateAttributeProps) {
    const { language } = useTranslation().i18n;

    const translated = data[language === "zh" ? attr : attr + "_" + language];
    const fallback = data[attr + "_en"];

    if (translated) {
        return <span>{translated}</span>;
    } else {
        return <span>{fallback}</span>;
    }
}
