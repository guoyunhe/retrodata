import Grid from "@mui/material/Grid";
import React from "react";
import { Laboratory } from "./Laboratory";
import { LaboratoryCard } from "./LaboratoryCard";

export interface LaboratoriesListProps {
    laboratories: Laboratory[];
}

export function LaboratoriesList({ laboratories }: LaboratoriesListProps) {
    return (
        <Grid container spacing={4}>
            {laboratories.map((laboratory) => (
                <Grid key={laboratory.id} item xs={12} sm={6} md={4} lg={3}>
                    <LaboratoryCard laboratory={laboratory} />
                </Grid>
            ))}
        </Grid>
    );
}
