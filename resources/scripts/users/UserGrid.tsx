import { Box, Theme } from "@mui/material";
import React, { ReactNode } from "react";

export interface UserGridProps {
    children: ReactNode;
}

export default function UserGrid({ children }: UserGridProps) {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(auto-fill, minmax(150px, 1fr))",
                    sm: "repeat(auto-fill, minmax(200px, 1fr))",
                    md: "repeat(auto-fill, minmax(250px, 1fr))",
                },
                gridTemplateRows: "repeat(auto-fill, 1fr)",
                gap: (theme: Theme) => theme.spacing(2) + "px",
                p: 2,
            }}
        >
            {children}
        </Box>
    );
}
