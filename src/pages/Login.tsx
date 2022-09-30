/* eslint-disable react/button-has-type */
import React,{useEffect, useState} from 'react';
import { useNavigate,Link} from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import Header from '../components/Header';

export default function Login() {
  const navigate = useNavigate();
  const [modalOpen,setModalopen] = useState(false);
  function showModal(){
    setModalopen(true);
  }
  useEffect(()=>{
    const islogin = localStorage.getItem('token')
    if (islogin){
      navigate('/pictureupload')
    }
  },[])
  return (
    <div className="bg-zinc-50">
      <Header />
      <div className="flex float-right w-[28rem] h-[28rem] mr-[5rem] mt-[5rem]">
        <img className="MainImage" alt="mainimage" src="images/magic.gif" />
      </div>
      <div className="text-stone-800	flex w-[40rem] h-[4rem] ml-[5rem] mt-[5rem] font-bold font-dancing text-8xl tracking-wide">
        <p>지우고 싶은 이미지</p>
      </div>
      <div className="text-stone-800	flex w-[40rem] h-[4rem] ml-[5rem] mt-[3rem] font-bold font-dancing text-8xl tracking-wide">
        <p>깔끔하게 지워드립니다</p>
      </div>
      <button type = "button" className="left-44  flex justify-center mt-[10rem] font-bmjua text-6xl relative hover:text-yellow-500	" onClick={showModal}>
        로 그 인
      </button>
      {modalOpen && 
        <div className="fixed inset-0 bg-zinc-900/[.8]">
        <LoginModal setModalopen={setModalopen}/>
        </div>  
      }
      
    </div>
  );
}
