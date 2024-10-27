import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

// const initialInputState = {
//   initialInvestment: 10000,
//   anualInvestment: 1200,
//   expectedReturn: 6,
//   duration: 10,
// };

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

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
      <Result data={userInput} />
    </main>
  );
}

export default App;
