import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const progress = useScrollProgress();
  const cameraRotate = progress * 62;
  const cameraY = progress * 18;
  const cameraScale = 1 - progress * 0.18;

  const laptopRotate = 72 - progress * 58;
  const laptopY = 62 - progress * 42;
  const laptopScale = 0.78 + progress * 0.22;

  const laptopStyle = {
    transform: `
      translateX(-50%)
      translateY(${laptopY}%)
      perspective(1200px)
      rotateX(${laptopRotate}deg)
      scale(${laptopScale})
    `,
  };

  const cameraStyle = {
    transform: `
      perspective(1200px)
      rotateX(${cameraRotate}deg)
      translateY(${cameraY}%)
      scale(${cameraScale})
    `,
  };

  return (
    <main className="experience">
      <section className="workbench">
        <span className="workbench__mark">ML / WORKBENCH</span>
        <span className="workbench__progress">
          CAMERA {progress.toFixed(2)}
        </span>

        <div className="workbench__stage">
          <div className="workbench__surface" style={cameraStyle}>
            <article className="brief">
              <span>INCOMING / 001</span>

              <h1>A client left this here.</h1>
              <p>
                We sell something useful.
                <br />
                Our website feels forgettable.
                <br />
                Can you make people care?
              </p>
            </article>

            <div className="dial">
              <span>BEHAVIOUR</span>
              <strong>MAKE IT WEIRDER</strong>
            </div>

            <div className="device">
              <div className="device__screen">
                <span>TAP</span>
              </div>
            </div>

            <div className="note">
              I build the thing
              <br />
              behind the idea.
              <small>— Mathias Lombardi</small>
            </div>
          </div>

          <div className="laptop" style={laptopStyle}>
            <div className="laptop__screen">
              <span className="laptop__status">
                SOMETHING IS TAKING SHAPE
              </span>
            </div>
            <div className="laptop__base" />
          </div>
        </div>

        <span className="workbench__hint">
          SCROLL TO CHANGE YOUR POINT OF VIEW ↓
        </span>
      </section>
    </main>
  );
}
