import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { Laboratory } from "./Laboratory";

export interface LaboratoryCardProps {
    laboratory: Laboratory;
}

export function LaboratoryCard({ laboratory }: LaboratoryCardProps) {
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
                alt={laboratory.name}
                sx={{
                    flex: "0 0 150px",
                }}
            />
            <CardContent>
                <Typography variant="h5">{laboratory.name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {laboratory.name_en}
                </Typography>
            </CardContent>
        </Card>
    );
}
