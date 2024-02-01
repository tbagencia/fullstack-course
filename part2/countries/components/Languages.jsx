const Languages = ({ data }) => {
    const arrLanguages = Object.values(data);
    return (
      <div>
        <ul>
          {arrLanguages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Languages