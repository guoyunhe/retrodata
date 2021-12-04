import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link as RRLink, Navigate } from "react-router-dom";
import { fetchUser, register, useAuth } from "../../common/auth";
import AuthLayout from "./AuthLayout";

export interface RegisterErrors {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
    };
}

export default function Register() {
    const { user, setUser } = useAuth();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState<RegisterErrors | null>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        register(name, email, password, passwordConfirmation, "academy")
            .then(() => fetchUser())
            .then((res) => {
                setLoading(false);
                setUser(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err.response.data as RegisterErrors);
            });
    };

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <AuthLayout>
            <form method="POST" action="/register" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label={t("name")}
                        name="name"
                        fullWidth
                        required
                        type="string"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                        error={!!errors?.errors?.name}
                        helperText={errors?.errors?.name?.join(" ")}
                    />
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
                        error={!!errors?.errors?.password}
                        helperText={errors?.errors?.password?.join(" ")}
                    />
                    <TextField
                        label={t("confirm-password")}
                        name="password_confirmation"
                        fullWidth
                        required
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPasswordConfirmation(e.target.value)
                        }
                        error={!!errors?.errors?.password_confirmation}
                        helperText={errors?.errors?.password_confirmation?.join(
                            " "
                        )}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={loading && <CircularProgress size={24} />}
                        disabled={loading}
                    >
                        {t("register")}
                    </Button>
                    <div>
                        <Trans i18nKey="register-agree">
                            By joining, you agree to the{" "}
                            <Link component={RRLink} to="/terms">
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link component={RRLink} to="/privacy">
                                Privacy Policy
                            </Link>
                        </Trans>
                    </div>
                </Stack>
            </form>
        </AuthLayout>
    );
}
