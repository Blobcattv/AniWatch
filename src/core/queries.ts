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

// Query.Media(season: MediaSeason, seasonYear: Int)
export const queryMediaSeason = `
query ($page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int) {
    Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }

        media (season: $season, seasonYear: $seasonYear, isAdult: false) {
            id
            title {
                romaji
                english
            }
            type
            format
            description
            coverImage {
                extraLarge
                large
                medium
            }
            bannerImage
            episodes
            chapters
            volumes
            genres
        }
    }
}
`;
