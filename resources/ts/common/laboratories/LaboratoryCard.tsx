import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { TransAttr } from "../locales";
import { Laboratory } from "./Laboratory";

export interface LaboratoryCardProps {
    laboratory: Laboratory;
}

export function LaboratoryCard({ laboratory }: LaboratoryCardProps) {
    return (
        <Card
            sx={{ display: "flex", height: "150px" }}
            component={Link}
            to={"/laboratories/" + laboratory.id}
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
                alt="laboratory logo"
                sx={{
                    flex: "0 0 150px",
                }}
            />
            <CardContent>
                <Typography variant="h5">
                    <TransAttr data={laboratory} attr="name" />
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    <TransAttr data={laboratory.college} attr="name" />
                </Typography>
            </CardContent>
        </Card>
    );
}
