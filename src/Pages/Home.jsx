/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import Card from "../Components/Card";

const Home = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h1>Home, el tema es: {theme}</h1>
      <div className="card-grid">
        {data && data.map((item) => <Card key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
