// import Image from "next/image";
"use client"
export default function Home() {
  let data= {
  name:"Mayank",
  role:"Coder",
}
const handleClick=()=>{
  async function addData(){
    let a = await fetch("/api/add", {method: "POST",headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  })
    let res =await a.json()
    console.log(res)
  }
  addData()
}
  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api route demo</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
