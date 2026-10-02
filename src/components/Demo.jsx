import React, { useState } from "react";

export default function Demo() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("web")}>
          Web / Notebook
        </button>

        <button onClick={() => setActiveTab("mobile")}>
          Mobile
        </button>

        <button onClick={() => setActiveTab("automation")}>
          Automatización
        </button>
      </div>

      <div>
        {activeTab === "web" && <p>Demo Web</p>}
        {activeTab === "mobile" && <p>Demo Mobile</p>}
        {activeTab === "automation" && <p>Demo Automatización</p>}
      </div>
    </div>
  );
}