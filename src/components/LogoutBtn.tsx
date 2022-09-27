import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoutBtn() {
  return (
    <div className="Logout">
      <button type="button" className="absolute right-0 float-right mt-[4rem] mr-[3rem] font-sds text-2xl md:text-4xl" onClick={()=>localStorage.removeItem('token')} >
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          Logout
        </Link>
      </button>
    </div>
  );
}
