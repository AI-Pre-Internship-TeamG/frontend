import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoutBtn() {
  return (
    <div className="Logout">
      <div className="float-right mt-[4rem] mr-[3rem] font-sds text-4xl">
        <Link
          to="/mypage"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          My Page
        </Link>
      </div>
    </div>
  );
}
