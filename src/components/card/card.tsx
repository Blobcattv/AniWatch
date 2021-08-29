import { Paper } from "@material-ui/core";
import { Media } from "../../core/types";

import "./card.css";

export type CardProps = {
  media: Media;
};

export function Card(props: CardProps): JSX.Element {
  const genres: JSX.Element[] = [];
  for (const g of props.media.genres) {
    genres.push(<div className="GenreTag">{g}</div>);
  }

  return (
    <Paper className="Card">
      <div className="CardContent">
        <h1>{props.media.title.romaji}</h1>
        <div className="GenreList">
          {genres}
          <div>...</div>
        </div>
        <p>{props.media.description}</p>
        <a href="#" className="CardButton">
          More
        </a>
      </div>
    </Paper>
  );
}
