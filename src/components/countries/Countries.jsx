import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
   const countries = use(countriesPromise);
   const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries =(country)=>{
        const updatedVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(updatedVisitedCountries);
    }
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h3>Travelled So Far: {visitedCountries.length}</h3>
           <ol>
           {
                visitedCountries.map(country=>
                   <li>{country.name.common}</li>
               )
            }
           </ol>
           <div className='countries'>
           {
                countries.map(country=><Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;