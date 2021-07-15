// Query.Media(season: MediaSeason, seasonYear: Int)
export const queryMediaBySeason = `
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
