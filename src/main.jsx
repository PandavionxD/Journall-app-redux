import ReactDOM from "react-dom/client";
import { Journall } from "./Journall.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000} >
      <Router>
        <Journall />
      </Router>
    </SnackbarProvider>
  </Provider>
);
