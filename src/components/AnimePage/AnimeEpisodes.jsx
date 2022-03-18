import { useOutletContext } from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { ANIME_EPISODES_PAGE } from '../../helper/'
export const AnimeEpisodes = () => {
  const { id, Media } = useOutletContext()
  const { loading, data, error } = useQuery(ANIME_EPISODES_PAGE, { variables: { animeId: id || 0 } })
  if(data){
    return (
      <section className="anime__episodes">
        <h1>Episodes</h1>
          <AnimeEpisodeCell data={data.Media.streamingEpisodes} />
      </section>)
  }
  return <></>
}

export const AnimeEpisodeCell = ({ data }) => {
  
  return ( <>{data.map(item => {
    return (
      <section className="list__episode">
            <a href={ `${item.url}` } target="_blank">
              <img src={ `${item.thumbnail}` } alt={item.title} width="150" title={item.title} />
            </a>
            <div class="list__episode--title">
              {item.title}
            </div>
      </section>)
    }) }</>)
}
