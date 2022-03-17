import { AnimeProfileChar } from "./AnimeProfileChar";
import {useOutletContext} from 'react-router-dom'
export const DescriptionPage = (props) => {
  const { Media, characters } = useOutletContext();
  return (<section className='anime__page--anime'>
        <section className='anime__bio'>
          <p
            className='description'
            dangerouslySetInnerHTML={{ __html: `${Media.description}` }}
          ></p>
        </section>
        <AnimeProfileChar characters={characters} />
      </section>)
}
