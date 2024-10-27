// import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ data }) {
  console.log(data);
  const resultsData = calculateInvestmentResults(data);
  console.log(resultsData);
  return (
    <section id="result">
      {/* <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {userInput.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>formatter.format({row.valueEndOfYear})</td>
              <td>formatter.format({row.interest})</td>
              <td>formatter.format({row.totalInterest})</td>
              <td>formatter.format({row.investedCapital})</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </section>
  );
}
