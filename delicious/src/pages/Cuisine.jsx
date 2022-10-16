import React, { useEffect, useState } from "react";
import { Card, Grid} from "../styles/Styles";
import { useParams } from "react-router-dom";
//import { motion } from "framer-motion";



function Cuisine() {
let params = useParams();
  const [cuisine, setCuisine] = useState([]);
  useEffect(() => {
    apiCall(params.type);
  }, [params.type]);

  const apiCall = async (cuisineName) => {
    const check = localStorage.getItem(`cuisine_${cuisineName}`);
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=88cbb41354b04d13858d7f377e338113&cuisine=${cuisineName}`;
      //const api = await fetch(`${recipesApi}/random?apiKey=${process.env.API_KEY}`);
      const api = await fetch(url);
      const data = await api.json();
      localStorage.setItem(
        `cuisine_${cuisineName}`,
        JSON.stringify(data.results)
      );
      setCuisine(data.results);
      console.log(data.results);
    }
  }


  return (
    <Grid>
    {cuisine.map(item =>{
      return (
        <Card key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </Card>
      )
    })}
  </Grid>
  )
}

export default Cuisine
