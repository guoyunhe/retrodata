import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { User } from "./User";

export interface UserCardProps {
    user: User;
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={user.name}
                    image={user?.avatar?.url}
                    title={user.name}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ whiteSpace: "nowrap" }}
                    >
                        {user.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
