import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* Рефакторінг. Перебираємо масив і динамічно почергово виводимо кожент елемент масиву  */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* Виведення кожної концепції вручну  */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} /> */}
        {/* Використання пропсів в менш оптимальному варіанті  */}
        {/* <CoreConcept
                      title={CORE_CONCEPTS[3].title}
                      description={CORE_CONCEPTS[3].description}
                      image={CORE_CONCEPTS[3].image}
                    /> */}
      </ul>
    </section>
  );
}
