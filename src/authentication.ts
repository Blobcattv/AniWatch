import { v4 as uuidv4 } from "uuid";

interface AuthConfig {
    response_type: string;
    client_id: string;
    state?: string;
    redirect_uri?: string[];
    code_challenge: string;
    code_challenge_method?: string;
}

export function getAuthenticationConfig(): AuthConfig {
    const authenticationConfig: AuthConfig = {
        response_type: "code",
        client_id: "b99c2ab2c2fd5e6a0d0cb7ea666892ef",
        redirect_uri: [], // todo add redirect_uri (also to MyAnimeList API settings)
        code_challenge: generateCodeChallenge(generateCodeVerifier()),
        code_challenge_method: "plain",
    };
    return authenticationConfig;
}

/**
 * generates code_verifier for PKCE
 */
function generateCodeVerifier(): string {
    const uuid = uuidv4();
    return uuid.replace("-", "");
}

/**
 * generates code_challenge for PKCE.
 * MyAnimeList oly supports 'plain' code_challenge which means an unmodified code_verifier.
 * @param codeVerifier code_verifier for which a code_challenge should be generated.
 */
function generateCodeChallenge(codeVerifier: string): string {
    return codeVerifier;
}
