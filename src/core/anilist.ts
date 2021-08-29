/**
 * AniList info
 * GraphQL API must be fetched using POST method;
 * API has limit of 90 calls per minute;
 */

import { config } from "./config";
import { queryMediaBySeason } from "./queries";
import { MediaSeason, Page } from "./types";

export async function fetchMediaPageBySeason(
  season: MediaSeason,
  seasonYear: number,
  page: number,
  perPage: number
): Promise<Page> {
  const query = queryMediaBySeason;
  const variables = {
    season,
    seasonYear,
    page,
    perPage,
  };

  try {
    const res = (await fetchData(query, variables)) as any;
    return res.data.Page as Page;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function fetchData(
  query: string,
  variables: Record<string, unknown>
): Promise<unknown> {
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
