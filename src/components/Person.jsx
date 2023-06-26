import React, { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an asynchronous API call
    setTimeout(() => {
      setLoading(false);
      console.log("Submitted:", person);
      setPerson({
        firstName: "",
        lastName: "",
      });
    }, 2000);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-outline-dark">
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Person;
