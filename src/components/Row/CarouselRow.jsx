import React, {useState, useContext, useEffect} from 'react';
import {moveNext, moveBefore, titleSection} from './helpers/carousel';
import {PageContext} from '../contexts';
import {Cells} from './cell';
import { useRef } from 'react';

export function CarouselRow({title = '', data = {}, loading, episodes=false, search}) {
	const [carousel, setCarousel] = useState(0);
	const {pageState} = useContext(PageContext);
	const divGenre = useRef(null);

	useEffect(() => {
		if (carousel >= 0) {

			if(divGenre?.current){
				divGenre.current.style.transform = `translateX(-${carousel}px)`;
			}
		}
	}, [carousel, title, pageState]);

	return (
    <div className='list__section'>
			<div className='list__title'>{`${
				typeof pageState !== 'undefined' && !episodes && search ? 'Searching for ' : ''
			}${title || pageState.search.textSearch}`}</div>
			{!loading && (
				<div
					className='list__section--next'
					onClick={(e) =>
						moveNext(
							e,
							title || pageState.search.textSearch,
							carousel,
							setCarousel
						)
					}
				></div>
			)}
			{!loading && (
				<div
					className='list__section--next after'
					onClick={(e) =>
						moveBefore(
							e,
							title || pageState.search.textSearch,
							carousel,
							setCarousel
						)
					}
				></div>
			)}

      <div className='list__section--shadow'></div>
      <div className="list__wrapper">
			<div
				className={'list__wrapper--slide'}
				ref={(ref)=>{
					divGenre.current = ref;
				}}
				data-load={`${loading ? 'loading' : 'done'}`}
				data-genre={titleSection(title || pageState.search.textSearch)}
			>
				{loading && <p>Loading...</p>}
          {data && !loading && !episodes && <Cells data={data} />}
        </div>
      </div>
		</div>
	);
}
