import ReactDOM from "react-dom/client";
import { Journall } from "./Journall.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
  <Router>
    <Journall />
  </Router>
  </Provider>
);
