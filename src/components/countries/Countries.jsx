import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";



export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries, setVisitedCountries] = useState([]); 
  const handleVisitedCountry = country => {
    console.log('add this to your visited country');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedFlags = flag => {
    const newFlag = [...visitedFlags, flag];
    setVisitedFlags(newFlag);
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* Visited Countries */}
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      {/* Visited Countries Flag */}
      <div className="img-container">
                    {
                      visitedFlags.map((flag, idx) => <img width={'100%'} key={idx} src={flag}></img>)
                    }

      </div>

{/* Displayed Countries */}
      <div className="country-container">
        {
          countries.map((country) => (
          <Country
          handleVisitedCountry = {handleVisitedCountry} 
          key={country.cca3} 
          country={country}
          handleVisitedCountry = {handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
          ></Country>))
        }
      </div>
    </div>
  );
}

// country cca3 is unique id to get rid of react warning.
