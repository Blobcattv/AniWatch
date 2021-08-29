import { Grid } from "@material-ui/core";
import { Media } from "../../core/types";
import { Card } from "../card/card";

import "./home.css";

export type HomeProps = {
  media: Media[];
};

export function Home(props: HomeProps): JSX.Element {
  const cards: JSX.Element[] = [];
  for (const m of props.media) {
    cards.push(
      <Grid key={m.id} item>
        <Card media={m} />
      </Grid>
    );
  }

  return (
    <div>
      <h1>AniWatch</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {cards}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
