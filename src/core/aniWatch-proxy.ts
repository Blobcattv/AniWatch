import { decrypt } from "./crypt";
import { config } from "./config";

const url = config.proxyUrl;

export async function getEncryptionKey(): Promise<string> {
    const res = await fetch(url + "/v1/credentials/decryptphrase");
    const data = await res.text();
    return data;
}

export async function fetchClientId(secretKey: string): Promise<string> {
    const res = await fetch(url + "/v1/credentials/clientid");
    const data = await res.text();
    const clientId = decrypt(data, secretKey);
    return clientId;
}

export async function fetchClientSecret(secretKey: string): Promise<string> {
    const res = await fetch(url + "/v1/credentials/clientsecret");
    const data = await res.text();
    const clientSecret = decrypt(data, secretKey);
    return clientSecret;
}
