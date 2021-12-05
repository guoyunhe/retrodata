import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import blueGrey from "@mui/material/colors/blueGrey";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { RequireAuth } from "../../common/auth";
import { fetchLaboratory, Laboratory } from "../../common/laboratories";
import { TransAttr } from "../../common/locales";
import { LaboratoryTabs } from "./LaboratoryTabs";

export function LaboratoryPage() {
    const { laboratoryId } = useParams();
    const [laboratory, setLaboratory] = useState<Laboratory>();
    useEffect(() => {
        if (laboratoryId) {
            fetchLaboratory(laboratoryId).then((res) => {
                setLaboratory(res.data);
            });
        }
    }, [laboratoryId]);

    if (!laboratory) return <CircularProgress />;

    return (
        <RequireAuth>
            <div>
                <Box component="header" sx={{ background: blueGrey[50] }}>
                    <Typography
                        variant="h3"
                        sx={{ display: "flex", alignItems: "center", p: 3 }}
                    >
                        <Avatar
                            src={
                                laboratory.logo?.url ||
                                "/img/default-laboratory-logo.svg"
                            }
                            sx={{
                                width: 48,
                                height: 48,
                            }}
                        />
                        <TransAttr data={laboratory} attr="name" />
                    </Typography>
                    <LaboratoryTabs />
                </Box>
                <Outlet />
            </div>
        </RequireAuth>
    );
}
