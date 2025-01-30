import React from "react"; // Importa React para definir el componente
import "../../styles/home.css"; // Importa los estilos personalizados
import { Link } from "react-router-dom"; // Importa Link para navegación entre rutas

// Componente que muestra información detallada de un vehículo
export const InfoVehicles = ({ vehicle, uid }) => {
  // Consolas de depuración para verificar la información del vehículo
  console.log({ vehicle });
  console.log({ uid });
  console.log(`https://starwars-visualguide.com/assets/img/${uid}.jpg`);

  return (
    // Componente principal de la tarjeta
    <div className="card mb-3 mx-auto" style={{ width: "90rem" }}>
      <div className="row g-0">
        {/* Imagen del vehículo */}
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
            className="img-fluid rounded-start" // Estilo para una imagen responsiva con bordes redondeados
            alt="Vehicle"
          />
        </div>

        {/* Contenido de la tarjeta */}
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{vehicle.properties?.name}</h1> {/* Título del vehículo (puedes agregar su nombre aquí) */}
            <p className="card-text">{vehicle.description}</p>
            <p className="card-text">
              <ul className="text-gray-300 space-y-1"> {/* Lista de propiedades del vehículo */}
                <li><strong>Height:</strong> {vehicle.properties?.height}</li>
                <li><strong>Cargo Capacity:</strong> {vehicle.properties?.cargo_capacity}</li>
                <li><strong>Consumables:</strong> {vehicle.properties?.consumables}</li>
                <li><strong>Cost In Credits:</strong> {vehicle.properties?.cost_in_credits}</li>
                <li><strong>Created:</strong> {vehicle.properties?.created}</li>
                <li><strong>Crew:</strong> {vehicle.properties?.crew}</li>
                <li><strong>Edited:</strong> {vehicle.properties?.edited}</li>
                <li><strong>Length:</strong> {vehicle.properties?.length}</li>
                <li><strong>Manufacturer:</strong> {vehicle.properties?.manufacturer}</li>
                <li><strong>Max Atmosphering Speed:</strong> {vehicle.properties?.max_atmosphering_speed}</li>
                <li><strong>Model:</strong> {vehicle.properties?.model}</li>
                <li><strong>Passengers:</strong> {vehicle.properties?.passengers}</li>
                <li><strong>URL:</strong> {vehicle.properties?.url}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


    
  
