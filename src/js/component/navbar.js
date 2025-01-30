import React, { useContext, useState } from "react"; // Importa React junto con los hooks useContext y useState
import { Link } from "react-router-dom"; // Importa Link para navegación sin recarga de página
import { Context } from "../store/appContext"; // Importa el contexto global para acceder al estado global

// Componente Navbar para mostrar la barra de navegación con favoritos
export const Navbar = () => {
    // Extrae el estado global y las acciones del contexto
    const { store, actions } = useContext(Context);

    // Estado local para controlar la visibilidad del menú de favoritos
    const [showFavorites, setShowFavorites] = useState(false);

    // Función que elimina un elemento de la lista de favoritos
    const handleRemoveFavorite = (item) => {
        actions.toggleFavorite(item); // Llama a la acción global para agregar o quitar el favorito
    };

    return (
        // Contenedor principal del componente de navegación
        <nav className="navbar navbar-light bg-light d-flex mb-3">
            
            {/* Logo que redirige al inicio */}
            <Link to="/">
                <img
                    src="https://img.icons8.com/?size=100&id=lYpJCJN3hGwm&format=png&color=000000" // URL del ícono
                    alt="Star Wars Logo" // Texto alternativo para la imagen
                    style={{ width: "85px", height: "auto", cursor: "pointer", marginLeft: "75px" }} // Estilización del logo
                    className="navbar-brand" // Clase Bootstrap para el branding
                />
            </Link>

            {/* Dropdown para mostrar los favoritos */}
            <div className="dropdown">
                <button
                    className="btn btn-primary me-5 dropdown-toggle" // Botón de Bootstrap con estilos adicionales
                    type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    onClick={() => setShowFavorites(!showFavorites)} // Cambia el estado para mostrar u ocultar favoritos
                >
                    {/* Muestra la cantidad de favoritos entre paréntesis si existen */}
                    Favorites {store.favorites.length > 0 && `(${store.favorites.length})`}
                </button>

                {/* Menú desplegable con la lista de favoritos */}
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {/* Renderiza los favoritos si hay elementos, si no muestra "Empty" */}
                    {store.favorites.length > 0 ? (
                        store.favorites.map((fav, index) => (
                            <li key={index} className="dropdown-item flex justify-content-between align-items-center">
                                {/* Muestra el nombre del favorito */}
                                <span>{fav.name}</span>
                                {/* Botón para eliminar un favorito */}
                                <button
                                    className="btn btn-light btn-sm ms-3"
                                    onClick={() => handleRemoveFavorite(fav)}
                                >
                                    <i className="fa-solid fa-trash"></i> {/* Ícono de eliminación */}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>Empty</li> // Mensaje cuando la lista está vacía
                    )}
                </ul>
            </div>
        </nav>
    );
};


