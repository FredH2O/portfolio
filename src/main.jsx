import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins";
import { ThemeProvider } from "./context/Theme.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { PageProvider } from "./context/PageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
);
