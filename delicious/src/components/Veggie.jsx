import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Wrappers, Card, Gradient } from "../styles/Styles";

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {apiCall();}, []);

  const apiCall = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const url =
        "https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9&tags=vegetarian";
      //const api = await fetch(`${recipesApi}/random?apiKey=${process.env.API_KEY}`);
      const api = await fetch(url);
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      //console.log(data);
    }
  };

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
