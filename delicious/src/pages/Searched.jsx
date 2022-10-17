import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "@splidejs/splide/dist/css/splide.min.css";

import Cards from "../components/Cards";

//import { recipesApiUrl } from "../tools/api";

function Searched() {
  let params = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    apiCall(params.search);
  }, [params.search]);

  const apiCall = async (name) => {
    const check = localStorage.getItem(`resultFor_${name}`);
    if (check) {
      setResult(JSON.parse(check));
    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=f88bb0a3779247a59b3b0c18bd22b8ed&query=${name}`;
      //const api = await fetch(`${recipesApi}/random?apiKey=f88bb0a3779247a59b3b0c18bd22b8ed`);
      const api = await fetch(url);
      const data = await api.json();
      localStorage.setItem(`resultFor_${name}`, JSON.stringify(data.results));
      setResult(data.results);
    }
  };

  return <Cards result={result} perPage={4} />;
}

export default Searched;
