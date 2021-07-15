// always use POST
// API has a Limit of 90 calls per minute
// todo: may need a backend service with cache

import { config } from "./config";

export async function fetchData(
    query: string,
    variables: Record<string, unknown>
): Promise<string> {
    const url = config.url;
    const options: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    };

    try {
        const res = await fetch(url, options);
        return await res.json();
    } catch (error) {
        console.log(error);
        return error;
    }
}
