import { Button } from "react-bootstrap"
import React from "react";

function Search({query,setQuery,handleSearch}) {
    return (
    
            <div className="custom-bg p-5">
                <h2> Search for a movie, TV series...</h2>
                <input type="text" className="form-control mt-2"
                 placeholder="Search Movies, TV Series..." 
                 value={query}
                 onChange={(e)=>setQuery(e.target.value)}
        
                 />
                <button className="btn btn-primary mt-4" onClick={query && handleSearch}>Search</button>
            </div>
    

    )
}

export default Search;