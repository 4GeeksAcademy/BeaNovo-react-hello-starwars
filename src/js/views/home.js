import React, { useContext, useEffect } from "react"; // Importa React y los hooks necesarios
import { Context } from "../store/appContext"; // Importa el contexto de la aplicación
import { Card } from "../component/card"; // Importa el componente Card

export const Home = () => { // Define el componente funcional Home
  const { store, actions } = useContext(Context); // Obtiene el estado y las acciones del contexto

  // useEffect(() => {
  //   actions.getCharacters(); // Llama a la acción para cargar los personajes
  // }, []);

  return (
    <div>
      {/* Sección de Personajes */}
      <div>
        <h1>Characters</h1> {/* Título de la sección de personajes */}
        <div className="d-flex overflow-auto"> {/* Contenedor flexible con scroll horizontal */}
          {store.characters.map((character, index) => { // Mapea cada personaje en el estado global
            console.log(store.characters); // Imprime la lista de personajes en la consola para depuración
            return (
              <Card 
                name={character.name} // Pasa el nombre del personaje como prop
                uid={character.uid} // Pasa el UID del personaje como prop
                category={"characters"} // Pasa la categoría como prop
                key={index} // Usa el índice como clave única para cada Card
              />
            );
          })}
        </div>
      </div>

      {/* Sección de Planetas */}
      <div>
        <h1>Planets</h1> {/* Título de la sección de planetas */}
        <div className="d-flex overflow-auto"> {/* Contenedor flexible con scroll horizontal */}
          {store.planets.map((planet, index) => { // Mapea cada planeta en el estado global
            console.log(store.planets); // Imprime la lista de planetas en la consola para depuración
            return (
              <Card 
                name={planet.name} // Pasa el nombre del planeta como prop
                uid={planet.uid} // Pasa el UID del planeta como prop
                category={"planets"} // Pasa la categoría como prop
                key={index} // Usa el índice como clave única para cada Card
              />
            );
          })}
        </div>
      </div>

      {/* Sección de Vehículos */}
      <div>
        <h1>Vehicles</h1> {/* Título de la sección de vehículos */}
        <div className="d-flex overflow-auto"> {/* Contenedor flexible con scroll horizontal */}
          {store.vehicles.map((vehicle, index) => { // Mapea cada vehículo en el estado global
            console.log(store.vehicles); // Imprime la lista de vehículos en la consola para depuración
            return (
              <Card 
                name={vehicle.name} // Pasa el nombre del vehículo como prop
                uid={vehicle.uid} // Pasa el UID del vehículo como prop
                category={"vehicles"} // Pasa la categoría como prop
                key={index} // Usa el índice como clave única para cada Card
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

     
    
    

