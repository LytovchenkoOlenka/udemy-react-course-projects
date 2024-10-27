export default function UserInput({ onChangeInput, userInputData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment </label>
          <input
            type="number"
            value={userInputData.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>

        <p>
          <label>Anual Investment </label>
          <input
            type="number"
            value={userInputData.anualInvestment}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
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
            value={userInputData.expectedReturn}
            onChange={(event) => onChangeInput("duration", event.target.value)}
            required
          />
        </p>

        <p>
          <label>Duration </label>
          <input
            type="number"
            value={userInputData.duration}
            onChange={(event) =>
              onChangeInput("anualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
