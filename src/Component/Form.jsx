import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "Name",
    },
  ]);

  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id} style={{ marginBottom: "10px" }}>
          <input type="type" label={input.label} />
        </div>
      ))}
      <div style={{ marginTop: "5px" }}>
        <button onClick={handleAddInput}>Add Button</button>
      </div>
    </div>
  );
}
