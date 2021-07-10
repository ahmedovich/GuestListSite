import React, { useState } from "react";
import List from "./components/list";

import "./App.css";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Eva green",
      url: "https://www.stylectory.net/wp-content/uploads/2021/01/Schermata-2020-09-03-alle-18.19.36-768x959-1.png",
      age: 41,
      note: "Badass actress",
    },
  ]);

  return (
    <div className="App">
      <h1>people invited in our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
