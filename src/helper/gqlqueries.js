// get anime char
import { gql } from '@apollo/client';

export const ANIME_CATEGORIES = gql`
	query ($genre: [String], $notGenre: [String]) {
		Page {
			media(
				genre_in: $genre
				genre_not_in: $notGenre
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
	}
`;

export const ANIME_EPISODES_PAGE = gql`
	query getAnimeData($animeId: Int) {
		Media(id: $animeId) {
			streamingEpisodes {
				title
				thumbnail
				url
				site
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
			nextAiringEpisode {
				episode
				timeUntilAiring
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
	query ($char: Int) {
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

export const ANIME_SEARCH = gql`
	query ($animeFind: String) {
		Page {
			media(search: $animeFind, popularity_greater: 80, type: ANIME) {
				title {
					romaji
					english
					native
					userPreferred
				}
				id
				description
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

export const SEARCH_ANIME_CHAR_QUERY = gql`
	query ($name: String) {
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
