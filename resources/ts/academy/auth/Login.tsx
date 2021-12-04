import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as RRLink, Navigate } from "react-router-dom";
import { fetchUser, login, useAuth } from "../../common/auth";
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
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<LoginErrors | null>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        login(email, password, remember)
            .then(() => fetchUser())
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
        return <Navigate to="/" />;
    }

    return (
        <AuthLayout>
            <form method="POST" action="/login" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label={t("email")}
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
                    <TextField
                        label={t("password")}
                        name="password"
                        fullWidth
                        required
                        type="password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="remember"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                        }
                        label={t("remember-me").toString()}
                    />
                    <Box className={classes.buttonRow}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            endIcon={loading && <CircularProgress size={24} />}
                            disabled={loading}
                        >
                            {t("login")}
                        </Button>
                        <Link component={RRLink} to="/password/reset">
                            {t("forgot-password")}
                        </Link>
                    </Box>
                </Stack>
            </form>
        </AuthLayout>
    );
}
