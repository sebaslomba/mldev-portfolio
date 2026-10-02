import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./components/Demo";

const rootElement = document.getElementById("demo-react");

if (rootElement) {
  createRoot(rootElement).render(<Demo />);
}