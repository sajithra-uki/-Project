import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const searchCity = () => {
    if (city) navigate(`/destination/${city}`);
  };

  return (
    <div className="container">
      <h1>Explore Sri Lanka </h1>
      <input
        type="text"
        placeholder="Enter city (Kandy, Galle, Colombo...)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={searchCity}>Explore</button>
    </div>
  );
}

export default Home;
