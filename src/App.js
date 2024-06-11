import "./App.css";

const RestrauntCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="card-img"
        src="https://b.zmtcdn.com/data/pictures/8/20983528/73a8a38538967be0235288f5251f20c2.png?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        alt="img"
      ></img>
      <h3>{props.restName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.timing}</h4>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard
          restName="Meghana food"
          cuisine="Biryani,North-Indian, Asian"
          rating="4.4 stars"
          timing="45 minutes"
        />
        <RestrauntCard
          restName="KFC"
          cuisine="Biryani,North-Indian"
          rating="4.5 stars"
          timing="40 minutes"
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
