import logo from "./logo.svg";
import "./App.css";
import Authentication from "./components/authentication";
import MainPage from "./components/mainpage";
import { Routes, Route } from "react-router-dom";
// import Button from "./components/button";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
