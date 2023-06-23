import { useState } from "react";
import "./ListGroup.css";
// Here instead of Interface, Object being used.
/**
 * const Props = {
 * cities,
 * heading,
 * onSelectItems: function (city) {},
 * };
 */

function ListGroup(props) {
  const { cities, heading, onSelectItems } = props;
  const getMessage = () => {
    return cities.length === 0 ? (
      <p className="text-danger m-5">*CITIES NOT FOUND</p>
    ) : null;
  };

  /**
   * const handleClick = (event) => {
   * console.log(event)
   * };
   */

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="bg-secondary font-monospace text-light rounded p-3 w-25 mx-5 mt-5">
        {heading}
      </h1>
      {getMessage()}
      {cities.length === 0 && <p className="text-warning m-5">Opps</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item cur w-25 mx-5 bg-dark text-light"
                : "list-group-item cur w-25 mx-5 "
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItems(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
