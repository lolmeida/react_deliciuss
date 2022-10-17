import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Button, DetailWrappers, Info } from "../styles/Styles";

//import { recipesApiUrl } from "../tools/api";
//import { RunApiCall } from "../tools/Funcs";

function Recipe() {
  let params = useParams();
  const [result, setResult] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    apiCall(params.recipe);
  }, [params.recipe]);

  const apiCall = async (name) => {
    const check = localStorage.getItem(`resultFor_${name}`);
    if (check) {
      setResult(JSON.parse(check));
    } else {
      const url = `https://api.spoonacular.com/recipes/${params.recipe}/information?apiKey=f88bb0a3779247a59b3b0c18bd22b8ed`;

      const api = await fetch(url);
      const data = await api.json();
      localStorage.setItem(`resultFor_${name}`, JSON.stringify(data));
      setResult(data);
    }
  };

  return (
    <DetailWrappers>
      {console.log(result.extendedIngredients)}
      <div>
        <h2>{result.title}</h2>
        <img src={result.image} alt={result.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <h4>Summary:</h4>
            <h5 dangerouslySetInnerHTML={{ __html: result.summary }} />
            <h4>Instructions:</h4>
            <h4 dangerouslySetInnerHTML={{ __html: result.instructions }} />
          </div>
        )}
        

        {activeTab === "ingredients" && (
          <div>
          
            <h4>Ingredients:</h4>
            <ul>
              {result.extendedIngredients.map((e) => (
                <li key={e.id}>{e.original}</li>
              ))}
            </ul>
          </div>
        )}
      </Info>
    </DetailWrappers>
  );
}

export default Recipe;
