import React from "react";
import { useParams } from "react-router-dom";
import './Product.css'
function ShowDetails({ data }) {
  const { strCategory } = useParams();

  const filteredCategory = data.filter((category) => category.strCategory === strCategory);

  return (
    <div>
     <div className="parent_container">
      {filteredCategory.map((category) => (
        <div key={category.idCategory}  className="child_container">
        <img  src={category.strCategoryThumb} alt={category.strCategory} className="product_img"/>
        <div className="description" style={{
            maxWidth:'550px',
        }}>
        <h1> Serial No-{category.idCategory}</h1>
        <h2>Dish Name - {category.strCategory}</h2>
        <p style={{fontSize:'1em',
           fontWeight:'normal',}}>Description : {category.strCategoryDescription}</p>

        </div>
       </div>
      ))}
    </div>
    </div>
  );
}

export default ShowDetails;
