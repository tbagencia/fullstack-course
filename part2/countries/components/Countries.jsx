 
  import Country from "./Country";
  import Detail from "./Detail";
  
  const Countries = ({ countries, filterText, setfn }) => {
    const arrCountries =
      filterText != ""
        ? countries.filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .search(filterText.toLowerCase()) >= 0
          )
        : [];
    
  
    arrCountries.sort((a, b) => {
      const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    });
  
    return arrCountries.length < 10 ? (
      arrCountries.length === 1 ? (
        <Detail data={arrCountries[0]} />
      ) : (
        arrCountries.map((country) => (
          <Country key={country.cca2} data={country} setfn={setfn} />
        ))
      )
    ) : (
      <p>Too many matches, specify another filter</p>
    );
  };

  export default Countries