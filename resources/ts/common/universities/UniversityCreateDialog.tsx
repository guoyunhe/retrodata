import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
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
            <DialogTitle>
                {t("university-create", { ns: "admin-university" })}
            </DialogTitle>
            <DialogContent sx={{ overflow: "visible" }}>
                <TextField
                    autoFocus
                    label={t("university-name", { ns: "admin-university" })}
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t("cancel")}</Button>
                <LoadingButton
                    variant="contained"
                    loading={creating}
                    onClick={handleCreate}
                >
                    {t("create")}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    );
}
