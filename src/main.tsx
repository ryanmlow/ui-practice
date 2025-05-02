import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
// @ts-expect-error: The worker import is ignored because it is only used in development mode
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start({
    serviceWorker: {
      url: "/ui-practice/mockServiceWorker.js",
    },
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
