import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { EditUserProvider } from "./hooks/useEditUserStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <EditUserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EditUserProvider>
    </Provider>
  </StrictMode>,
);
