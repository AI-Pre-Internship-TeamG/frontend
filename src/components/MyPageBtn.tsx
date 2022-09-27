import React from 'react';
import { Link } from 'react-router-dom';

export default function MyPageBtn() {
  return (
    <div className="flex w-full  bg-orange-400"> 
      <div className="flex relative left-[4/5] mr-[3rem] mt-[4rem] font-sds text-2xl md:text-4xl ">
        <Link
          to="/mypage"
          style={{color: 'inherit', textDecoration: 'inherit',width:'100%' }}
        >
          My Page
        </Link>
      </div>
    </div>
  );
}
