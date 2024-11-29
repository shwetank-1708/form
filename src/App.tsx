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

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructure name and value from event
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      values.name === "" ||
      values.number === "" ||
      values.address === "" ||
      values.state === "" ||
      values.city === "" ||
      values.message === ""
    ) {
      alert("All fields are required");
    } else {
      console.log(values);
      setValues({
        name: "",
        number: "",
        address: "",
        state: "",
        city: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center bg-blue-200">
        <h1 className="font-bold text-4xl">Contact Form</h1>
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
            className="border-2 rounded-md p-1 w-[400px]"
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="number"
            value={values.number}
            onChange={change}
            className="border-2 rounded-md p-1 w-[400px]"
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            value={values.address}
            onChange={change}
            className="border-2 rounded-md p-1 w-[400px]"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={values.state}
            onChange={change}
            className="border-2 rounded-md p-1 w-[400px]"
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={change}
            className="border-2 rounded-md p-1 w-[400px]"
          />
          <input
            type="text"
            placeholder="Enter Your Message"
            name="message"
            value={values.message}
            onChange={change}
            className="border-2 rounded-md p-1 w-[400px]"
          />
          <button
            type="submit"
            className="bg-blue-400 px-4 py-2 rounded-lg text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
