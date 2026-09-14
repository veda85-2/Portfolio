import { useEffect, useState } from "react";


function Intro({onEnter}){
const text = "Welcome";

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
      <div className="intro-sec h-screen w-full text-white flex flex-col items-center justify-center gap-16">
         
        <h1 className="text-6xl font-bold font-cursive text-center">
            {displayText}
            <span className="animate-pulse"></span>
        </h1>
       <button
        onClick={onEnter}
        className="px-6 py-6 border border-white rounded-lg hover:bg-white hover:text-red  transition h-[80px] w-[80px]"
      >click me
      </button>
     
      </div>
    );

}

export default Intro;
