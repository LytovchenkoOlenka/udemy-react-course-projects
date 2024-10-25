import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="A green bag with a gold dollar sign, surrounded by coins and bars, symbolizing wealth or finance."
      />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
