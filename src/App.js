import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Store/store";

import RoutesList from "./components/routes/RoutesList";
import NavBar from "./components/Nav/NavBar";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
