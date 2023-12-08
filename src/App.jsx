
import "./App.css";
import { Outlet } from "react-router-dom";
import JaPage from "./pages/JaPage";

function App() {
  return (
    <>
    <JaPage />
    <Outlet />
    </>
  );
}

export default App;
