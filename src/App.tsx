// react router dom package
import { BrowserRouter } from "react-router-dom";

// route file
import { RoutesCM } from "./routes";

// css file
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesCM />
    </BrowserRouter>
  );
};

export default App;
