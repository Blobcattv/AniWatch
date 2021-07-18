import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";

export function Home(): JSX.Element {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">News</Typography>
                <Button
                    disabled
                    color="inherit"
                    className="mr-auto"
                    style={{ marginLeft: "auto" }}
                >
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
