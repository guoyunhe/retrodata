import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link as RRLink, Redirect } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import { login } from "./service";
import { useAuth } from "./AuthContext";
import AuthLayout from "./AuthLayout";

const useStyles = makeStyles({
    buttonRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export interface LoginErrors {
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
    };
}

export default function Login() {
    const classes = useStyles();
    const { user, setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<LoginErrors | null>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        login(email, password, remember)
            .then((res) => {
                setLoading(false);
                setUser(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err.response.data as LoginErrors);
            });
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <form method="POST" action="/login" onSubmit={handleSubmit}>
                <Box my={3}>
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        required
                        type="email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        error={!!errors?.errors?.email}
                        helperText={errors?.errors?.email?.join(" ")}
                    />
                </Box>
                <Box my={3}>
                    <TextField
                        label="Password"
                        name="password"
                        fullWidth
                        required
                        type="password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                </Box>
                <Box my={3}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="remember"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                        }
                        label="Remember me"
                    />
                </Box>
                <Box className={classes.buttonRow}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={loading && <CircularProgress size={24} />}
                        disabled={loading}
                    >
                        Login
                    </Button>
                    <Link component={RRLink} to="/password/reset">
                        Forgot Your Password?
                    </Link>
                </Box>
            </form>
        </AuthLayout>
    );
}
