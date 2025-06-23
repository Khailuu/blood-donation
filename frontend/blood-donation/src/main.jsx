import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ReactToastifyProvider } from "./context/ReactToastifyProvider.jsx";
import { ReactQueryProvider } from "./context/ReactQueryProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.js"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ReactQueryProvider>
      <BrowserRouter>
        <ReactToastifyProvider>
          <App />
        </ReactToastifyProvider>
      </BrowserRouter>
    </ReactQueryProvider>
  </Provider>
);
