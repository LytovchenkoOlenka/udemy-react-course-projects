import TabButton from "../TabButton";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import Section from "../Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    //selectedButton=>'components','lsx','props','state'
    setSelectedTopic(selectedButton);
  }

  // Cпосіб умовного рендерингу через if
  //let tabContent =  <p>Please select a topic.</p>;
  // if(selectedTopic){
  //   tabContent = <div id="tab-content">
  //   <h3>{EXAMPLES[selectedTopic].title}</h3>
  //   <p>{EXAMPLES[selectedTopic].description}</p>
  //   <pre>
  //     <code>{EXAMPLES[selectedTopic].code}</code>
  //   </pre>
  // </div>
  // }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {/* Умовний рендеринг через тернарний оператор */}
      {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}

      {/* Альтернативний спосіб умовного рендерингу через оператор && */}
      {/* {!selectedTopic && <p>Please select a topic.</p>}
          {!selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/*Cпосіб умовного рендерингу через if */}
      {/* {tabContent} */}
    </Section>
  );
}
