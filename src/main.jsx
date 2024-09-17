import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);
