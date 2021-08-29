import { useEffect, useState } from "react";
import { fetchMediaPageBySeason } from "../../core/anilist";
import { MediaSeason, Page } from "../../core/types";
import { Navigation } from "../navigation/navigation";
import { Home } from "../home/home";

import "./App.css";

// todo Use LocalStorage

export function App(): JSX.Element {
  const [data, setData] = useState({} as Page);

  useEffect(() => {
    async function queryData(): Promise<void> {
      const result = await fetchMediaPageBySeason(
        MediaSeason.SUMMER,
        2021,
        1,
        50
      );
      setData(result);
    }
    queryData();
  }, []);

  if (!data.media) {
    // todo better loading screen
    return <h1>Loading!</h1>;
  }

  return (
    <div className="App">
      <Navigation />
      <Home media={data.media} />
    </div>
  );
}
