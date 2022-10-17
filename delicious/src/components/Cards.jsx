import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrappers, Card, Gradient } from "../styles/Styles";

function Cards({ result, perPage }) {
  return (
    <Wrappers>
      <h3>Popular Picks</h3>
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
                <p>{element.title}</p>
                <img src={element.image} alt={element.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrappers>
  );
}

export default Cards;
