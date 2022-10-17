import React from "react";
import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrappers, Card, Gradient } from "../styles/Styles";

function Cards({ result, title, perPage }) {
  return (
    <Wrappers>
      <h3>{title}</h3>
      <Splide
        options={{
          perPage: { perPage },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {result.map((element) => {
          return (
            <SplideSlide key={element.id}>
              <Card>
                <Link to={`/recipe/${element.id}`}>
                  <p>{element.title}</p>
                  <img src={element.image} alt={element.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrappers>
  );
}

export default Cards;
