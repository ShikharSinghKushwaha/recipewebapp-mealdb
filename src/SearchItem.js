import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Product.css';


function Search() {
  const [text, setText] = useState("chicken");
 // const [loading, setLoading] = useState(false)
  const [list, setList] = useState([]);

  useEffect(() => {
    const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setList(data.meals || []);
      //  setLoading(true);
      })
      .catch((error) => {
        <h2>Not found</h2>
      });
  }, [text]);

  const styled = {
  display:'flex',
  aligItem:'center',
  justifyContent:'center',
  flexWrap:'wrap',
  flexDirection:'row',
  width:'100%',
  margin:'auto',
}


  return (
    <div>
      <div class="search_box">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search Item By Name"
      />
      </div>
      <div className="search_container" style={styled}>
        
      {list.map((li) => (

         <NavLink to={`/recipedetails/${li.strCategory}/${li.strMeal}/${li.idMeal}`}  style={{textDecoration:'none',margin:'10px'}}>
          <div className="product_img searched_item" key={li.idMeal}>
            <div className="image">
            <img src={li.strMealThumb} alt={li.strMeal}/>
            </div>
            <div style={{lineHeight:'33px',marginTop:'13px'}}>
            <h3>Meal : {li.strMeal}</h3>
            <h4>Category : {li.strCategory}</h4>
          </div>
          </div>
         </NavLink>
      ))}
    </div>
    </div>
  );
}

export default Search;
