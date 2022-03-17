import React from "react";
import { useQuery } from "@apollo/client";
import { ANIME_PAGE } from "../../helper";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import {Outlet} from 'react-router-dom'

function AnimePage(props) {
  const location = useParams();

  const { loading, data, error } = useQuery(ANIME_PAGE, {
    variables: { animeId: location.id || 0 },
  });

  if (loading) {
    return <div className='anime__page'>Loading anime, just wait a bit!</div>;
  }

  if (error) {
    return <div className='anime__page'>Whoops something went wrong</div>;
  }
  const { Media } = data;
  const { edges: characters } = Media.characters;

  return (
    <Layout>
      <section className='anime__page--header'>
        {Object.keys(Media.coverImage).length > 0 && (
          <img
            src={Media.coverImage.large}
            className='anime__page--header cover'
            alt={Media.title.userPreferred}
          />
        )}

        <h2 className='anime__page--header title'>
          {Media.title.userPreferred}
        </h2>
      </section>
      <Outlet context={{Media, characters}} />
    </Layout>
  );
}

export default AnimePage;
