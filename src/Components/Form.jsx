import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [pass, setPass] = useState(false);

  const validations = () => {
    if (data.name.trim().length == 0 || data.email.length == 0) {
      setError("Complete los campos");
    } else if (data.name.trim().length < 5) {
      setError("Ingrese un nombre valido");
    } else {
      setError("");
      setPass(true);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validations();
        }}
      >
        <input
          type="text"
          placeholder="Nombre completo"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          disabled={pass}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          disabled={pass}
        />

        <button>Enviar</button>
      </form>

      {error && <p>{error}</p>}
      {pass && (<p>Gracias {data.name}, te contactaremos cuanto antes via email</p>)}
    </>
  );
};

export default Form;
