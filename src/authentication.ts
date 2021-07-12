import { v4 as uuidv4 } from "uuid";

export const authenticationConfig = {
    response_type: "code",
    client_id: "b99c2ab2c2fd5e6a0d0cb7ea666892ef",
    code_challenge: generateCodeChallenge(generateCodeVerifier()),
};

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
