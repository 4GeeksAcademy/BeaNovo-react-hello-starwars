import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import ScrollToTop from "./component/scrollToTop"; 

import { Home } from "./views/home"; 
import { Demo } from "./views/demo"; 
import { Single } from "./views/single"; 
import injectContext from "./store/appContext"; 
import { Item } from "./views/Item"; 
import { Planets } from "./views/Planets"; 
import { Vehicles } from "./views/Vehicles"; 

import { Navbar } from "./component/navbar"; 
import { Footer } from "./component/footer"; 

// Crear el componente principal del layout
const Layout = () => { 
    // Obtiene el valor de `BASENAME` del archivo .env, si existe. Sirve para definir un subdirectorio base de la app.
    const basename = process.env.BASENAME || ""; 

    return (
        <div>
            {/* Define el enrutador principal para la aplicación */}
            <BrowserRouter basename={basename}>
                {/* Permite que la página se desplace automáticamente al inicio al cambiar de ruta */}
                <ScrollToTop>
                    {/* Navbar que se muestra en todas las vistas */}
                    <Navbar />
                    {/* Configuración de las rutas de la aplicación */}
                    <Routes>
                        {/* Ruta principal que muestra la vista Home */}
                        <Route path="/" element={<Home />} />
                        {/* Ruta para ver información de personajes específicos */}
                        <Route path="/characters/:uid" element={<Item />} />
                        {/* Ruta para la vista de un planeta específico */}
                        <Route path="/planets/:uid" element={<Planets />} />
                        {/* Ruta para la vista de un vehículo específico */}
                        <Route path="/vehicles/:uid" element={<Vehicles />} />
                        {/* Ruta para una vista de ejemplo Single */}
                        <Route path="/single/:theid" element={<Single />} />
                        {/* Ruta para cualquier dirección no encontrada */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    {/* Footer común para todas las vistas */}
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

// Inyecta el contexto global (`appContext`) en toda la aplicación
export default injectContext(Layout);

