import { createTheme }  from '@mui/material'
import { red } from '@mui/material/colors'


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#222654',
            contrastText: '#fff'
        },
        secondary: {
            main: '#543884',
            contrastText: '#fff'
        },
        error: {
            main: red.A400
        }
    }
});
