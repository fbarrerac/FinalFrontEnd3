//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/ThemeContext";

const Navbar = () => {
  const { themeToggle } = useContext(ThemeContext);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/contacto">
          <li>Contacto</li>
        </Link>
        <Link to="/favoritos">
          <li>Favoritos</li>
        </Link>
      </ul>

      <button
        onClick={() => {
          themeToggle();
        }}
      >
        Cambiar tema
      </button>
    </nav>
  );
};

export default Navbar;
