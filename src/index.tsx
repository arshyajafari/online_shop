// react package
import React from "react";

// react dom package
import ReactDOM from "react-dom/client";

// react query package
import { QueryClient, QueryClientProvider } from "react-query";

// component
import App from "./App";

// new object from query client
const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
