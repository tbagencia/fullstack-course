const Country = ({ data, setfn }) => {
    const showCountry = () => {
      console.log("show info about", data.name.common)
      setfn(data.name.common)
    };
  
    return (
      <div>
        {data.name.common} <button onClick={showCountry}>show</button>
      </div>
    );
  };

  export default Country