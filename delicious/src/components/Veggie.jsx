//import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Wrappers, Card, Gradient } from "../styles/Styles";
import { RunApiCall } from "../tools/Funcs";

function Veggie() {

const obj = {
  'urlApi':"https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9&tags=vegetarian",
  'localStorageName': "veggie",
};

const veggie = RunApiCall(obj);

  return (
    <Wrappers>
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrappers>
  );
}

export default Veggie;
