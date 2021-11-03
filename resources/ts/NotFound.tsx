import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Banner from "./images/Banner";

export default function NotFound() {
    return (
        <div>
            <Banner src="https://source.unsplash.com/_Q95YSuAAno/1920x1080" />
            <Container maxWidth="sm">
                <div>
                    <Typography variant="h1">Not Found</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                        startIcon={<ArrowBackIcon />}
                    >
                        Back Home
                    </Button>
                </div>
            </Container>
        </div>
    );
}
