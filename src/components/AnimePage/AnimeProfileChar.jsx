import React from "react";

export const AnimeProfileChar = ({ characters }) => {
  return (
    <section className='anime__page--anime--char'>
      <h1>Main Characters:</h1>
      <div className='chars'>
        {characters.map((char) => {
          return (
            <div class='chars--bio'>
              <img
                src={char.node.image.medium}
                alt={char.node.name.full}
                name={char.node.name.full}
                className='chars--pic'
              />
              <p className='chars--bio__name'>{char.node.name.full}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
