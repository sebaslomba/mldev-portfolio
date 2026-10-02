import React, { useState } from "react";

const devices = [
  {
    id: "notebook",
    label: "Notebook",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "mobile",
    label: "Mobile",
  },
];

const sections = [
  {
    id: "inicio",
    label: "Inicio",
  },
  {
    id: "servicios",
    label: "Servicios",
  },
  {
    id: "contacto",
    label: "Contacto",
  },
];

export default function Demo() {
  const [activeDevice, setActiveDevice] = useState("notebook");
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div className={`react-demo demo-${activeDevice}`}>

      <div className="react-demo-toolbar">

        <div className="react-demo-devices">
          {devices.map((device) => (
            <button
              key={device.id}
              type="button"
              className={
                activeDevice === device.id ? "active" : ""
              }
              onClick={() => setActiveDevice(device.id)}
            >
              {device.label}
            </button>
          ))}
        </div>

      </div>

      <div className="react-demo-stage">

        <div className="react-demo-device">

          <div className="react-demo-screen">

            <div className="react-demo-website">

              <header className="demo-site-nav">

                <strong>NOVA</strong>

                <nav>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      className={
                        activeSection === section.id ? "active" : ""
                      }
                      onClick={() =>
                        setActiveSection(section.id)
                      }
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>

                <button
                  type="button"
                  className="demo-menu-button"
                  aria-label="Abrir menú"
                >
                  ☰
                </button>

              </header>

              <main className="demo-site-content">

                <section className="demo-site-hero">

                  <span className="demo-site-eyebrow">
                    Diseño · Desarrollo · Automatización
                  </span>

                  <h3>
                    Una web que no solo se ve bien.
                    <span> Se mueve.</span>
                  </h3>

                  <p>
                    Experiencias digitales modernas, rápidas y
                    adaptadas a cualquier dispositivo.
                  </p>

                  <button
                    type="button"
                    className="demo-site-cta"
                    onClick={() => setActiveSection("servicios")}
                  >
                    Ver servicios
                  </button>

                </section>

                <section className="demo-site-services">

                  <article>
                    <span>01</span>
                    <strong>Web</strong>
                    <p>
                      Sitios modernos y responsive.
                    </p>
                  </article>

                  <article>
                    <span>02</span>
                    <strong>Automatización</strong>
                    <p>
                      Procesos conectados y eficientes.
                    </p>
                  </article>

                  <article>
                    <span>03</span>
                    <strong>Integraciones</strong>
                    <p>
                      APIs, formularios y herramientas.
                    </p>
                  </article>

                </section>

              </main>

            </div>

          </div>

          <div className="react-demo-device-base" />

        </div>

      </div>

    </div>
  );
}