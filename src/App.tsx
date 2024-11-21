import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    name: "",
    number: "",
    address: "",
    state: "",
    city: "",
    message: "",
  });

  // Handle input changes for all fields
  const change = (e) => {
    const { name, value } = e.target; // Destructure name and value from event
    setValues((prevValues) => ({
      ...prevValues, // Copy the previous state
      [name]: value, // Update the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", values); // Log the entire form data
  };

  return (
    <>
      <div>
        <h1>Contact Form</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 m-5"
        >
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={values.name}
            onChange={change}
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="number"
            value={values.number}
            onChange={change}
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            value={values.address}
            onChange={change}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={values.state}
            onChange={change}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={change}
          />
          <input
            type="text"
            placeholder="Enter Your Message"
            name="message"
            value={values.message}
            onChange={change}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
