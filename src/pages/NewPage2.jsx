import { useState, useEffect } from "react";
import axios from "axios";

function NewPage2() {
  const [data, setData] = useState({ hits: [] });
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function getFetchUrl() {
      return "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
    }
    async function fetchData() {
      try {
        const result = await axios(getFetchUrl());
        setData(result.data);
        setIsLoaded(true);
      } catch (err) {
        setError(err);
        setIsLoaded(true);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="page">
        <p>Error: {error.message}</p>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="page">
        <p>Loading…</p>
      </div>
    );
  } else {
    return (
      <div className="page">
        <h1>Коктейли</h1>
        <ul
          style={{
            color: "white",
            listStyle: "none",
            display: "grid",
            gap: "15px",
          }}
        >
          {data.drinks.map((item) => (
            <li
              key={item.idDrink}
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <div>{item.strDrink}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NewPage2;
