//  Working with Multiple JSX Slots

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //   const ButtonsContainer = buttonsContainer;
  // за замовчування залишаємо "menu", але для перевикористання можемо додавати атрибут ButtonsContainer на компоненти,де використовуємо Tabs
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
