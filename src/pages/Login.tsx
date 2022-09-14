/* eslint-disable react/button-has-type */
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import Header from '../components/Header';

export default function Login() {
  const [modalOpen,setModalopen] = useState(false);
  function showModal(){
    setModalopen(true);
  }
  return (
    <div className="bg-zinc-50">
      <Header />
      <div className="flex float-right w-[42rem] h-[42rem] mr-[10rem]">
        <img className="MainImage" alt="mainimage" src="images/magic.gif" />
      </div>
      <div className="flex w-[55rem] h-[4rem] ml-[5rem] mt-[5rem] font-bold font-melon text-8xl">
        <p>지우고 싶은 이미지</p>
      </div>
      <div className="flex w-[55rem] h-[4rem] ml-[5rem] mt-[3rem] font-bold font-melon text-8xl">
        <p>깔끔하게 지워드립니다!</p>
      </div>
      <button type = "button" className="left-44  flex justify-center mt-[10rem] font-sds text-6xl relative " onClick={showModal}>
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
