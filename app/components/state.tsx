



 "use client";

import {useState}  from "react";





export default function state(){
 const [text, setText] = useState("")

return( 
 <div> 
  
 <h1> Happy Wednesday!</h1>  

 <button onClick={()=>setText("happy to be here")} className="text-pink-500 bg-black px-4 py-2" >  click </button>
 <p>
  {text} 
 </p>
 </div>

 )






 }