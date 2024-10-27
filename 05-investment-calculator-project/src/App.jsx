import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const initialInputState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialInputState);

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput userInputData={userInput} onChangeInput={handleChange} />
      {inputIsValid ? (
        <Result data={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </main>
  );
}

export default App;
