import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React, { FormEvent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { resendEmail, useAuth } from "../../common/auth";
import AuthLayout from "./AuthLayout";

export default function VerifyEmail() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<boolean | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        resendEmail()
            .then(() => {
                setLoading(false);
                setResult(true);
            })
            .catch(() => {
                setLoading(false);
                setResult(false);
            });
    };

    if (user?.email_verified_at) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <Box my={3}>
                <Typography variant="body1">
                    A verification email has been sent to your email address.
                    Please check your inbox (and spam folder).
                </Typography>
            </Box>
            <Box my={3}>
                <Typography variant="body1">
                    If you didn't receive the email in 5 minutes, click the
                    button below:
                </Typography>
            </Box>
            <Box my={3}>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={loading && <CircularProgress size={24} />}
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    Resend Verification Email
                </Button>
                <Button component={Link} to="/" sx={{ ml: 1 }}>
                    Skip
                </Button>
            </Box>
            {typeof result === "boolean" &&
                (result ? (
                    <Alert variant="filled" severity="success">
                        Verification email was sent successfully!
                    </Alert>
                ) : (
                    <Alert variant="filled" severity="error">
                        Failed to send verification email. Please check your
                        network and try again later.
                    </Alert>
                ))}
        </AuthLayout>
    );
}
