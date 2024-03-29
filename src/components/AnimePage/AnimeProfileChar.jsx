import React from 'react';

export const AnimeProfileChar = ({ characters }) => {
	return (
		<section className="anime__char">
			<h1>Main Characters:</h1>
			<div className="chars">
				{characters.map((char) => {
					return (
						<div className="chars--bio" key={char.node.image.medium}>
							<img
								src={char.node.image.medium}
								alt={char.node.name.full}
								name={char.node.name.full}
								className="chars--pic"
							/>
							<p className="chars--bio__name">{char.node.name.full}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
