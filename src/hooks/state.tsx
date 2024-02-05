import { useState } from "react";

export function UserAge() {
  const [age, setAge] = useState(0);

  // HOMEWORK: find the type of the event parameter
  const handleAgeChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log("event", event.target.value);
    setAge(parseInt(event.target.value));
  };
  const handleBtnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert(`the age is ${age}`);
  };
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert(`from form ,the age is ${age}`);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={handleAgeChange} />
        <button type="button" onClick={handleBtnClick}>
          submit
        </button>
        <button type="submit">Submit using form</button>
      </form>

      <h2>Your age is: {age}</h2>
    </div>
  );
}
