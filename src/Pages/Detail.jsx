/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setDentist(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Detail Dentist {dentist.id}</h1>
      <h3>Nombre: {dentist.name}</h3>
      <h3>Email: {dentist.email}</h3>
      <h3>Telefono: {dentist.phone}</h3>
      <h3>Website: {dentist.website}</h3>
    </>
  );
};

export default Detail;
