//get anime char
import { gql } from "@apollo/client";

export const ANIME_CATEGORIES = gql`
  query {
    action: Page {
      media(
        genre_in: "action"
        genre_not_in: "romance"
        averageScore_greater: 85
        type: ANIME
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
      }
    }
    romance: Page {
      media(
        genre_in: "romance"
        genre_not_in: "action"
        type: ANIME
        averageScore_greater: 85
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
      }
    }
    scifi: Page {
      media(
        genre_in: "sci-fi"
        type: ANIME
        averageScore_greater: 85
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
