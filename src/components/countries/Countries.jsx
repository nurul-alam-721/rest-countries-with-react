import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
   const countries = use(countriesPromise);
   const [visitedCountries, setVisitedCountries] = useState([]);
   const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries =(country)=>{
        const updatedVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(updatedVisitedCountries);
    }
    const handleVisitedFlags = (flag) =>{
       const updatedVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(updatedVisitedFlags);
    }
    
    return (
        <div>
            <h1>Total Countries in the World: {countries.length}</h1>
            <h2>Traveled So Far: {visitedCountries.length}</h2>
           <ol>
          <div className={visitedCountries.length>0 && 'visited'}>
          {
                visitedCountries.map(country=>
                   <li key={country.cca3} >{country.name.common}</li>              
               )
            }
          </div>
           <div className={visitedFlags.length > 0 && 'visited'}>
           {
             visitedFlags.map((flag, index)=>
             <img src={flag.flags.png} alt="" className='country-flag' key={index}/>
            ) 
           }
           </div>
           </ol>
           
           
           <div className='countries'>
           {
                countries.map(country=><Country
                    key={country.cca3}
                    country={country} 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;