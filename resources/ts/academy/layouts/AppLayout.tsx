import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/system/Box";
import React, { ReactNode, Suspense } from "react";
import { AuthProvider } from "../../common/auth";
import theme from "../../theme";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar";

export interface AppLayoutProps {
    children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <Suspense fallback="Loaidng...">
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Navbar />

                        <Box flex={1}>{children}</Box>

                        <Footer />
                    </Box>
                </ThemeProvider>
            </AuthProvider>
        </Suspense>
    );
}
