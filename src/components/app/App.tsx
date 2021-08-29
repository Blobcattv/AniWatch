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
        10
      );
      setData(result);
      console.log(JSON.stringify(result));
    }

    queryData();
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
      <Navigation />
      <Home />
    </div>
  );
}
