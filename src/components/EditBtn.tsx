import React from 'react';
import { Link } from 'react-router-dom';

function Btn({ name }: { name: string }) {
  return (
    <div className="Btn">
      <div className="float-right mt-[4rem] mr-[4rem] font-sds text-4xl">
        <Link
          to="/mypage"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <p>{name}</p>
        </Link>
      </div>
    </div>
  );
}
export default Btn;
