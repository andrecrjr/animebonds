import React from "react";

function Cells({ data }) {
  console.log(data);
  return (
    <>
      {data.media.map((item, index) => (
        <Cell item={item} index={index} />
      ))}
    </>
  );
}

function Cell({ item, index }) {
  console.log(item.coverImage.medium);
  return (
    <section className="list__cell" key={index}>
      <img src={item.coverImage.large} className="list__cell--item" />
    </section>
  );
}

export default Cells;
