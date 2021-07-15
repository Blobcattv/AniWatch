import { MediaFormat, MediaType } from "./queries";

export interface Media {
    id: number;
    title: {
        romaji: string;
        english: string;
    };
    type: MediaType;
    format: MediaFormat;
    description: string;
    coverImage: {
        extraLarge: string;
        large: string;
        medium: string;
    };
    bannerImage: string;
    episodes?: number;
    chapters?: number;
    volumes?: number;
    genres: string[];
}
