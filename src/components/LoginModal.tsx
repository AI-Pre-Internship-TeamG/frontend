import React from "react";


export default function LoginModal({setModalopen}:{setModalopen:any}){
    function closeModal(){
        setModalopen(false);
    }
    return(
        <div className="rounded-3xl font-bmjua bg-white w-1/4 h-1/2 z-[999]  absolute left-1/3 top-1/4 justify-center items-center">
            <div className="flex flex-col justify-items-center items-center">
                <p className="text-4xl my-6  ">깔끔하게 해결해드리겠습니다</p>
                <img className="w-1/2 my-5" alt="logo" src="images/logo.png" />
                <p className="text-2xl text-zinc-600"> 간편 로그인 </p>
                <img className="flex w-2/5 my-5" alt="Kakao" src="images/kakao.png" />
                <img className="flex w-2/5 my-5" alt="google" src="images/google.png" />
            </div>
            <button className="rounded border bg-orange-100 border-orange-100 w-1/2 hover:bg-orange-300 my-8" type="button" onClick={closeModal}>
                <p className="text-2xl">닫기</p>
            </button>
        </div>
    )
}