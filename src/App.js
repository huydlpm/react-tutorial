import "./App.css";
import Person from "./components/Person/Person";
import Product from "./components/Product/Product";
import Example from "./components/Example";
import { useState } from "react";

function App() {
  const [showPerson, setShowPerson] = useState(false);

  const [person, setPersons] = useState([
    { name: "Đặng Lê Huy", age: 26 },
    { name: "Đặng Hải An", age: 20 },
  ]);

  const [products, setProduct] = useState([
    { name: "Tôm", price: 100 },
    { name: "Cá", price: 100 },
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

  const toogleName = () => {
    setShowPerson(!showPerson);
  };

  let personList = null;

  if (showPerson) {
    personList = (
      <div>
        {person.map((item) => {
          return (
            <Person
              click={changePersonName}
              name={item.name}
              age={item.age}
              changeTxt={changeName}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h3>Wellcome, Create react app!</h3>
      <button onClick={() => toogleName()}>Toogle Name</button>
      <p>This is a person</p>
      {personList}
      <hr />
      <Example />
      <hr />
      <Product data={products} />
    </div>
  );
}

export default App;
