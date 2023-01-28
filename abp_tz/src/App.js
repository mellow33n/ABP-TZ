import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Store/store";

import RoutesList from "./components/routes/RoutesList";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <RoutesList/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
