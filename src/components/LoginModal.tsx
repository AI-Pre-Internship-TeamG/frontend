import React from "react";
import 'axios';




const KAKAO_AUTH_API =' https://kauth.kakao.com/oauth/authorize?response_type=code';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI ='http://localhost:3000/oauth/callback/kakao';

const SCOPE ='https://www.googleapis.com/auth/userinfo.email';
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI ='http://localhost:3000/oauth/callback/google';

const KAKAO_URL = `${KAKAO_AUTH_API}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=${GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=${SCOPE}`;




export default function LoginModal({setModalopen}:{setModalopen:any},{navigation}:any){

    function closeModal(){
        setModalopen(false);
        
    }  
    return(
        <div className="rounded-3xl font-bmjua bg-white w-1/4 h-1/2 z-[999]  absolute left-1/3 top-1/4 justify-center items-center">
            <div className="flex flex-col justify-items-center items-center">
                <p className="text-4xl my-6  ">깔끔하게 해결해드리겠습니다</p>
                <img className="w-1/2 my-5" alt="logo" src="images/logo.png" />
                <p className="text-2xl text-zinc-600" > 간편 로그인 </p>
                <div className="flex w-full flex-col justify-center items-center">
                    <a  className="flex w-full justify-center items-center my-5" href={KAKAO_URL}>
                        <img  alt="Kakao" src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" />
                    </a>
                    <a className="flex w-full h-full justify-center items-center my-5" href={GOOGLE_URL}>
                        <img  alt="google" src="images/google.png" />
                    </a>
                </div>
            </div>
            <button className="rounded border bg-orange-100 border-orange-100 w-1/2 hover:bg-orange-300 my-8" type="button" onClick={closeModal}>
                <p className="text-2xl">닫기</p>
            </button>
        </div>
    )
}