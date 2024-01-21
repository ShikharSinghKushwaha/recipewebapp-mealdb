import React from "react";
import { NavLink } from "react-router-dom";

function SearchBtn(){
    return(
        <div>
          <NavLink to="/search" className='nav_link searchText' >Search Meals</NavLink>

        </div>
    );
}

export default SearchBtn;