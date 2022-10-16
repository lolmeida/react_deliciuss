
import  { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";


//  const urlApi =
//    "https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9";

//urlApi,localStorageName
export function RunApiCall(obj) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    apiCall();
  }, []);

  const urlApi = obj.urlApi;
  const localStorageName = obj.localStorageName;
  const apiCall = async () => {
    const check = localStorage.getItem(localStorageName);
    if (check) {
      setResult(JSON.parse(check));
    } else {
      //const api = await fetch(`${recipesApi}/random?apiKey=${process.env.API_KEY}`);
      const api = await fetch(urlApi);
      const data = await api.json();
      localStorage.setItem(localStorageName, JSON.stringify(data.recipes));
      setResult(data.recipes);
    }
  };
  console.log(result);
  return result;
}

