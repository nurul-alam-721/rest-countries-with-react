import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
     const [visited, setVisited] = useState(false);
   const handleVisited = () =>{
    // if(visited){
    //     setVisited(false);
    // }
    // else setVisited(true);
    setVisited(!visited);
   {!visited && handleVisitedCountries(country)};
   {!visited &&  handleVisitedFlags(country)};
  ;
   }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h2>Name: {country.name.common}</h2>
             <img src={country.flags.png} alt="" className='country-flag'/>
            <p>{country.independent? 'An Independent Country': 'Not an Independent Country'}</p>
            <p>Total Population: {country.population}</p>
            <button onClick={handleVisited} className={visited && 'btn-visited'}>{visited? "Visited" : "Not Visted"}</button>
        </div>
    );
};

export default Country;