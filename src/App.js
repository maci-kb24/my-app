import React from "react";
import styles from "./App.module.css";
import User from "./components/User";
import MyComponent from "./components/MyComponent";

const App = () => {
  const age = 18;
  const isGreen = true;
  const names = ["Aba", "Bam", "Cya", "Den", "Goran"];
  const users = [
    {
      name: "mac",
      age: 35,
    },
    {
      name: "jessica",
      age: 25,
    },
    {
      name: "deni",
      age: 15,
    },
    {
      name: "erik",
      age: 45,
    },
  ];

  return (
    <div className="app">
      <Button />
      <Button />
      <input type="text" placeholder="write smething" />
      {users.map((user, index) => {
        return <User index={index} name={user.name} age={user.age} />;
      })}
      <h1 className={styles.name}>Hello</h1>
      <div>{age > 21 ? <p>Over age</p> : <p>Under Age</p>}</div>
      <h1 style={{ color: isGreen ? "green" : "red" }}>Hello</h1>
      {isGreen && <p>It is green</p>}
      <div>
        <ul>
          {names.map((name, key) => {
            return <li key={key}>{name}</li>;
          })}
        </ul>
      </div>
      <MyComponent />
    </div>
  );
};

function Button() {
  function handleClick() {
    alert("click");
  }
  return <button onClick={handleClick}>Button</button>;
}

export default App;
