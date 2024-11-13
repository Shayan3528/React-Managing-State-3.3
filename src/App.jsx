import "./App.css";
import Panel from "./Component/Panel";
import { useState } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h2>Learn React</h2>
      <Panel 
      title="Paid Course" 
      isActive={activeIndex === 0 && true}
      onActive={()=> handleActive(0)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum
        voluptates iure magni beatae corrupti, voluptate tempora id. Molestiae,
        optio?{" "}
      </Panel>
      <Panel
        title="Free Course"
        isActive={activeIndex === 1 && true}
        onActive={() => handleActive(1)}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        deleniti eius atque sint dolorum enim, quidem explicabo debitis corrupti
        similique!
      </Panel>
    </div>
  );
}
