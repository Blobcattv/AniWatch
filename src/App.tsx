import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./core/anilist";
import { MediaSeason, queryMediaSeason } from "./core/queries";

function App(): JSX.Element {
    const [data, setData] = useState("");

    useEffect(() => {
        const query = queryMediaSeason;
        const variables = {
            page: 1,
            perPage: 10,
            season: MediaSeason.SUMMER,
            seasonYear: 2021,
        };

        async function queryData(): Promise<void> {
            const result = await fetchData(query, variables);
            setData(result);
            console.log(JSON.stringify(result));
        }

        queryData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
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
            </header>
        </div>
    );
}

export default App;
