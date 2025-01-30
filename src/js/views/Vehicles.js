import React, { useContext, useEffect, useState } from "react"; // Importa React y los hooks useContext, useEffect y useState
import { Context } from "../store/appContext"; // Importa el contexto para acceder al estado global
import { InfoVehicles } from "../component/infoVehicles"; // Importa el componente InfoVehicles para mostrar información detallada
import { useParams } from "react-router"; // Hook para acceder a los parámetros de la URL

export const Vehicles = () => {
    // Desestructuración para acceder al store y acciones del contexto
    const { store, actions } = useContext(Context);

    // Estado local para almacenar la información del vehículo
    const [vehicle, setVehicle] = useState({}); 

    // useParams() obtiene el uid directamente de la URL. Esto permite que el componente sea dinámico y muestre información específica.
    const { uid } = useParams(); 

    // Función asincrónica que obtiene la información de un vehículo según su UID
    const getVehicle = async (uid) => {
        const response = await fetch("https://www.swapi.tech/api/vehicles/" + uid); // Hace una solicitud fetch a la API
        const data = await response.json(); // Convierte la respuesta a JSON
        setVehicle(data.result); // Actualiza el estado local con la información del vehículo
        console.log("item"); // Mensaje de depuración
        console.log(uid); // Muestra el UID del vehículo en consola
    };

    // Hook useEffect que se ejecuta cuando el componente se monta
    useEffect(() => {
        getVehicle(uid); // Llama a la función para obtener la información del vehículo
    }, []); // El array vacío asegura que solo se ejecute al montar el componente

    return (
        <div>
            {/* Renderiza el componente InfoVehicles pasando el vehículo y UID como props */}
            <InfoVehicles 
                vehicle={vehicle} 
                uid={uid} 
            />
        </div>
    );
};
