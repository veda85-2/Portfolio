import { useEffect, useState } from "react";


function Intro(){
const text = "welcome to my portfolio ✌️";

const [displayText, setDisplayText] = useState("");

useEffect(()=>{
    let index = 0;
    const interval = setInterval(()=>{
        setDisplayText(text.slice(0, index+1));
        index++;
        if(index===text.length){
            clearInterval(interval);
        }
    }, 200)
    return()=> clearInterval(interval);
},[])
 return (
      <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center">
         
        <h1 className="text-6xl font-bold font-cursive text-center">
            {displayText}
            <span className="animate-pulse">_</span>
        </h1>
     
      </div>
    );

}
export default Intro;