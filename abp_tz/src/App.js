import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Store/store";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          {/* <RoutesWrapper/> */}
        </BrowserRouter>
      </Provider>
  );
}

export default App;
