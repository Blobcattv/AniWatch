import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./navigation.css";

export function Navigation(): JSX.Element {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">AniWatch</Typography>
                <Button disabled color="inherit" style={{ marginLeft: "auto" }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
