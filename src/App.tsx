import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./core/anilist";

function App(): JSX.Element {
    const [data, setData] = useState("");

    useEffect(() => {
        const query = `query ($id: Int) { # Define which variables will be used in the query (id)
                            Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                                id
                                title {
                                romaji
                                english
                                native
                                }
                            }
                        }`;

        const variables = {
            id: 15125,
        };

        async function queryData(): Promise<void> {
            const result = await fetchData(query, variables);
            setData(result);
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
            <div>
                <p>Data is: {JSON.stringify(data)}</p>
            </div>
        </div>
    );
}

export default App;
