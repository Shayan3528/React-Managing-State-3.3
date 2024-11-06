import {useState}  from 'react';

export default function Form(){
  const [position,setPosition] = useState(0);

  function handlePointerMove(e){
      // setX(e.clientX);
      // setY(e.clientY);
      // console.dir(e);
      setPosition({      /// not Mutated , It is new object 
        x: e.clientX,
        y: e.clientY,
      });
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
        transform:`translate(${position.x}px, ${position.y}px)`
       }}
      />

    </div>
  );
}