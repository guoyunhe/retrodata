import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { User } from "../types/user";

const useStyles = makeStyles({
    root: {},
    name: {
        whiteSpace: "nowrap",
    },
});

export interface UserCardProps {
    user: User;
}

export default function UserCard({ user }: UserCardProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={user.name}
                    image={user?.portrait?.file_url_medium}
                    title={user.name}
                />
                <CardContent>
                    <Typography
                        className={classes.name}
                        variant="h6"
                        component="h2"
                    >
                        {user.name}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        {user.location}
                    </Typography>
                    <Typography variant="caption" component="p">
                        {user.tags.map((tag) => (
                            <span> #{tag.name} </span>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
