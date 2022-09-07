import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoutBtn() {
  return (
    <div className="Logout">
      <div className="float-right mt-[4rem] mr-[3rem] font-sds text-4xl">
        <Link
          to="/SignUp"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          로 그 아 웃
        </Link>
      </div>
    </div>
  );
}
