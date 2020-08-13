import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({

    palette: {
        primary: {
            main: '#00B4EB',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#FEC925',
            contrastText: '#ffffff'
        }
    },
    typography: {
        fontFamily: "Montserrat", 
    },
})

    export default theme;