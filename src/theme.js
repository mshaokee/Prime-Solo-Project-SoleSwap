import {createMuiTheme} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: 'red',
        secondary: 'blue'
    },
    status: {
        danger: 'orange',
    },
});//end theme

export default theme;