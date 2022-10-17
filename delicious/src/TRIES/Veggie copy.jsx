import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrappers, Card, Gradient } from "../styles/Styles";

import { recipesApiUrl } from "../tools/api";
import { RunApiCall } from "../tools/Funcs";
import Cards from "./Cards";

function Veggie() {
  const obj = {
    urlApi: `https://api.spoonacular.com/recipes/random?apiKey=f88bb0a3779247a59b3b0c18bd22b8ed&number=9&tags=vegetarian`,
    localStorageName: "veggie",
    resultColumnName: "recipe",
  };

  state = { result: [] };
  const result = RunApiCall(obj);
  this.setSatate(result, result);

  return (
    <Cards result={this.result} />

    // <Wrappers>
    //   <h3>Vegetarian Picks</h3>
    //   <Splide
    //     options={{
    //       perPage: 3,
    //       arrows: false,
    //       pagination: false,
    //       drag: "free",
    //       gap: "5rem",
    //     }}
    //   >
    //     {result.map((recipe) => {
    //       return (
    //         <SplideSlide key={recipe.id}>
    //           <Card>
    //             <p>{recipe.title}</p>
    //             <img src={recipe.image} alt={recipe.title} />
    //             <Gradient />
    //           </Card>
    //         </SplideSlide>
    //       );
    //     })}
    //   </Splide>
    // </Wrappers>
  );
}

export default Veggie;
