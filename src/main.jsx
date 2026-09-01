import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";

import { polyfill } from "mobile-drag-drop";



polyfill();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
