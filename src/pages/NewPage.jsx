import { Component } from "react";

class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

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
            {items.map((item) => (
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
}

export default NewPage;
