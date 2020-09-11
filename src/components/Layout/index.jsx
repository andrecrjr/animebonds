import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default (props) => {
  const history = useHistory();
  console.log(history);

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

  const goBack = (e) => {
    e.preventDefault();
    history.push(
      `/browser?anime=${encodeURIComponent(
        Object.keys(history.location.state).length > 0
          ? history.location.state.animeBack
          : null
      )}`
    );
  };

  return (
    <div className="anime__page">
      <div className="anime__page--container">
        {typeof history.location.state !== "undefined" ? (
          <span className="anime__page--close" onClick={goBack}>
            ⬅
          </span>
        ) : (
          <span className="anime__page--close" onClick={closePage}>
            X
          </span>
        )}

        {props.children}
      </div>
    </div>
  );
};
