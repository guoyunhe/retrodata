import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Laboratory } from "./Laboratory";

export interface LaboratoryCardProps {
    laboratory: Laboratory;
}

export function LaboratoryCard({ laboratory }: LaboratoryCardProps) {
    const { i18n } = useTranslation();
    const name =
        i18n.language === "en" && laboratory.name_en
            ? laboratory.name_en
            : laboratory.name;
    return (
        <Card
            sx={{ display: "flex", height: "150px" }}
            component={Link}
            to={"/laboratory/" + laboratory.id}
            color="primary"
        >
            <CardMedia
                component="img"
                height="150px"
                width="150px"
                image={
                    laboratory.logo?.url ||
                    "/img/raychel-sanner-YP2MNNId-Qs-unsplash.jpg"
                }
                alt={name}
                sx={{
                    flex: "0 0 150px",
                }}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {laboratory.college?.name}
                </Typography>
            </CardContent>
        </Card>
    );
}
