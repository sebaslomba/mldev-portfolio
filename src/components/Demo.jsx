import React, { useState } from "react";

const demos = {
  web: {
    label: "Web / Notebook",
    brand: "NOVA",
    title: "Soluciones que hacen crecer tu negocio.",
    description:
      "Una presencia digital clara, moderna y pensada para convertir visitas en clientes.",
    button: "Conocé más",
  },

  mobile: {
    label: "Mobile",
    brand: "NOVA APP",
    title: "Todo tu negocio en un solo lugar.",
    description:
      "Una experiencia móvil simple para que tus clientes puedan acceder a tus servicios desde cualquier lugar.",
    button: "Explorar",
  },

  automation: {
    label: "Automatización",
    brand: "NOVA FLOW",
    title: "Automatizá lo que te quita tiempo.",
    description:
      "Conectá formularios, WhatsApp y APIs para que las tareas repetitivas sucedan automáticamente.",
    button: "Ver cómo funciona",
  },
};

export default function Demo() {
  const [activeTab, setActiveTab] = useState("web");

  const demo = demos[activeTab];

  return (
    <div className="react-demo">

      <div className="react-demo-tabs">
        {Object.entries(demos).map(([key, item]) => (
          <button
            key={key}
            className={activeTab === key ? "active" : ""}
            onClick={() => setActiveTab(key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="react-demo-content">

        <div className="react-demo-nav">
          <strong>{demo.brand}</strong>

          <div className="react-demo-nav-links">
            <span>Inicio</span>
            <span>Servicios</span>
            <span>Contacto</span>
          </div>
        </div>

        <div className="react-demo-hero">

            <div className="react-demo-copy">

                <span className="react-demo-label">
                {demo.label}
                </span>

                <h3>
                {demo.title}
                </h3>

                <p>
                {demo.description}
                </p>

                <button className="react-demo-button">
                {demo.button}
                </button>

            </div>

            <div className="react-demo-visual">

                <div className="demo-stat demo-stat-main">
                <strong>+24%</strong>
                <span>crecimiento</span>
                </div>

                <div className="demo-stat demo-stat-secondary">
                <strong>1.2K</strong>
                <span>clientes</span>
                </div>

                <div className="demo-orbit"></div>

            </div>

        </div>

      </div>

    </div>
  );
}