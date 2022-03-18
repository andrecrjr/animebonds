import { useOutletContext } from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { ANIME_EPISODES_PAGE } from '../../helper/'
import {CarouselRow} from '../Row/CarouselRow'
export const AnimeEpisodes = () => {
  const { id, Media } = useOutletContext()
  const { loading, data, error } = useQuery(ANIME_EPISODES_PAGE, { variables: { animeId: id || 0 } })
  console.log(Media)
    return (
    <section className="anime__episodes">
      <CarouselRow
        loading={loading}
        title={`Episodes`}        
        data={data?.Media.streamingEpisodes}
        search={false}
        episodes={true}
    />
    </section>)
}