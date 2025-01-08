'use client'
import { SetStateAction, useState } from "react";

export default function CommentSection(){

  const [showText,setShowText] = useState("");
  const [saveText,setSaveText] = useState<string[]>([]);

  

  const handleChanged = (e: { target: { value: SetStateAction<string>; }; })=>{
      
      setShowText(e.target.value)
  }
  
  const handleSave = () => {
    if (showText.trim()) { // Prevent empty comments
      setSaveText([...saveText, showText]); // Add new comment to the list
      setShowText(""); 
    }
  };

    return(
        <div>
            <h2 className="text-center Heading py-10 font-satoshi font-bold md:text-3xl text-2xl">Add Comment</h2>
<div className="flex justify-center mx-auto">

<input type="text" value={showText} onChange={handleChanged} width={100} height={50}  placeholder=" Enter your message  😊" className="text-black md:w-[550px] lg:w-[750px] sm:w-[350px] sm:h-[50px] px-2 py-2 outline-none rounded-md focus:border-teal-600 border-solid border-2"/>
</div>
<div className="flex justify-center">
<button onClick={handleSave} className="w-[150px] h-[40px] sm:w-[350px] md:w-[550px] lg:w-[750px] sm:h-[40px] rounded-full  bg-slate-500 text-white font-sans mt-4 hover:bg-indigo-500 ">Add comments</button>

</div>

<div className="flex justify-center mt-4 h-auto md:w-[550px] lg:w-[750px] sm:w-[350px] w-[250px] rounded-md bg-slate-50 mx-auto">
        <ul className="list-none">
          {saveText.map((comment, index) => (
            <li key={index} className="mb-2 text-center text-gray-700">
              {comment}
              <li className="w-[250px] sm:w-[350px] md:w-[550px] lg:w-[750px]  border-[1px]">
                <hr />
              </li>
            </li>
          ))}
        </ul>
      </div>

        </div>
    )
}