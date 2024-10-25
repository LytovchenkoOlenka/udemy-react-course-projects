import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    anualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment </label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>

        <p>
          <label>Anual Investment </label>
          <input
            type="number"
            value={userInput.anualInvestment}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
          />
        </p>

        <p>
          <label>Duration </label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              handleChange("anualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
