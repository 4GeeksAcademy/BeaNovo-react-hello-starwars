import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

// Componente para mostrar la información detallada de un personaje
export const InfoCard = ({ character, uid }) => {
  // Logs para depurar información del personaje y su uid
  console.log("infocard");
  console.log({ character });
  console.log({ uid });
  console.log(`https://starwars-visualguide.com/assets/img/${uid}.jpg`);

  return (
    // Contenedor principal de la tarjeta con márgenes y tamaño definido
    <div className="card mb-3 mx-auto" style={{ width: "90rem" }}>
      <div className="row g-0">
        {/* Columna para la imagen del personaje */}
        <div className="col-md-4">
          {/* Imagen del personaje obtenida mediante el uid */}
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            className="img-fluid rounded-start"
            alt="Character"
          />
        </div>

        {/* Columna para la información textual del personaje */}
        <div className="col-md-8">
          <div className="card-body">
            {/* Nombre del personaje */}
            <h1 className="card-title">{character.properties?.name}</h1>

            {/* Descripción del personaje */}
            <p className="card-text">{character.description}</p>

            {/* Lista con propiedades del personaje */}
            <p className="card-text">
              <ul className="text-gray-300 space-y-1">
                <li>
                  <strong>Height:</strong> {character.properties?.height}
                </li>
                {/*character.properties?.name: Verifica si character.properties existe antes de acceder a name, para evitar errores si no hay datos.Renderizado condicional (?): Previene errores al intentar acceder a propiedades inexistentes.*/}
                <li>
                  <strong>Mass:</strong> {character.properties?.mass}
                </li>
                <li>
                  <strong>Hair Color:</strong> {character.properties?.hair_color}
                </li>
                <li>
                  <strong>Skin Color:</strong> {character.properties?.skin_color}
                </li>
                <li>
                  <strong>Eye Color:</strong> {character.properties?.eye_color}
                </li>
                <li>
                  <strong>Birth Year:</strong> {character.properties?.birth_year}
                </li>
                <li>
                  <strong>Gender:</strong> {character.properties?.gender}
                </li>
                <li>
                  <strong>Created:</strong> {character.properties?.created}
                </li>
                <li>
                  <strong>Edited:</strong> {character.properties?.edited}
                </li>
                <li>
                  <strong>Homeworld:</strong> {character.properties?.homeworld}
                </li>
                <li>
                  <strong>Url:</strong> {character.properties?.url}
                </li>
                <li>
                  <strong>Id:</strong> {character._id}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


