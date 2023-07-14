const MyComponent = () => {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      {items.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
    </div>
  );
};

export default MyComponent;
