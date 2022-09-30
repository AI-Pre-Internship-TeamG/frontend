import React from "react";
import {HiPause,HiOutlineX} from 'react-icons/hi'
import Button from "./Button";

export default function Picturemodal({imgurl,picmodal}:any){
    console.log(imgurl)
    const closemodal =()=>{
       picmodal(false);
       console.log('눌림');
       
    }
    return(
        <div className="rounded-3xl font-bmjua bg-white w-[80%] h-[70%] z-[999]  absolute left-[10%] top-[15%] justify-center items-center transition duration-150 ease-in">
            
            <div className="flex flex-col justify-center items-center w-full ">
                <div className="flex flex-row  w-full ">
                <HiOutlineX size="25" onClick={closemodal} className="mt-2 relative left-[90%] "/>
            <p className="font-dancing text-7xl left-[50%]">Alone</p>
            </div>
            <img
              className="flex relative  w-[70%] h-auto max-h-[8/10] max-w-full	"
              alt="Upload"
              style={{display:'flex'}}
              src={imgurl}
            />
             <div className="flex relative  animate-bounce hover:ease-in"> 
             <Button name="다운로드" downUrl={imgurl} />
             </div>
            </div>
        </div>
    )
    }