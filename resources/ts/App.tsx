import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/system/Box";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import BottomNavbar from "./BottomNavbar";
import navigationConfig from "./config/navigation";
import theme from "./config/theme";
import { Footer } from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import NotFound from "./NotFound";
import { About } from "./siteinfo/About";
import { Privacy } from "./siteinfo/Privacy";
import { Terms } from "./siteinfo/Terms";
import Settings from "./users/Settings";

export default function App() {
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
                            <Switch>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/register">
                                    <Register />
                                </Route>
                                <Route path="/email/verify">
                                    <VerifyEmail />
                                </Route>

                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/privacy">
                                    <Privacy />
                                </Route>
                                <Route path="/terms">
                                    <Terms />
                                </Route>

                                <Route path="/settings">
                                    <Settings />
                                </Route>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </Box>

                        <Footer />

                        <BottomNavbar items={navigationConfig.bottomItems} />
                    </Box>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}
