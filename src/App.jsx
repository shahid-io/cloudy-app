import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    "Mumbai",
    "India",
    "Punjab",
    "Bihar",
    "Kolkata",
    "Odisa",
    "Delhi",
    "India",
    "Punjab",
  ];
  const handleSelectedItems = (city) => {
    console.log(city);
  };
  return (
    <div className="App">
      <ListGroup
        cities={items}
        heading="Indian Cities"
        onSelectItems={handleSelectedItems}
      />
    </div>
  );
}

export default App;
