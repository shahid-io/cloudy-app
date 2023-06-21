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
  return (
    <div className="App">
      <ListGroup cities={items} heading="Indian Cities" />
    </div>
  );
}

export default App;
