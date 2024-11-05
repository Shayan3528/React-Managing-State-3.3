import { useState } from "react";
export default function Form() {
  // Visual Status: empty,typing,submitting,success,error //

  // Mandatory Data State
  const [answer, setAnswer] = useState("");

  if (status === "success") return ( <h1>That is right! </h1>);

  /// handlers ///

  const  handleTextChange = (e)=>{
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea value = {answer} onChange={handleTextChange} ></textarea>
        <br />
        <button>Submit</button>
        <p>Loading...</p>
        <p className="Error"> There was an Error</p>
      </form>
     
    </>
  );
}
