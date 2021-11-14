import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles, ThemeProvider } from "@mui/styles";
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

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
    },
    animatedSwitch: {
        position: "relative",
        "& > div": {
            position: "absolute",
        },
    },
});

export default function App() {
    const classes = useStyles();
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <div className={classes.root}>
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
                    </div>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}
