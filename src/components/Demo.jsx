import React, { useState } from "react";

const demos = {
  web: {
    label: "Web / Notebook",
    title: "Tu negocio, online.",
    description:
      "Una landing profesional para mostrar tus servicios, generar confianza y convertir visitas en clientes.",
    button: "Ver proyecto",
  },
  mobile: {
    label: "Mobile",
    title: "Experiencia pensada para celular.",
    description:
      "Interfaces adaptadas a dispositivos móviles para que tus clientes puedan interactuar con tu negocio desde cualquier lugar.",
    button: "Ver experiencia",
  },
  automation: {
    label: "Automatización",
    title: "Menos tareas repetitivas.",
    description:
      "Automatizaciones conectadas con formularios, WhatsApp, APIs y herramientas digitales para ahorrar tiempo.",
    button: "Ver automatización",
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

    </div>
  );
}