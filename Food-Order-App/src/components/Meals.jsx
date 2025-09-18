import { useEffect, useState } from "react";
import { fetchMeals } from "../http";
import MealCard from "./MealCard";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      try {
        const data = await fetchMeals();
        console.log(data);
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMeals();
  }, []);

  return (
    <main>
      <ul id="meals">
        {meals.map((meal) => (
          <li className="meal-item" key={meal.id}>
            <MealCard meal={meal} />
          </li>
        ))}
      </ul>
    </main>
  );
}
