import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchMediaPageBySeason } from "./core/anilist";
import { MediaSeason, Page } from "./core/types";
import { Home } from "./home";

// todo Use LocalStorage

function App(): JSX.Element {
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
            <Home />
        </div>
    );
}

export default App;
