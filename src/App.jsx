import Panel from "./Component/Panel";
import './App.css';
import {useState} from 'react';

export default function App(){
  const [showB,setShowB] = useState(true);
  const panel = <Panel/>
  return(
    <div>
      {panel}
      {showB && panel}
      <label >
        <input 
        type = "checkbox"
        checked = {showB}
        onChange = {e =>{
          setShowB(e.target.checked)
        }}
        />
        Render the Second Tree
      </label>
    </div>
  );
}