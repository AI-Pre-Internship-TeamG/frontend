import React from 'react';
import { Link } from 'react-router-dom';

export default function PictureEdit() {
  
  
  return (
     <>
     <div>PictureEdit</div>
     <Link
          to="/results"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
      사진 결과창
      </Link>
     </>

  );

}
