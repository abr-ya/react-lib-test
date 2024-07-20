import { store } from "src/app/store";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
);
