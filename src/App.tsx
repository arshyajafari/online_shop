// react router dom package
import { BrowserRouter } from "react-router-dom";

// context provider
import { ShoppingCartProvider } from "./store/useShoppingContext";

// route file
import { RoutesCM } from "./routes";

// css file
import "./App.css";

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <RoutesCM />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
