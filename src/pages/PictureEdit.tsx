import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

export default function PictureEdit() {
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
      <div className="flex ml-[4rem] text-3xl font-myy">Edit</div>
      <div className="flex justify-center items-center">
        <div className="justify-center items-center border-dashed border-8 rounded-3xl h-[30rem] w-[30rem] p-4 border-4">
          <div className="justify-center text-4xl mt-[3rem] font-bmjua">
            이미지 수정
          </div>
        </div>
      </div>
    </div>
  );
}
