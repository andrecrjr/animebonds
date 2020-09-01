import React from "react";
import Row from "../Row";
import { useQuery } from "@apollo/client";
import { ANIME_CATEGORIES } from "../../helper";

function ListRows() {
  const { loading, data } = useQuery(ANIME_CATEGORIES);
  console.log(data);
  if (loading) {
    return <h1>Loading data...</h1>;
  }
  return (
    <section className="list__row">
      <Row title="Action" data={data ? data["action"] : null} />
      <Row title="Romance" data={data ? data["romance"] : null} />
      <Row title="Sci-fi" data={data ? data["scifi"] : null} />
    </section>
  );
}

export default ListRows;
