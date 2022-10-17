
import  { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";


//urlApi,localStorageName
export function RunApiCall(obj) {
  const [result, setResult] = useState([]);
  useEffect(() => {
     apiCall();
  }, []);

  const urlApi = obj.urlApi;
  let localStorageName = (obj.name)? obj.name: obj.localStorageName;
  //let name = obj.name;
  const apiCall = async (name) => {
    const check = localStorage.getItem(localStorageName);
    if (check) {
      setResult(JSON.parse(check));
    } else {
      
      const api = await fetch(urlApi);
      const data = await api.json();
      localStorage.setItem(localStorageName, JSON.stringify(data.recipes));
      setResult(data["recipe"]);
    }
  };
  console.log(result);
  return result;
}

