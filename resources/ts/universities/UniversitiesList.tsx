import Grid from "@mui/material/Grid";
import React from "react";
import { University } from "./types/University";
import { UniversityCard } from "./UniversityCard";

export interface UniversitiesListProps {
    universities: University[];
}

export function UniversitiesList({ universities }: UniversitiesListProps) {
    return (
        <Grid container spacing={4}>
            {universities.map((university) => (
                <Grid key={university.id} item xs={12} sm={6} md={4} lg={3}>
                    <UniversityCard university={university} />
                </Grid>
            ))}
        </Grid>
    );
}
