import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ANIME_PAGE } from "../../helper";
import { useHistory, useParams } from "react-router-dom";

function AnimePage(props) {
  const location = useParams();

  const { loading, data, error } = useQuery(ANIME_PAGE, {
    variables: { animeId: location.id || 0 },
  });
  const history = useHistory();

  const body = document.querySelector("body");

  useEffect(() => {
    if (body.clientWidth < 661) {
      body.classList.toggle("open--anime-page");
    }
  }, [body]);

  const closePage = (e) => {
    e.preventDefault();
    body.classList.remove("open--anime-page");
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.push("/");
  };

  if (loading) {
    return <div className="anime__page">Loading anime, just wait a bit!</div>;
  }

  if (error) {
    return <div className="anime__page">Whoops something went wrong</div>;
  }
  const { Media } = data;
  console.log(Media);
  return (
    <div className="anime__page">
      <div className="anime__page--container">
        <span className="anime__page--close" onClick={closePage}>
          X
        </span>
        <section className="anime__page--header">
          {Object.keys(Media.coverImage).length > 0 && (
            <img
              src={Media.coverImage.large}
              className="anime__page--header cover"
              alt={Media.title.userPreferred}
            />
          )}

          <h2 className="anime__page--header title">
            {Media.title.userPreferred}
          </h2>
        </section>
        <section className="anime__page--anime">
          <section className="anime__page--anime--description">
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: `${Media.description}` }}
            ></p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default AnimePage;
