import { useEffect, useState } from "react";


function Intro({onEnter}){
const text = "";

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
            <span className="animate-pulse">_</span>
        </h1>
       <button
        onClick={onEnter}
        className="px-6 py-6 border border-white rounded-lg hover:bg-white hover:text-red transition h-[50px] w-[50px]"
      >
      </button>
     
      </div>
    );

}

export default Intro;
// function Intro({ onEnter }) {

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">

//       <h1>
//         Welcome to my Portfolio
//       </h1>

//       <button onClick={onEnter}>
//         Enter Portfolio
//       </button>

//     </div>
//   );
// }

// export default Intro;