import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    LaboratoriesList,
    Laboratory,
    queryLaboratoriesList,
} from "../../common/laboratories";

export function Dashboard() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [laboratories, setLaboratories] = useState<Laboratory[]>([]);

    const refresh = () => {
        queryLaboratoriesList({
            university_id: window.university.id,
            with_college: true,
        }).then((res) => {
            setLaboratories(res.data);
        });
    };

    useEffect(() => {
        refresh();
    }, []);

    return (
        <Box sx={{ background: blueGrey[100], p: 3 }}>
            <LaboratoriesList laboratories={laboratories} />
        </Box>
    );
}
