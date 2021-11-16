import { indigo, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

/**
 * @see https://material.io/resources/color/
 */
const theme = createTheme({
    palette: {
        primary: pink,
        secondary: indigo,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                },
            },
        },
    },
});

export default theme;
