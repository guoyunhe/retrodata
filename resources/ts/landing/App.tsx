import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/system/Box";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "../theme";
import { About } from "./about";
import { Footer } from "./footer";
import Home from "./home";
import Navbar from "./navbar";
import { NotFound } from "./not-found";
import { Privacy } from "./privacy";
import { Terms } from "./terms";

export default function App() {
    return (
        <Suspense fallback="Loaidng...">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Navbar />

                        <Box flex={1}>
                            <Routes>
                                <Route path="/about" element={<About />} />
                                <Route path="/privacy" element={<Privacy />} />
                                <Route path="/terms" element={<Terms />} />
                                <Route path="/" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Box>

                        <Footer />
                    </Box>
                </Router>
            </ThemeProvider>
        </Suspense>
    );
}
