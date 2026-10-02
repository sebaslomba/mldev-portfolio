import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("demo-react");

if (rootElement) {
  createRoot(rootElement).render(
    <div>
      React funcionando
    </div>
  );
}