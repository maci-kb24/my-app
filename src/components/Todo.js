const Todo = (props) => {
  return (
    <div className="Card">
      <h2>Title</h2>
      <div className="actions">
        <button className="btn">{props.text}</button>
      </div>
    </div>
  );
};

export default Todo;
