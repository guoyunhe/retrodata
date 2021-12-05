import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth } from "../common/auth";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import { Dashboard } from "./dashboard";
import {
    LaboratoryMembersList,
    LaboratoryPage,
    LaboratoryReagentsList,
    LaboratorySettings,
} from "./laboratories";
import { AppLayout } from "./layouts";
import { NotFound } from "./not-found";
import Settings from "./users/Settings";

export function App() {
    return (
        <Router>
            <AppLayout>
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
                    <Route path="/register" element={<Register />} />
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
                    <Route
                        path="/laboratories/:laboratoryId"
                        element={<LaboratoryPage />}
                    >
                        <Route path="" element={<LaboratoryReagentsList />} />
                        <Route
                            path="members"
                            element={<LaboratoryMembersList />}
                        />
                        <Route
                            path="settings"
                            element={<LaboratorySettings />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppLayout>
        </Router>
    );
}
