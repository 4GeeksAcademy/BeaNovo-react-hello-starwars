import React, { useContext } from "react"; 
import { Link } from "react-router-dom"; // Importa el componente Link para navegar entre rutas
import { Context } from "../store/appContext"; // Importa el contexto global de la aplicación

// Componente que representa una tarjeta genérica (Card) con información de personajes, planetas o vehículos
export const Card = ({ name, uid, category }) => {
  const { store, actions } = useContext(Context); // Accede al estado global y las acciones

  // Verifica si el elemento actual ya está en la lista de favoritos
  const isFavorite = store.favorites.some((fav) => fav.uid === uid);

  // Maneja la acción de agregar o eliminar favoritos
  const handleFavorite = () => {
    actions.toggleFavorite({ name, uid, category }); // Llama a toggleFavorite para agregar o eliminar el elemento
  };

  return (
    <div className="text-center mt-5">
      <div className="card" style={{ width: "18rem" }}> {/* Define el tamaño de la tarjeta */}
        <img
          // Imagen condicional: si es el planeta Tatooine, usa una imagen fija; de lo contrario, usa la URL general
          src={
            category === "planets" && uid === "1"
              ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
              : `https://starwars-visualguide.com/assets/img/${category}/${uid}.jpg`
          }
          className="card-img-top"
          alt={name} // Texto alternativo para la imagen
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5> {/* Nombre del elemento */}
          
          {/* Enlace para ver más detalles del elemento */}
          <Link to={`/${category}/${uid}`} className="btn btn-primary me-3">
            Learn More
          </Link>

          {/* Botón para agregar o quitar favoritos */}
          <button
            onClick={handleFavorite}
            className={`btn ms-2 ${isFavorite ? "btn-warning" : "btn-warning"}`}
          >
            {/* Icono del corazón que cambia según el estado de favorito */}
            <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};


