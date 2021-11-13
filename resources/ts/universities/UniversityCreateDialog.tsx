import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";

import { createUniversity } from "./services/createUniversity";

export interface UniversityCreateDialogProps {
    open: boolean;
    onClose?: () => void;
}

export function UniversityCreateDialog({
    open,
    onClose,
}: UniversityCreateDialogProps) {
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
            <DialogTitle>Create University</DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <DialogContentText>
                        To create a new university, please tell us the name of
                        university and contact information.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        label="Name of university"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        error={!!errors?.errors?.name}
                        helperText={errors?.errors?.name?.join(" ")}
                    />
                    <TextField
                        label="Contact person name"
                        type="text"
                        fullWidth
                        value={contactName}
                        onChange={(e) => {
                            setContactName(e.target.value);
                        }}
                        error={!!errors?.errors?.contact_name}
                        helperText={errors?.errors?.contact_name?.join(" ")}
                    />
                    <TextField
                        label="Contact phone number"
                        type="tel"
                        fullWidth
                        value={contactPhone}
                        onChange={(e) => {
                            setContactPhone(e.target.value);
                        }}
                        error={!!errors?.errors?.contact_phone}
                        helperText={errors?.errors?.contact_phone?.join(" ")}
                    />
                    <TextField
                        label="Contact email address"
                        type="email"
                        fullWidth
                        value={contactEmail}
                        onChange={(e) => {
                            setContactEmail(e.target.value);
                        }}
                        error={!!errors?.errors?.contact_email}
                        helperText={errors?.errors?.contact_email?.join(" ")}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <LoadingButton loading={creating} onClick={handleCreate}>
                    Create
                </LoadingButton>
            </DialogActions>
        </Dialog>
    );
}
