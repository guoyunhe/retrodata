import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";
import LibraryBooksTwoToneIcon from "@mui/icons-material/LibraryBooksTwoTone";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";
import { purple } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

export function Features() {
    const { t } = useTranslation();

    return (
        <Container sx={{ py: 6 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <ScienceTwoToneIcon
                        sx={{ fontSize: 64, mt: 5, mb: 2, color: purple[200] }}
                    />
                    <Typography sx={{ fontSize: 24, mb: 5 }}>
                        Feature Description Here
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <LibraryBooksTwoToneIcon
                        sx={{ fontSize: 64, mt: 5, mb: 2, color: purple[200] }}
                    />
                    <Typography sx={{ fontSize: 24, mb: 5 }}>
                        Feature Description Here
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <FindInPageTwoToneIcon
                        sx={{ fontSize: 64, mt: 5, mb: 2, color: purple[200] }}
                    />
                    <Typography sx={{ fontSize: 24, mb: 5 }}>
                        Feature Description Here
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <RocketLaunchTwoToneIcon
                        sx={{ fontSize: 64, mt: 5, mb: 2, color: purple[200] }}
                    />
                    <Typography sx={{ fontSize: 24, mb: 5 }}>
                        Feature Description Here
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <ShoppingCartTwoToneIcon
                        sx={{ fontSize: 64, mt: 5, mb: 2, color: purple[200] }}
                    />
                    <Typography sx={{ fontSize: 24, mb: 5 }}>
                        Feature Description Here
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <VerifiedUserTwoToneIcon
                        sx={{ fontSize: 64, mt: 5, mb: 2, color: purple[200] }}
                    />
                    <Typography sx={{ fontSize: 24, mb: 5 }}>
                        Feature Description Here
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
