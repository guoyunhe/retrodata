import { indigo, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

/**
 * @see https://material.io/resources/color/
 */
const theme = createTheme({
    palette: {
        primary: {
            main: pink[200],
        },
        secondary: {
            main: indigo[200],
        },
    },
});

export default theme;
