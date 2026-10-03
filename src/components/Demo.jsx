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

const services = [
  {
    number: "01",
    title: "Web",
    description:
      "Sitios modernos, rápidos y adaptados a cualquier dispositivo.",
  },
  {
    number: "02",
    title: "Automatización",
    description:
      "Procesos que trabajan automáticamente para ahorrar tiempo.",
  },
  {
    number: "03",
    title: "Integraciones",
    description:
      "APIs, formularios y herramientas conectadas en un solo flujo.",
  },
];

export default function Demo() {
  const [activeDevice, setActiveDevice] = useState("notebook");
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const goToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const handleDeviceChange = (device) => {
    setActiveDevice(device);
  };

  return (
    <div className={`react-demo demo-${activeDevice}`}>

      {/* DEVICE SELECTOR */}

      <div className="react-demo-toolbar">

        <div className="react-demo-devices">

          {devices.map((device) => (
            <button
              key={device.id}
              type="button"
              className={
                activeDevice === device.id ? "active" : ""
              }
              onClick={() => handleDeviceChange(device.id)}
            >
              {device.label}
            </button>
          ))}

        </div>

      </div>


      {/* DEVICE */}

      <div className="react-demo-stage">

        <div className="react-demo-device">

          <div className="react-demo-screen">

            <div className="react-demo-website">


              {/* NAVBAR */}

              <header className="demo-site-nav">

                <button
                  type="button"
                  className="demo-site-logo"
                  onClick={() => goToSection("inicio")}
                >
                  NOVA
                </button>


                <nav>

                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      className={
                        activeSection === section.id
                          ? "active"
                          : ""
                      }
                      onClick={() => goToSection(section.id)}
                    >
                      {section.label}
                    </button>
                  ))}

                </nav>


                <button
                  type="button"
                  className="demo-menu-button"
                  aria-label="Abrir menú"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((value) => !value)}
                >
                  {menuOpen ? "×" : "☰"}
                </button>

              </header>


              {/* MOBILE MENU */}

              {menuOpen && (
                <div className="demo-mobile-menu">

                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => goToSection(section.id)}
                    >
                      {section.label}
                    </button>
                  ))}

                </div>
              )}


              {/* CONTENT */}

              <main className="demo-site-content">


                {/* HERO */}

                <section className="demo-site-hero">

                  <span className="demo-site-eyebrow">
                    Diseño · Desarrollo · Automatización
                  </span>

                  <h3>
                    Una web que no solo se ve bien.
                    <span> Se mueve.</span>
                  </h3>

                  <p>
                    Creamos experiencias digitales modernas,
                    rápidas y pensadas para funcionar en
                    cualquier dispositivo.
                  </p>

                  <div className="demo-site-actions">

                    <button
                      type="button"
                      className="demo-site-cta"
                      onClick={() => goToSection("servicios")}
                    >
                      Ver servicios
                    </button>

                    <button
                      type="button"
                      className="demo-site-link"
                      onClick={() => goToSection("contacto")}
                    >
                      Hablemos →
                    </button>

                  </div>

                </section>


                {/* SERVICES */}

                <section className="demo-site-services">

                  {services.map((service, index) => (
                    <article
                      key={service.number}
                      className={
                        activeService === index
                          ? "active"
                          : ""
                      }
                      onMouseEnter={() => setActiveService(index)}
                      onMouseLeave={() => setActiveService(null)}
                      onClick={() => setActiveService(index)}
                    >

                      <span>{service.number}</span>

                      <strong>{service.title}</strong>

                      <p>
                        {service.description}
                      </p>

                      <small>
                        Explorar →
                      </small>

                    </article>
                  ))}

                </section>


                {/* CONTACT */}

                <section className="demo-site-contact">

                  <span className="demo-site-eyebrow">
                    ¿Tenés un proyecto?
                  </span>

                  <h4>
                    Hagamos algo
                    <span> diferente.</span>
                  </h4>

                  <button
                    type="button"
                    className="demo-site-cta"
                    onClick={() => goToSection("inicio")}
                  >
                    Volver al inicio
                  </button>

                </section>


              </main>

            </div>

          </div>


          {/* DEVICE BASE */}

          <div className="react-demo-device-base" />

        </div>

      </div>

    </div>
  );
}