import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
// offers.css comes first on purpose: Tailwind's utilities layer is emitted at
// the top of index.css, so importing it later lets md: utilities override the
// offer base classes without !important. See docs/superpowers/specs.
import "./offers.css";
import "./index.css";
import "./moon-prototype.css";

const rootElement = document.getElementById("root")!;

// react-snap pre-renders HTML — use hydrateRoot to attach to it without re-rendering.
// Falls back to createRoot for development and first-time crawls.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
