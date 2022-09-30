import React from "react";
import ReactLoading from 'react-loading';
import { useNavigate } from "react-router-dom";

import spinner from '../images/spinner.gif';

export default function Loading ({setloadingmodal}:{setloadingmodal:any}){
    const navigate = useNavigate();

    return(
        
        <div>
                <div className="flex w-full h-full justify-center items-center">
                <img className ="flex absolute top-32 w-1/5" alt="Spinner" src={spinner}/>
                    <p className="absolute text-center w-full top-1/2 text-7xl items-center font-bmjua justify-center">
                        AI 가 사진 속 객체를 지우고 있습니다..
                    </p>
                </div>
            
        </div>
    )
}