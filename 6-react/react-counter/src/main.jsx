import "./index.css";
import reactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.querySelector("#root");

const root = reactDOM.createRoot(rootElement);

root.render(<App />);
