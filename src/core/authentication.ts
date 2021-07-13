import { v4 as uuidv4 } from "uuid";
import { config } from "./config";
import { decrypt } from "./crypt";

export interface AuthConfig {
    response_type: string;
    client_id: string;
    state?: string;
    redirect_uri?: string;
    code_challenge: string;
    code_challenge_method?: string;
}

export async function fetchMALToken(
    clientSecret: string,
    authorizationCode: string,
    config: AuthConfig
): Promise<string> {
    let url = `https://myanimelist.net/v1/oauth2/token?`;
    url = url.concat(`client_id=${decrypt(config.client_id)}`);
    url = url.concat(`client_secret=${clientSecret}`);
    url = url.concat(`grant_type=authorization_code`);
    url = url.concat(`code=${authorizationCode}`);
    url = url.concat(`redirect_uri=${config.redirect_uri}`);
    url = url.concat(`code_verifier=${config.code_challenge}`);

    const response = await fetch(url);
    return await response.text();
}

/**
 * Authenticates against MyAnimeList; will reroute to config.redirect_uri which in turn will set queryParam 'code' on redirect_uri webpage
 * @param config configuration for authentication request
 */
export async function authenticate(config: AuthConfig): Promise<void> {
    let url = `https://myanimelist.net/v1/oauth2/authorize?`;
    url = url.concat(`response_type=${config.response_type}`);
    url = url.concat(`&client_id=${config.client_id}`);
    url = url.concat(`&code_challenge=${config.code_challenge}`);

    if (config.state) {
        url = url.concat(`&state=${config.state}`);
    }

    if (config.redirect_uri && config.redirect_uri.length > 0) {
        url = url.concat(`&redirect_uri=${config.redirect_uri}`);
    }

    if (config.code_challenge_method) {
        url = url.concat(
            `&code_challenge_method=${config.code_challenge_method}`
        );
    }

    const options: RequestInit = {
        method: "POST",
        body: JSON.stringify(config),
        headers: { "Content-Type": "application/json" },
    };
    await fetch(url, options);
}

export function getAuthenticationConfig(): AuthConfig {
    const authenticationConfig: AuthConfig = {
        response_type: "code",
        client_id: decrypt(config.encryptedClientId),
        redirect_uri: "https://minatore0712.github.io/AniWatch/",
        code_challenge: generateCodeChallenge(generateCodeVerifier()),
        code_challenge_method: "plain",
    };
    return authenticationConfig;
}

/**
 * generates code_verifier for PKCE
 */
function generateCodeVerifier(): string {
    const minLength = 43;

    let uuid = "";
    while (uuid.length < minLength) {
        uuid += uuidv4();
        uuid = uuid.replaceAll("-", "");
    }
    return uuid;
}

/**
 * generates code_challenge for PKCE.
 * MyAnimeList oly supports 'plain' code_challenge which means an unmodified code_verifier.
 * @param codeVerifier code_verifier for which a code_challenge should be generated.
 */
function generateCodeChallenge(codeVerifier: string): string {
    return codeVerifier;
}
