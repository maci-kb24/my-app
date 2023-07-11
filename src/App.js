// import Todo from "./components/Todo";
import styles from "./App.module.css";

const App = () => {
  const age = 18;
  const isGreen = true;
  const names = ["Aba", "Bam", "Cya", "Den", "Goran"];

  return (
    <div>
      <User name="mac" age={34} email="macikb8@yahoo.com" />
      <User name="Jen" age={24} email="jen@yahoo.com" />
      <User name="Dan" age={35} email="dan@gmail.com" />
      <h1 className={styles.name}>Hello</h1>
      <div>{age > 21 ? <p>Over age</p> : <p>Under Age</p>}</div>
      <h1 style={{ color: isGreen ? "green" : "red" }}>Hello</h1>
      {isGreen && <User name="Green" age={34} email="green@yahoo.com" />}
      <div>
        <ul>
          {names.map((name, key) => {
            return <li key={key}>{name}</li>;
          })}
        </ul>
      </div>
      {/* <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Explore the full React course" /> */}
    </div>
  );
};

const User = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default App;
