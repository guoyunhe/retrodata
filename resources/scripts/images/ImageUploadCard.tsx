import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Theme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { ChangeEvent, useRef, useState } from "react";
import { readFileAsDataString } from "./readFileAsDataString";

const size = 200;

export interface ImageUploadCardProps {
    image?: string;
    disabled?: boolean;
    onChange?: (file: File | null, dataUrl: string) => void;
    onRemove?: () => void;
}

export function ImageUploadCard({
    image,
    disabled,
    onChange,
    onRemove,
}: ImageUploadCardProps) {
    const input = useRef<HTMLInputElement>(null);
    const [localImage, setLocalImage] = useState<string | null>(null);

    const handleSelect = () => {
        input.current?.click();
    };

    const handleRemove = () => {
        if (onRemove) {
            onRemove();
        }

        if (input.current) {
            input.current.value = "";
        }
        setLocalImage(null);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            readFileAsDataString(file).then((data) => {
                if (onChange) {
                    onChange(file, data);
                }
                setLocalImage(data);
            });
        }
    };

    return (
        <Card
            variant="outlined"
            sx={{
                position: "relative",
                width: size,
                height: size,
                marginTop: (theme: Theme) => theme.spacing(2),
            }}
        >
            <CardActionArea
                onClick={handleSelect}
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                {localImage || image ? (
                    <CardMedia
                        component="img"
                        image={localImage || image}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CloudUploadIcon
                            sx={{
                                fontSize: (theme: Theme) => theme.spacing(5),
                            }}
                        />
                        <Typography>Upload Image</Typography>
                    </div>
                )}
            </CardActionArea>
            <input
                ref={input}
                type="file"
                accept="image/*"
                hidden
                onChange={handleChange}
                disabled={disabled}
            />
            {localImage && (
                <IconButton
                    size="small"
                    onClick={handleRemove}
                    sx={{
                        position: "absolute",
                        right: (theme: Theme) => theme.spacing(0.5),
                        top: (theme: Theme) => theme.spacing(0.5),
                        background: (theme: Theme) =>
                            theme.palette.background.paper + " !important",
                    }}
                >
                    <RemoveCircleIcon />
                </IconButton>
            )}
        </Card>
    );
}
