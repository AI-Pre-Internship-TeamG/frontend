import React, { useState } from 'react';
import ImgCard, {Data} from './ImgCard';
import Picturemodal from './picturemodal';

 function ImgList  ({data}:{data:Data[]|undefined}){
    const [picmodal,setPicmodal] = useState(0);
    const [open,setOpen] = useState(false)
    const openmodal = (id:any) =>{
        setPicmodal(id);
        console.log(id);
    }
  
    return(
        <div className="container flex flex-row flex-wrap grow-0 box-border gap-y-2 h-5/6 justify-center items-center">
            {data?.map((data,index) => (
            <div className=" w-1/3 m-9 rounded-md font-bmjua ">
                <button type="button" onClick={()=>openmodal(data.id)} className="flex w-11/12 justify-center items-center hover:opacity-60 hover:w-full"> 
                 <ImgCard key={data.id} data={data} />
                </button>
                {(picmodal === data.id)&&
                    <div className="fixed inset-0 bg-zinc-900/[.8]">
                        <Picturemodal imgurl = {data.url}  picmodal={setPicmodal}/>
                    </div>
                }
            </div>
            
            ))}
        </div> 
    )
    }

export default ImgList;