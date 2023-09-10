import { useState } from "react";
import "./Country.css";

const country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {
  // console.log(country);
  const { name, flags, population, area, cca2 } = country;

  const [visited, setVisited] =useState(false)
  const handleVisited = () =>{
    setVisited(!visited)
  }

  

  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color: visited ? 'white' : 'green'}}>{name?.common}</h3>
      <img height={'200px'} width={'100%'} src={flags?.png} alt={flags?.alt} />
      <p>Area: {area} sq.km</p>
      <p>Population: {population}</p>
      <p><small>Code: {cca2}</small></p>


      <button onClick={() => handleVisitedCountry(country)}>Mark visited</button><br></br> 
      {/* //onClickCapture={() => handleVisitedFlag(country.flag)} */}
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>

      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited' : 'Yet not.'}
    </div>
  );
};

export default country;
