import React from "react";
import { Link as RRLink } from "react-router-dom";

import { makeStyles, createStyles } from "@mui/styles";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "./AuthContext";
import { logout } from "./service";

const useStyles = makeStyles((theme: any) =>
    createStyles({
        avatar: {},
    })
);

export default function AuthMenu() {
    const classes = useStyles();
    const { user, setUser } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        logout().then(() => setUser(null));
    };

    if (user) {
        return (
            <>
                <IconButton
                    color="inherit"
                    aria-controls="auth-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{ p: 0, ml: 1 }}
                >
                    <Avatar className={classes.avatar} src={user.avatar?.url} />
                </IconButton>
                <Menu
                    id="auth-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem
                        key="profile"
                        onClick={handleClose}
                        component={RRLink}
                        to={"/users/" + user.id}
                    >
                        {user.name}
                    </MenuItem>
                    <MenuItem
                        key="settings"
                        onClick={handleClose}
                        component={RRLink}
                        to="/settings"
                    >
                        Settings
                    </MenuItem>
                    <MenuItem key="logout" onClick={handleLogout}>
                        Logout
                    </MenuItem>
                </Menu>
            </>
        );
    } else {
        return (
            <>
                <Button
                    color="inherit"
                    onClick={handleClose}
                    component={RRLink}
                    to="/login"
                >
                    Login
                </Button>
                <Button
                    color="inherit"
                    onClick={handleClose}
                    component={RRLink}
                    to="/register"
                >
                    Register
                </Button>
            </>
        );
    }
}
