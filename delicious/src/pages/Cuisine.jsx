import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cards from "../components/Cards";
//import { recipesApiUrl } from "../tools/api";

function Cuisine() {
  let params = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    apiCall(params.cuisine);
  }, [params.cuisine]);

  const apiCall = async (cuisineName) => {
    const check = localStorage.getItem(`cuisine_${cuisineName}`);
    if (check) {
      setResult(JSON.parse(check));
    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=f88bb0a3779247a59b3b0c18bd22b8ed&cuisine=${cuisineName}`;
      const api = await fetch(url);
      const data = await api.json();
      localStorage.setItem(
        `cuisine_${cuisineName}`,
        JSON.stringify(data.results)
      );
      setResult(data.results);
    }
  };

  return <Cards result={result} perPage={4} title={`Cuisine ...`} />;
}

export default Cuisine;
