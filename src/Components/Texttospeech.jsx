import React from 'react'
import { useState ,useEffect} from 'react'

const Texttospeech = () => {
    const [text, settext] = useState("")
    
    const handlechange=(e)=>{
        settext(e.target.value);
    }
    const handleClick=()=>{
            if(window.speechSynthesis)
                {
                    const s=new SpeechSynthesisUtterance(text);
                    s.rate=1.8
                    window.speechSynthesis.speak(s);
                }
                else{
                    alert("your browser does not support this feature");
                }
    }
  return (
    <div className='bg-gray-600 flex justify-center items-center h-[35rem]'>
      <div className='m-2 p-4 border-[1px] border-black flex justify-center items-center flex-col rounded-xl shadow-sm shadow-black' >
        <h1 className='m-2 p-2 text-[1.5rem] text-white'>Text to speech</h1>
            <textarea name="text" id="text" cols="50" rows="8" placeholder='Enter text here....' onChange={handlechange} value={text} className='p-2 m-2'></textarea>
            <button type="button" onClick={handleClick} className='m-3 p-3 bg-black text-white font-bold rounded-md'>Speech</button>
      </div>
    </div>
  )
}

export default Texttospeech
