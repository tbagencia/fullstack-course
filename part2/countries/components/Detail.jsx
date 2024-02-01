import Languages from "./Languages";
import Weather from "./Weather";

const Detail = ({ data }) => {
    const name = data.name.common;
    const capital = data.capital;
    const population = data.population;
    const languages = data.languages;
    const flag = data.flags;
    
    return (
      <div>
        <h1>{name}</h1>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h2>languages</h2>
        <Languages data={languages} />
        <img src={flag.png} alt={flag.alt} width="150" />
        <Weather data={data} />
      </div>
    );
  };

  export default Detail