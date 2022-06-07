import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default (props) => {
  const navigate = useNavigate();
  const loc = useLocation()

  const body = document.querySelector("body");
  useEffect(() => {
    if (body.clientWidth < 661) {
      body.classList.toggle("open--anime-page");
    }
  }, [body]);

  const closePage = (e) => {
    e.preventDefault();
    body.classList.remove("open--anime-page");
    document.querySelector("header").classList.remove("larger--height");
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate(
      `/browser?anime=${encodeURIComponent(
        loc.state && 
        Object.keys(loc.state).length > 0
          ? loc.state.animeBack
          : null
      )}`
    );
  };
  
  return (
    <div className='anime__page'>
      <div className='anime__page--container'>
        {loc.state !== null ? (
          <span className='anime__page--close' onClick={goBack}>
            ⬅
          </span>
        ) : (
          <span className='anime__page--close' onClick={closePage}>
            X
          </span>
        )}

        {props.children}
      </div>
    </div>
  );
};
