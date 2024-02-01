import axios from "axios";
import { useEffect, useState } from "react";
import Countries from "../components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  //const [filterCoutries, setFilterCountries] = useState([])
  const [filterText, setFilterText] = useState("");

  const urlJson = "https://restcountries.com/v3.1/all";
  const hook = () => {
    console.log("effect");
    axios.get(urlJson).then((response) => {
      console.log("promise fullfilled");
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  //console.log(countries);

  return (
    <>
      <form>
        find countries
        <input
          placeholder="Write a letter..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </form>
      <Countries countries={countries} filterText={filterText} setfn={setFilterText}/>
    </>
  );
}

export default App;
