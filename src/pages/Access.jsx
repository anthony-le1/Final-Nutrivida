import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../CSS/Style.css";
import "../CSS/acceso.css";

function Access() {
  const imagenes = [
    "/images/Nutricion1.webp",
    "/images/Nutricion2.jpeg",
    "/images/Nutricion3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Slider automático (reemplaza slider.js)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="acceso-section fondo-verde">
      <div className="acceso-container">

        {/* SLIDER */}
        <div className="acceso-slider">
          <img
            src={imagenes[index]}
            alt="Bienestar"
            className="fade-in"
          />
        </div>

        {/* PANEL */}
        <div className="acceso-panel">
          <h1>¿Qué deseas hacer?</h1>
          <p>
            Tu bienestar comienza aquí. Selecciona una opción para continuar.
          </p>

          <Link to="/login" className="btn-acceso">
            Iniciar Sesión
          </Link>

          <Link to="/register" className="btn-acceso btn-secundario">
            Registrarme
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Access;
