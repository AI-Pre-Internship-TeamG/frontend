import React from "react";
import 'axios';
import { request } from "http";

const KAKAO_AUTH_API = "https://kauth.kakao.com/oauth/authorize?response_type=code"
const CLIENT_ID = 'b064ef289bea3fcb44c67d3c08e58420';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_URL = `${KAKAO_AUTH_API}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`

export default function LoginModal({setModalopen}:{setModalopen:any},{navigation}:any){
    const axios= require('axios');
    function closeModal(){
        setModalopen(false);
        
    }
    const openWindow = async()=>{
       const openkakao =  window.open(KAKAO_URL);
       
        
   
    }
    const receiveMessage = function(e:any){
        if(e.data.massage){
            console.log(e.data.massage)
        }
    }
    
    window.addEventListener("message", receiveMessage, false);
  
    return(
        <div className="rounded-3xl font-bmjua bg-white w-1/4 h-1/2 z-[999]  absolute left-1/3 top-1/4 justify-center items-center">
            <div className="flex flex-col justify-items-center items-center">
                <p className="text-4xl my-6  ">깔끔하게 해결해드리겠습니다</p>
                <img className="w-1/2 my-5" alt="logo" src="images/logo.png" />
                <p className="text-2xl text-zinc-600" > 간편 로그인 </p>
                {/* <button type="button" onClick={()=> (window.location.href=`${KAKAO_URL}`)}> */}
                <a href={KAKAO_URL}>
                <img className="flex w-2/5 my-5"  alt="Kakao" src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" />
                {/* </button> */}
                </a>
                <button type="button" onClick={()=> window.document.getElementById('http://localhost:8000/api/v1/users/google/login/')}>
                <img className="flex w-2/5 my-5" alt="google" src="images/google.png" />
                </button>
            </div>
            <button className="rounded border bg-orange-100 border-orange-100 w-1/2 hover:bg-orange-300 my-8" type="button" onClick={closeModal}>
                <p className="text-2xl">닫기</p>
            </button>
        </div>
    )
}