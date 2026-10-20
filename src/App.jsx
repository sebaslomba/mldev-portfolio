import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
    const progress = useScrollProgress();

  return (
    <main className="experience">
      <section className="workbench">
        <span className="workbench__mark">ML / WORKBENCH</span>
        <span className="workbench__progress">
            CAMERA {<progress.toFixed(2)}
        </span>

        <div className="workbench__stage">
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

        <span className="workbench__hint">
          SCROLL TO CHANGE YOUR POINT OF VIEW ↓
        </span>
      </section>
    </main>
  );
}