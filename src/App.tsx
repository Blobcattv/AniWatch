import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { authenticate, getAuthenticationConfig } from "./core/authentication";
import { fetchClientId, getEncryptionKey } from "./core/aniWatch-proxy";

function App(): JSX.Element {
    const [authenticationConfig, setAuthenticationConfig] = useState({});
    const [token, setToken] = useState("");

    useEffect(() => {
        async function fetchToken() {
            const key = await getEncryptionKey();
            const id = await fetchClientId(key);
            const cfg = await getAuthenticationConfig(id);
            setAuthenticationConfig(cfg);

            const authorizationCode = await authenticate(cfg);
            console.log(authorizationCode);
        }

        fetchToken();
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
                <p>
                    authenticationConfig is:{" "}
                    {JSON.stringify(authenticationConfig)}
                </p>
                <p>Token is: {token}</p>
            </div>
        </div>
    );
}

export default App;
