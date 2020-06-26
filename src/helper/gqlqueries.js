//get anime char
import { gql } from "apollo-boost";

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
