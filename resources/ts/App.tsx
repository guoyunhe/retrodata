import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import BottomNavbar from "./BottomNavbar";
import navigationConfig from "./config/navigation";
import theme from "./config/theme";
import Home from "./Home";
import Navbar from "./navbar/Navbar";
import NotFound from "./NotFound";
import Settings from "./users/Settings";

export default function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Navbar />

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

                        <Route path="/about">About</Route>
                        <Route path="/creatives">Creatives</Route>
                        <Route path="/organizations">Organizations</Route>
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

                    <BottomNavbar items={navigationConfig.bottomItems} />
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}
