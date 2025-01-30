// Función principal para definir el estado global y las acciones disponibles
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characters: [], // Almacenará la lista de personajes obtenidos de la API
		planets: [], // Almacenará la lista de planetas obtenidos de la API
		vehicles: [], // Almacenará la lista de vehículos obtenidos de la API
		favorites: [], // Array para almacenar los elementos marcados como favoritos
	  },
	  actions: {
		// Función para obtener personajes desde la API
		getCharacters: async () => {
		  const requestOptions = {
			method: "GET", // Solicitud HTTP de tipo GET
		  };
		  try {
			// Fetch a la URL de personajes
			const response = await fetch("https://www.swapi.tech/api/people", requestOptions);
			const data = await response.json(); // Convierte la respuesta a JSON
			console.log(data.results); // Log para verificar los datos obtenidos
			setStore({ characters: data.results }); // Almacena los personajes en el estado global
		  } catch (error) {
			console.error("Error fetching characters"); // Muestra error en consola si ocurre
		  }
		},
  
		// Función para obtener planetas desde la API
		getPlanets: async () => {
		  const requestOptions = {
			method: "GET",
		  };
		  try {
			const response = await fetch("https://www.swapi.tech/api/planets", requestOptions);
			const data = await response.json();
			console.log("Planets:", data.results); // Log de los planetas obtenidos
			setStore({ planets: data.results }); // Almacena los planetas en el estado global
		  } catch (error) {
			console.error("Error fetching planets");
		  }
		},
  
		// Función para obtener vehículos desde la API
		getVehicles: async () => {
		  const requestOptions = {
			method: "GET",
		  };
		  try {
			const response = await fetch("https://www.swapi.tech/api/vehicles", requestOptions);
			const data = await response.json();
			console.log("Vehicles:", data.results); // Log de los vehículos obtenidos
			setStore({ vehicles: data.results }); // Almacena los vehículos en el estado global
		  } catch (error) {
			console.error("Error fetching vehicles");
		  }
		},
  
		// Función para agregar o eliminar favoritos
		toggleFavorite: (item) => {
		  const store = getStore(); // Obtiene el estado actual
		  const exists = store.favorites.find((fav) => fav.name === item.name); // Verifica si el favorito ya existe
  
		  if (exists) {
			// Si el favorito existe, lo elimina del array
			setStore({
			  favorites: store.favorites.filter((fav) => fav.name !== item.name),
			});
		  } else {
			// Si no existe, lo agrega al array
			setStore({
			  favorites: [...store.favorites, item],
			});
		  }
		},
  
		// Función para eliminar un favorito directamente por su `uid`
		removeFavorite: (uid) => {
		  const store = getStore(); // Obtiene el estado actual
		  setStore({
			favorites: store.favorites.filter((fav) => fav.uid !== uid), // Filtra y excluye el favorito con el UID dado
		  });
		},
	  },
	};
  };
  
  export default getState; // Exporta la función para su uso en el contexto global
  
