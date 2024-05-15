import "./App.css";
import Person from "./components/Person/Person";
import Example from "./components/Example";
import { useState } from "react";

function App() {
  const [person, setPersons] = useState([
    { name: "Đặng Lê Huy", age: 26 },
    { name: "Đặng Hải An", age: 20 },
  ]);

  const changePersonName = (e) => {
    setPersons([
      { name: "Đặng Lê Huy 1", age: 26 },
      { name: "Đặng Hải An 1", age: 20 },
    ]);
  };

  const changeName = (e) => {
    setPersons([
      { name: e.target.value, age: 26 },
      { name: "Đặng Hải An 1", age: 20 },
    ]);
  };

  return (
    <div className="App">
      <h3>Wellcome, Create react app!</h3>
      <button onClick={() => changePersonName()}>Change Name</button>
      <p>This is a person</p>
      <Person
        click={changePersonName}
        name={person[0].name}
        age={person[0].age}
        changeTxt={changeName}
      >
        My hobbies is football
      </Person>
      <Person
        click={changePersonName}
        name={person[1].name}
        age={person[1].age}
        changeTxt={changeName}
      />
      <Example />
    </div>
  );
}

export default App;
