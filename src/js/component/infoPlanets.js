import React from "react"; // Importación de la librería React
import "../../styles/home.css"; // Importación de estilos personalizados
import { Link } from "react-router-dom"; // Importación de componente Link para navegación interna (aunque aquí no se usa)

export const InfoPlanets = ({ planet, uid }) => { 
  // Log para verificar el objeto `planet` recibido
  console.log({ planet });
  // Log para verificar el `uid` recibido
  console.log({ uid });
  // Log para comprobar la URL de la imagen generada
  console.log(`https://starwars-visualguide.com/assets/img/${uid}.jpg`);
  // Log para revisar las propiedades del planeta
  console.log(planet.properties);

  return (
    // Tarjeta principal para mostrar la información de un planeta
    <div className="card mb-3 mx-auto" style={{ width: "90rem" }}>
      <div className="row g-0">
        
        {/* Sección para mostrar la imagen del planeta */}
        <div className="col-md-4">
          <img
            src={
              // Ternario que verifica si `uid === "1"`
              uid === "1"
                ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
                : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
            }
            className="img-fluid rounded-start" // Clase Bootstrap para hacer la imagen fluida y redondeada
            alt="Planet" // Texto alternativo
          />
        </div>

        {/* Sección para mostrar los detalles del planeta */}
        <div className="col-md-8">
          <div className="card-body">
            {/* Título con el nombre del planeta */}
            <h1 className="card-title">{planet.properties?.name}</h1>

            {/* Descripción del planeta si existe */}
            <p className="card-text">{planet.description}</p>

            {/* Lista con propiedades del planeta */}
            <p className="card-text">
              <ul className="text-gray-300 space-y-1">
                <li>
                  <strong>Climate:</strong> {planet.properties?.climate}
                </li>
                <li>
                  <strong>Created:</strong> {planet.properties?.created}
                </li>
                <li>
                  <strong>Diameter:</strong> {planet.properties?.diameter}
                </li>
                <li>
                  <strong>Edited:</strong> {planet.properties?.edited}
                </li>
                <li>
                  <strong>Films:</strong> {planet.properties?.films}
                </li>
                <li>
                  <strong>Gravity:</strong> {planet.properties?.gravity}
                </li>
                <li>
                  <strong>Orbital Period:</strong> {planet.properties?.orbital_period}
                </li>
                <li>
                  <strong>Population:</strong> {planet.properties?.population}
                </li>
                <li>
                  <strong>Residents:</strong> {planet.properties?.residents}
                </li>
                <li>
                  <strong>Rotation Period:</strong> {planet.properties?.rotation_period}
                </li>
                <li>
                  <strong>Surface Water:</strong> {planet.properties?.surface_water}
                </li>
                <li>
                  <strong>Url:</strong> {planet.properties?.url}
                </li>
                <li>
                  <strong>Terrain:</strong> {planet.properties?.terrain}
                </li>
                <li>
                  <strong>Id:</strong> {planet._id}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



