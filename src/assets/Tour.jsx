import React from "react";
import { useState } from "react";

const Tour = ({ id, info, image, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(info.substring(0, 15));

  const readMoreBtn = () => {
    if (readMore) {
      setReadMore(false);
      return;
    }
    setReadMore(true);
  };

  return (
    <article className="single-tour">
      <img src={image} className="img" alt={name} />
      <span className="tour-price">$ {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button className="info-btn" onClick={readMoreBtn} type="button">
            {readMore ? "show less" : "read more"}
          </button>
        </p>

        <button
          className="btn btn-block delete-btn "
          onClick={() => {
            removeTour(id);
          }}
          type="button"
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
