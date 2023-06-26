import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { GoAlert } from "react-icons/go";
import Person from "./components/Person";
import ShopApp from "./components/Shopping/ShopApp";
import Employee from "./components/Employee/Employee";
import Pizza from "./components/Pizza/Pizza";
import Cart from "./components/Cart/Cart";

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
        <Alert onClose={() => setAlertVibility(false)}>
          <GoAlert size={20} color="red" />
          <h5>Here we go</h5>
        </Alert>
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
      <Person />
      <ShopApp />
      <Employee />
      <Pizza />
      <Cart/>
    </div>
  );
}

export default App;
