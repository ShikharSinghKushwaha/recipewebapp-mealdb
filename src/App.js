import './App.css';
import Product from './Product.js';
import ShowDetails from './ShowDetails.js';
import { useState,useEffect } from 'react';
import Search from './SearchItem.js';
import ShowSearchDetails from './SearchedDetails.js'
import SearchBtn from './Search.js';
import { BrowserRouter as Router, Routes,Route, NavLink } from 'react-router-dom';

function App() {
  const [photos,setPhotos] = useState([]);
useEffect( () => {
   const apiKey = "https://www.themealdb.com/api/json/v1/1/categories.php";
   try{
   const fetchApi  = fetch(apiKey)
   fetchApi
   .then(resp => {
    return resp.json();
   }).then(data => {
    console.log(data)
    setPhotos(data.categories);
    console.log(data.categories);
   })
   }catch(error){
    console.log(error);
   }
},[])
  return (
    <div>
   <Router>
    <div className='navLink-container'>
      <NavLink to="/" className='nav_link'>
       <h1 className='logo'>LeciousDishes.com	&#x1f60b; </h1>
       </NavLink>
      <SearchBtn />
      </div>
     <Routes>

     <Route path="/" element={ <Product data={photos}/>} />
     <Route path="/details/:strCategory" element={<ShowDetails data={photos}/>}/>
     <Route path="/search" element={ <Search/>} />
     <Route path="/recipedetails/:strCategory/:strMeal/:idMeal" element={<ShowSearchDetails />}/>
     
     </Routes>
   </Router>
       
    </div>
  );
}

export default App;
