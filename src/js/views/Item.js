import React, { useContext, useEffect, useState } from "react";
// Importa React y algunos hooks: 
// - `useContext`: permite acceder a un contexto global (en este caso `Context`).
// - `useEffect`: ejecuta efectos secundarios (similar a componentDidMount y componentDidUpdate).
// - `useState`: gestiona el estado local de un componente.

import { Context } from "../store/appContext";
// Importa el contexto global `Context`, que contiene el estado global y acciones de la aplicación.

import { InfoCard } from "../component/infoCard";
// Importa el componente `InfoCard`, que mostrará la información de un personaje.

import { useParams } from "react-router";
// Importa `useParams`, un hook que permite acceder a los parámetros de la URL (en este caso `uid`).

export const Item = () => {
  const { store, actions } = useContext(Context);
  // Desestructura `store` y `actions` del contexto global `Context`.
  // `store`: contiene el estado global de la app.
  // `actions`: contiene funciones para modificar el estado.

  const [character, setCharacter] = useState({});
  // Define el estado local `character`, inicializado como un objeto vacío.
  // `setCharacter`: función para actualizar el estado.

  const { uid } = useParams();
  // Obtiene el valor del parámetro `uid` desde la URL.
  // Este valor identifica al personaje que se mostrará.

  const getCharacter = async (uid) => {
    // Función asincrónica que obtiene datos de un personaje específico.
    const response = await fetch("https://www.swapi.tech/api/people/" + uid);
    // Hace una petición a la API de Star Wars para obtener los datos del personaje con el `uid` dado.
    const data = await response.json();
    // Convierte la respuesta a JSON.
    setCharacter(data.result);
    // Actualiza el estado `character` con la información del personaje.
    console.log("item");
    console.log(uid);
    // Imprime en consola para depuración.
  };

  useEffect(() => {
    getCharacter(uid);
    // Llama a la función `getCharacter` cuando el componente se monta o cuando `uid` cambia.
  }, [uid]);
  // `[uid]`: Dependencia que asegura que el efecto se ejecute cuando `uid` cambie.

  return (
    <div>
      <InfoCard character={character} uid={uid} />
      {/* Renderiza el componente `InfoCard`, pasándole el personaje y su `uid` como props */}
    </div>
  );
};
