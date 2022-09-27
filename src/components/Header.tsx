import React from 'react';

export default function Header() {
  return (
    <div className="Logo">
      <div className="flex  items-center bg-amber-700	justify-center top-[10px] h-[8rem] w-[20rem] md:h-[10rem] md:w-[25rem] ">
        <a className="flex" href="http://localhost:3000/">
          <img className="w-2/4 ml-7 md:w-full h-2/3" alt="logo" src="images/logo.png" />
        </a>
      </div>
    </div>
  );
}
