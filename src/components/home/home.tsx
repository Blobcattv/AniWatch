import {
    Grid,
    Paper,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@material-ui/core";

import "./home.css";

export function Home(): JSX.Element {
    return (
        <div>
            <h1>AniWatch</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={3}>
                        {[0, 1, 2, 3].map((value) => (
                            <Grid key={value} item>
                                <Paper
                                    style={{
                                        height: "500px",
                                        width: "300px",
                                    }}
                                >
                                    <img
                                        style={{ width: "100%" }}
                                        src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx102891-lVsBWszCtTxd.jpg"
                                        alt="Picture"
                                    />
                                    <h2
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        Title
                                    </h2>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
