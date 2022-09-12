/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default function Login() {
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
      <div className="flex justify-center mt-[10rem] font-sds text-6xl">
        <Link
          to="/pictureupload"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          로 그 인
        </Link>
      </div>
    </div>
  );
}
