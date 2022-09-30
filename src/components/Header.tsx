import React from 'react';
import LogoutBtn from './LogoutBtn';
import MyPageBtn from './MyPageBtn';

export default function Header() {
  return (
    <div className="flex flex-row border-b-2 shadow-md shadow-gray-200	bg-orange-50	">
      <div className="flex  ">
        <a className="flex" href="http://localhost:8080/">
          <p className="text-9xl pl-16 font-dancing italic">Alone</p>
        </a>
          <div className="flex absolute left-[85%] "> 
            <LogoutBtn />
          </div>
          <div className="flex absolute float-right left-[70%] ">
              <MyPageBtn />
          </div>  
      </div>
    </div>
  );
}
