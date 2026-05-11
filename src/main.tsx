import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// 애플리케이션 진입점에서 React 루트를 생성하고 마운트한다.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
