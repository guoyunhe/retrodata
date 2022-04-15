import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import React, { ReactNode } from "react";

export interface AuthLayoutProps {
    children?: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <Box
            sx={{
                backgroundImage:
                    "url(/img/raychel-sanner-YP2MNNId-Qs-unsplash.jpg)",
                backgroundSize: "cover",
                height: "calc(100vh - 48px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container maxWidth="xs">
                <Card
                    sx={{
                        backgroundColor: "#ffffff88",
                        backdropFilter: "blur(20px)",
                    }}
                >
                    <CardContent>{children}</CardContent>
                </Card>
            </Container>
        </Box>
    );
}
