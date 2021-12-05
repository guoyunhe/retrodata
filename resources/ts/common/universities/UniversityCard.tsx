import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { TransAttr } from "../locales";
import { University } from "./University";

export interface UniversityCardProps {
    university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
    return (
        <Card
            sx={{ display: "flex", height: "150px" }}
            component={Link}
            to={"/universities/" + university.id}
            color="primary"
        >
            <CardMedia
                component="img"
                height="150px"
                width="150px"
                image={
                    university.logo?.url ||
                    "/img/raychel-sanner-YP2MNNId-Qs-unsplash.jpg"
                }
                alt={university.name}
                sx={{
                    flex: "0 0 150px",
                }}
            />
            <CardContent>
                <Typography variant="h5">{university.name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    <TransAttr data={university} attr="name" />
                </Typography>
            </CardContent>
        </Card>
    );
}
