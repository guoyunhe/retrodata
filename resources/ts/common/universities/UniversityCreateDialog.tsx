import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createUniversity } from "./createUniversity";

export interface UniversityCreateDialogProps {
    open: boolean;
    onClose?: () => void;
    onSuccess?: () => void;
}

export function UniversityCreateDialog({
    open,
    onClose,
    onSuccess,
}: UniversityCreateDialogProps) {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const [creating, setCreating] = useState(false);
    const [errors, setErrors] = useState<any>(null);

    const handleClose = () => {
        setName("");
        setContactEmail("");
        setContactName("");
        setContactPhone("");
        onClose && onClose();
    };

    const handleCreate = () => {
        setCreating(true);
        createUniversity({
            name,
            contact_email: contactEmail,
            contact_name: contactName,
            contact_phone: contactPhone,
        })
            .then((res) => {
                onSuccess && onSuccess();
                handleClose();
            })
            .catch((err) => {
                setErrors(err.response.data);
            })
            .finally(() => {
                setCreating(false);
            });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{t("Create University")}</DialogTitle>
            <DialogContent sx={{ overflow: "visible" }}>
                <DialogContentText sx={{ mb: 2 }}>
                    {t("University Information")}
                </DialogContentText>
                <TextField
                    autoFocus
                    label={t("Name of university")}
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    error={!!errors?.errors?.name}
                    helperText={errors?.errors?.name?.join(" ")}
                    sx={{ mb: 2 }}
                />
                <DialogContentText sx={{ mb: 2 }}>
                    {t("Contact Information")}
                </DialogContentText>
                <TextField
                    label={t("Contact person name")}
                    type="text"
                    fullWidth
                    value={contactName}
                    onChange={(e) => {
                        setContactName(e.target.value);
                    }}
                    error={!!errors?.errors?.contact_name}
                    helperText={errors?.errors?.contact_name?.join(" ")}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label={t("Contact phone number")}
                    type="tel"
                    fullWidth
                    value={contactPhone}
                    onChange={(e) => {
                        setContactPhone(e.target.value);
                    }}
                    error={!!errors?.errors?.contact_phone}
                    helperText={errors?.errors?.contact_phone?.join(" ")}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label={t("Contact email address")}
                    type="email"
                    fullWidth
                    value={contactEmail}
                    onChange={(e) => {
                        setContactEmail(e.target.value);
                    }}
                    error={!!errors?.errors?.contact_email}
                    helperText={errors?.errors?.contact_email?.join(" ")}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t("Cancel")}</Button>
                <LoadingButton
                    variant="contained"
                    loading={creating}
                    onClick={handleCreate}
                >
                    {t("Create")}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    );
}
