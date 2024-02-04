import React , {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import './Product.css';


function ShowSearchDetails(){

    const {strCategory,strMeal, idMeal } = useParams();
    const [list, setList] = useState([]);
  useEffect(() => {
    const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setList(data.meals || []);
        console.log(data.meals)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  let url = `${strCategory}/${strMeal}/${idMeal}`;
    const filterData = list.filter((id) => id.strCategory && id.strMeal && id.idMeal === url);

  
const allIngrediants = ["strIngredient1" , "strIngredient2" , "strIngredient3", "strIngredient4" ,"strIngredient5", "strIngredient6" ,"strIngredient7","strIngredient8", "strIngredient9","strIngredient10","strIngredient11","strIngredient12", "strIngredient13","strIngredient14","strIngredient15", "strIngredient16","strIngredient17","strIngredient18", "strIngredient19", "strIngredient20"];

const allMeasures = ["strMeasure1" , "strMeasure2" , "strMeasure3", "strMeasure4" ,"strMeasure5", "strMeasure6" ,"strMeasure7","strMeasure8", "strMeasure9","strMeasure10","strMeasure11","strMeasure12", "strMeasure13","strMeasure14","strMeasure15", "strMeasure16","strMeasure17","strMeasure18", "strMeasure19", "strMeasure20"];


    return (
    <div>
    <div>
    {filterData ? 
    list.map((li) => (
    <div className="parent_container">

      <div key={li.idMeal} className="child_container">
    
    <div className="meal_img">
    
    <img src={li.strMealThumb}
     alt={strMeal + "loading img"} className="product_img"/>
    </div>
    <div className="description" style={{
            maxWidth:'550px',}}>
      <h1>Meal : {li.strMeal}</h1>
      <span style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}}>
      <h3>Category : {li.strCategory}</h3>
      <h3>Area : {li.strArea}</h3>
      </span>
     <h2>Ingrediants :<small style={{fontSize:'17px',color:'rgb(20,126,251)'}}> {allIngrediants.map(te => li[te] ? li[te] : "").filter(item => item !== "").join(",")}</small></h2>
     
     <h2>Measure :<small style={{fontSize:'17px',color:'rgb(20,126,251)'}}> {allMeasures.map(te => li[te] ? li[te] : "").filter(item => item !== "").join(",")}</small></h2>
     
      <p>Instruction : {li.strInstructions}</p>
    </div>
   </div>
   </div>
    ))
  :null
  }
  </div>
      
    </div>
    );
}

export default ShowSearchDetails;
