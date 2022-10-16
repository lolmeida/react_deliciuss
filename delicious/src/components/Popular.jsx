import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Wrappers, Card, Gradient } from "../styles/Styles";
import {RunApiCall} from '../tools/Funcs'

function Popular() {
  const obj = {
    urlApi:
      "https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9",
    localStorageName: "popular",
  }; 
  
  const popular = RunApiCall(obj);

  // const [popular, setPopular] = useState([]);
  // useEffect(() => {
  //   apiCall();
  // }, []);

  // const apiCall = async () => {
  //   const check = localStorage.getItem("popular");
  //   if (check) {
  //     setPopular(JSON.parse(check));
  //   } else {
  //     const url =
  //       "https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9";
  //     //const api = await fetch(`${recipesApi}/random?apiKey=${process.env.API_KEY}`);
  //     const api = await fetch(url);
  //     const data = await api.json();
  //     localStorage.setItem("popular", JSON.stringify(data.recipes));
  //     setPopular(data.recipes);
  //     //console.log(data);
  //   }
  // };

  return (
    <Wrappers>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
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

export default Popular;
