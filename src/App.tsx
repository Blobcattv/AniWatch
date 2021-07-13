import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
    AuthConfig,
    authenticate,
    fetchMALToken,
    getAuthenticationConfig,
} from "./core/authentication";
import * as globalConfig from "./core/config";
import { decrypt } from "./core/crypt";

function App(): JSX.Element {
    const [config] = useState<AuthConfig>(getAuthenticationConfig());
    const [token, setToken] = useState("");

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const code = params.get("code");

    useEffect(() => {
        async function fetchToken(): Promise<void> {
            if (token) {
                return;
            }

            if (!code) {
                console.log("authentication code not set");
                await authenticate(config);
                return;
            }

            const tkn = await fetchMALToken(
                decrypt(globalConfig.config.encryptedClientSecret),
                code,
                config
            );
            setToken(tkn);
        }

        fetchToken();
    });

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
                <p>Config is: {JSON.stringify(config)}</p>
                <p>Token is: {token}</p>
            </div>
        </div>
    );
}

export default App;
