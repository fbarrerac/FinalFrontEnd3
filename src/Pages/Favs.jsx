import Card from "../Components/Card";

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs"));

  return (
    <>
      <div className="card-grid">
        {favs && favs.length > 0 ? (
          favs.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <h2>Sin favoritos añadidos</h2>
        )}
      </div>
      {favs && favs.length > 0 && (
        <button onClick={() => localStorage.clear()}>
          Borrar todos los favoritos
        </button>
      )}
    </>
  );
};

export default Favs;
