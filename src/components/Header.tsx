import React from 'react';

export default function Header() {
  return (
    <div className="Logo">
      <div className="flex p-[50px] w-[30rem] h-[10rem]">
        <a className="flex" href="http://localhost:3000/">
          <img className="logoImage" alt="logo" src="images/logo.png" />
        </a>
      </div>
    </div>
  );
}
