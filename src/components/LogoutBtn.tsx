import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoutBtn() {
  return (
    <div className="Logout">
      <button type="button" className="float-right mt-[4rem] mr-[3rem] font-bmjua text-4xl" onClick={()=>localStorage.removeItem('token')} >
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          Logout
        </Link>
      </button>
    </div>
  );
}
