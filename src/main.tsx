import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Cursor from "./components/Cursor";

createRoot(document.getElementById("root")!).render(
  <>
    <Cursor />
    <App />
  </>
);
