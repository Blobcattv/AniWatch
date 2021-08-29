
export interface UserData {
    media: AniWatchMedia[],
}

export interface AniWatchMedia extends Media {
    watched: number,
}

// AniList types

export enum MediaSeason {
    WINTER = "WINTER",
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    FALL = "FALL",
}

export enum MediaType {
    ANIME = "ANIME",
    MANGA = "MANGA",
}

export enum MediaFormat {
    TV = "TV",
    TV_SHORT = "TV_SHORT",
    MOVIE = "MOVIE",
    SPECIAL = "SPECIAL",
    OVA = "OVA",
    ONA = "ONA",
    MUSIC = "Music",
    MANGA = "Manga",
    NOVEL = "NOVEL",
    ONE_SHOT = "ONE_SHOT",
}

export interface Page {
    media: Media[];
    pageInfo: PageInfo;
}

export interface PageInfo {
    currentPage: number;
    hasNextPage: boolean;
    lastPage: number;
    perPage: number;
    total: number;
}

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
