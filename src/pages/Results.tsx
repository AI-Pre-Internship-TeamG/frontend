import React ,{useEffect,useState } from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Button from '../components/Button';


export default function Results() {
  return (
    <div className="bg-zinc-50"> 
      <LogoutBtn />
      <MyPageBtn />
      <Header />
      <div
        style={{
          flex: 1,
          height: '5px',
          backgroundColor: 'black',
          marginBottom: '10px',
        }}
      />
      <div className="flex items-center justify-items-ceneter flex-col w-full mt-10"  >
        <img src="https://via.placeholder.com/160" alt="이미지" style={{display:"flex", width:"40%", borderRadius:"2rem"}} className="image" />
      <div className="flex flex-row items-center justify-items-center w-1/3" >
        <Button name= "다운로드"/>
        <Button name = "공유하기"/>
      </div>
      </div>
    </div>
  )
}
