// import { useState } from "react";



// function submitForm(answer){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(answer.toLowerCase()=== "dhaka"){
//                 resolve();
//             }else{
//                 reject(new Error("Good Guess but a wrong answer. Try Again!"));
//             }
//         },3000);
//     });
// }


// export default function Form() {

//   // Visual States: typing, submitting, success 

//   // Mandatory Data State

//   const [answer, setAnswer] = useState("");
//   const [error,setError] = useState(null);

//   /// visual state থেকে পাওয়া ফাইনাল  state 

//    const [status,setStatus] = useState('typing');

//   if (status === "success") return ( <h1>That is right! </h1>);

//   /// handlers ///

//   const  handleTextChange = (e)=>{
//     setError(null);
//     setAnswer(e.target.value);
//   }

//   const handleSubmit = async (e)=>{
//     e.preventDefault();
//     setStatus("submitting");
//     try{
//         await submitForm(answer);
//         setStatus('success');
//     }catch(err){
//         setStatus("typing");
//         setError(err.message);
//     } finally{

//     }
//   };

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>What city is located on two continents?</p>

//       <form onSubmit = {handleSubmit} >
//         <textarea value = {answer} onChange={handleTextChange} disabled = {status ==="submitting"} ></textarea>
//         <br />
//         <button disabled = {status === '' || status === 'submitting'}>Submit</button>
//        {status ==='submitting' && <p>Loading...</p>}
//        {error && <p className="Error"> {error}</p>}
//       </form>
     
//     </>
//   );
// }

import {useState} from 'react';

function submitForm(answer){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(answer.toLowerCase()==='dhaka'){
        resolve();
      }else{
        reject(new Error ("Good Guess but a wrong answer. Try Again!") );
      }
    },3000);
  });
}


export default function App(){

  const [answer,setAnswer] = useState('');
  const [error,setError] = useState(null);
  const [status ,setStatus ] = useState('typing');


  async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting');
    try{
      await submitForm(answer);
      setStatus('success');
    }catch(err){
      setStatus('typing');
      setError(err.message);
    }
  }

  function handleTextChange(e){
    setError(null);
    setAnswer(e.target.value);
  }
  if(status == "success") return <h2>That is Right</h2>

  return(
    <>
    <h2>City Quiz</h2>
    <p> What city is located on Two Continen?</p>
    <form onSubmit = {handleSubmit} >
      <textarea value ={answer} onChange = {handleTextChange}  disabled = {status === "submitting"}></textarea>
      <br/>
      <button disabled = {answer.length === 0 || status === 'submitting'}>Submit</button>
       {status ==='submitting' && <p>Loading...</p>}
      {error && <p className="Error"> {error}</p>}

    </form>
    </>

  );
}