import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ScienceIcon from "@mui/icons-material/Science";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { TransAttr } from "../../common/locales";

const data: any[] = [];

for (let i = 0; i < 20; i++) {
    data.push({
        name: "测试试剂" + (i + 1),
        name_en: "Test reagent " + (i + 1),
        desc: "一些测试描述内容...",
        desc_en: "Some testing description content...",
    });
}

export function LaboratoryReagentsList() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div>
            <List>
                {data.map((item, value) => (
                    <ListItem
                        key={item.name}
                        secondaryAction={
                            <Box display="flex" gap={3} sx={{ pr: 3 }}>
                                <IconButton edge="end" aria-label="purchase">
                                    <ShoppingCartIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        }
                        disablePadding
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={handleToggle(value)}
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <ScienceIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<TransAttr data={item} attr="name" />}
                                secondary={
                                    <TransAttr data={item} attr="desc" />
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
