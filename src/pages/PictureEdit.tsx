/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Btn from '../components/Btn';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsEraser } from 'react-icons/bs';

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
      <Btn name={'확정하기'} />
      <Btn name={'미리보기'} />
      <div className="flex float-right mt-[3rem] mr-[18rem]">
        <div className="flex w-[15rem] h-[4rem] justify-center items-center bg-white border-zinc-900 rounded-full">
          <FaAngleLeft className="flex w-[4rem] h-[3rem]" />
          <BsEraser className="flex w-[4rem] h-[3rem]" />
          <FaAngleRight className="flex w-[4rem] h-[3rem]" />
        </div>
      </div>
    </div>
  );
}
