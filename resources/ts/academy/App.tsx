import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/system/Box";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "../common/auth";
import theme from "../theme";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import { Dashboard } from "./dashboard";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar";
import { NotFound } from "./not-found";
import Settings from "./users/Settings";

export function App() {
    return (
        <AuthProvider>
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
                                <Route
                                    path="/"
                                    element={
                                        <RequireAuth>
                                            <Dashboard />
                                        </RequireAuth>
                                    }
                                />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                                <Route
                                    path="/email/verify"
                                    element={
                                        <RequireAuth>
                                            <VerifyEmail />
                                        </RequireAuth>
                                    }
                                />

                                <Route
                                    path="/settings"
                                    element={
                                        <RequireAuth>
                                            <Settings />
                                        </RequireAuth>
                                    }
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Box>

                        <Footer />
                    </Box>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}
