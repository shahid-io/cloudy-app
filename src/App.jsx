import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
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
  const [alertVisible, setAlertVibility] = useState(false);

  return (
    <div className="App container">
      <ListGroup
        cities={items}
        heading="Indian Cities"
        onSelectItems={handleSelectedItems}
      />
      {/* {alertVisible ? <Alert>Alert</Alert> : null} */}
      {alertVisible && (
        <Alert onClose={() => setAlertVibility(false)}>Alert</Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          setAlertVibility(true);
          console.log("alert");
        }}
      >
        Alert
      </Button>
    </div>
  );
}

export default App;
