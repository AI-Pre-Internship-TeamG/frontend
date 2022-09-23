/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Link } from 'react-router-dom';

interface BtnProps {
  name: string;
  onClick: () => void;
}
// type Props = {
//   onClick: Function;
// };

function EditBtn({ name, onClick }: BtnProps) {
  return (
    <div className="Btn">
      <div className="float-right mt-[4rem] mr-[4rem] font-sds text-4xl">
        <Link
          to="/"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          onClick={() => onClick()}
        >
          <p>{name}</p>
        </Link>
      </div>
    </div>
  );
}
export default EditBtn;
