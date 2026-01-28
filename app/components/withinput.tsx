"use client";


import { useState } from "react";


export default function Home() {
 const [name, setName] = useState("");


 return (
   <main className="p-6 space-y-4">
     
<input className="border "
placeholder=" type something funny!"
value={name}
onChange={(e)=> setName(e.target.value)}

/>
<p>{name}</p>



   </main>
 );
}
