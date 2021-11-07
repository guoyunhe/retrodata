import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";

import { NavigationItem } from "../types/navigation";

const navigationConfig: {
    topItems: NavigationItem[];
    bottomItems: NavigationItem[];
} = {
    topItems: [],
    bottomItems: [
        { text: "Home", href: "/", icon: <HomeIcon /> },
        {
            text: "Labs",
            href: "/labs",

            icon: <PeopleIcon />,
        },
        { text: "Blog", href: "/blog", icon: <BookIcon /> },
        { text: "User", href: "/user", icon: <PersonIcon /> },
    ],
};

export default navigationConfig;
