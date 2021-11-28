import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/system/Box";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box display="flex" flexDirection="column" minHeight="100vh">
                    <Navbar />

                    <Box flex={1}>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/privacy">
                                <Privacy />
                            </Route>
                            <Route path="/terms">
                                <Terms />
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
                </Box>
            </Router>
        </ThemeProvider>
    );
}
