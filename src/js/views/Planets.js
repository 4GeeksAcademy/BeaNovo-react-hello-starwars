import React, { useContext, useEffect, useState } from "react"; // Importa React y los hooks necesarios
import { Context } from "../store/appContext"; // Importa el contexto de la aplicación
import { InfoPlanets } from "../component/infoPlanets"; // Importa el componente InfoPlanets
import { useParams } from "react-router"; // Importa el hook useParams de react-router para obtener parámetros de la URL

export const Planets = () => { // Define el componente funcional Planets
  const { store, actions } = useContext(Context); // Obtiene el estado y las acciones del contexto
  const [planet, setPlanet] = useState({}); // Define un estado local para almacenar la información del planeta
  const {uid} = useParams(); // Obtiene el parámetro 'uid' de la URL usando useParams

  // Función asíncrona para obtener la información de un planeta específico
  const getPlanets = async (uid) => {
    const response = await fetch("https://www.swapi.tech/api/planets/"+uid); // Realiza una solicitud HTTP GET a la API de Star Wars
    const data = await response.json(); // Convierte la respuesta a formato JSON
    setPlanet(data.result); // Actualiza el estado 'planet' con la información obtenida
    console.log("item"); // Imprime un mensaje en la consola
    console.log(uid); // Imprime el UID del planeta en la consola
  };

  // Efecto que se ejecuta cuando el componente se monta o cuando cambia el UID
  useEffect(() => {
    getPlanets(uid); // Llama a la función getPlanets para obtener la información del planeta
  }, []); // El array vacío [] significa que este efecto solo se ejecuta una vez, al montar el componente

  return (
    <div>
      {/* Renderiza el componente InfoPlanets y le pasa las props 'planet' y 'uid' */}
      <InfoPlanets
        planet={planet}
        uid={uid}
      />
    </div>
  );
};