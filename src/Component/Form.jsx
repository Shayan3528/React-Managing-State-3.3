import {useState}  from 'react';

export default function Form(){
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  function handlePointerMove(e){
      setX(e.clientX);
      setY(e.clientY);
  }

  return(
    <div 
    style = {{
      position:"relative",
      width:"100vw",
      height:"100vh",
    }}
     onPointerMove = {
      handlePointerMove
     }
    >
      <div
       style = {{
        position:'absolute',
        backgroundColor:"red",
        borderRadius:'50%',
        left:-10,
        top:-10,
        width:20,
        height:20,
        transform:`translate(${x}px, ${y}px)`
       }}
      />

    </div>
  );
}