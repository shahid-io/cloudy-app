import { Alert } from "bootstrap";
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
    // alert(city)
    console.log(city);
  };
  return (
    <div className="App">
      <ListGroup
        cities={items}
        heading="Indian Cities"
        onSelectItems={handleSelectedItems}
      />
      <Alert>
        <span>Hello</span>
      </Alert>

    </div>
  );
}

export default App;
