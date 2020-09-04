//get anime char
import { gql } from "@apollo/client";

export const ANIME_CATEGORIES = gql`
  query {
    action: Page {
      media(
        genre_in: "Action"
        genre_not_in: ["sci-fi"]
        averageScore_greater: 77
        type: ANIME
        format: TV
      ) {
        title {
          english
          userPreferred
        }
        averageScore
        genres
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
    romance: Page {
      media(
        genre_in: "romance"
        genre_not_in: ["action", "sports"]
        type: ANIME
        popularity_greater: 85
        format: TV
      ) {
        title {
          english
          userPreferred
        }
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
    drama: Page {
      media(
        genre_in: "drama"
        genre_not_in: ["action"]
        type: ANIME
        format: TV
        popularity_greater: 84
      ) {
        title {
          english
          userPreferred
        }
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
    scifi: Page {
      media(
        genre_in: "sci-fi"
        type: ANIME
        averageScore_greater: 85
        sort: TRENDING
        format: TV
      ) {
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
    adventure: Page {
      media(
        genre_in: "adventure"
        type: ANIME
        averageScore_greater: 80
        sort: TRENDING
        format: TV
      ) {
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
    sports: Page {
      media(
        genre_in: "sports"
        type: ANIME
        averageScore_greater: 80
        format: TV
        sort: TRENDING
      ) {
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
    fantasy: Page {
      media(
        genre_in: "fantasy"
        type: ANIME
        averageScore_greater: 80
        sort: TRENDING
        format: TV
      ) {
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          large
          medium
          color
        }
        bannerImage
        id
      }
    }
  }
`;

export const ANIME_PAGE = gql`
  query getAnimeData($animeId: Int) {
    Media(id: $animeId) {
      title {
        english
        userPreferred
      }
      coverImage {
        large
        medium
        color
      }
      description
      episodes
      startDate {
        year
        month
      }
      characters(role: MAIN) {
        edges {
          id
          node {
            name {
              full
              native
            }
            image {
              medium
            }
          }
        }
      }
    }
  }
`;

export const CHAR_ANIME = gql`
  query($char: Int) {
    Character(id: $char) {
      id
      name {
        full
      }
      image {
        large
      }
      description
      media {
        nodes {
          title {
            english
          }
          bannerImage
        }
      }
    }
  }
`;

export const SEARCH_ANIME_QUERY = gql`
  query($name: String) {
    Media(search: $name) {
      title {
        english
      }
      id
      characters(sort: ROLE) {
        edges {
          node {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
      }
      bannerImage
    }
  }
`;
