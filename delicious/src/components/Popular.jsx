import "@splidejs/splide/dist/css/splide.min.css";
import { RunApiCall } from "../tools/Funcs";
import Cards from './Cards';

function Popular() {
  const obj = {
    urlApi: `https://api.spoonacular.com/recipes/recipes/random?apiKey=f88bb0a3779247a59b3b0c18bd22b8ed&number=9`,
    localStorageName: "popular",
    resultColumnName: "recipe",
  };

  const result = RunApiCall(obj);

  return <Cards result={result} perPage={3} />;
}

export default Popular;
