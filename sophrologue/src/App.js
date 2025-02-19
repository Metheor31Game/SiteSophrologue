import React from "react";
import Button from "./components/Button";
import "./index.css"; // Importation du CSS global

function App() {
  return (
    <div className="container">
      <h1>Mon premier composant React</h1>
      <Button text="Clique ici !" />
      <Button text="Appuie sur moi !" />
    </div>
  );
}

export default App;
