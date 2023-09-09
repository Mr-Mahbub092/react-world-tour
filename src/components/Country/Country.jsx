import './Country.css';

const country = ({country}) => {

  console.log(country);
  const {name, flags, population, area} = country;

  return (
    <div className='country'>
      <h3>{name?.common}</h3>
      <img src={flags?.png} alt={flags?.alt} />
      <p>Area: {area} sq.km</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default country;