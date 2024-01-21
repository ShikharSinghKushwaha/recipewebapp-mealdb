import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';
//import ShowDetails from './ShowDetails';
//import { useParam }from 'react-router-dom';
function Product({ data }){


    return (
      <div>
        

          <div className='main_container'>
        {data.map((item) => (
    <NavLink to={`/details/${item.strCategory}/`} style={{textDecoration:'none',margin:'10px'}}>
     <div key={item.idCategory} className='product_img' >
        <img src={item.strCategoryThumb} alt={item.strCategory} />
       <h2>{item.strCategory}</h2>
    </div>
    </NavLink>
))} 
</div>
      </div>
    );

}

export default Product;