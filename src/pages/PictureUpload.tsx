import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

function PictureUpload() {
  return (
    <div className="bg-zinc-50">
      <LogoutBtn />
      <MyPageBtn />
      <Header />
      <div className="flex ml-[4rem] text-3xl font-myy">Upload</div>
      <div className="flex justify-center items-center">
        <div className="justify-center items-center border-dashed rounded-2xl h-[30rem] w-[30rem] p-4 border-4">
          <div className="flex justify-center items-center mt-[5rem]">
            <img
              src="Images/Upload_Icon.png"
              alt="파일 아이콘"
              width="200rem"
              className="image"
            />
          </div>
          <div className="justify-center text-4xl mt-[3rem] font-bmjua">
            이미지를 업로드 해주세요.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[5rem] font-sds text-6xl">
        <Link
          to="/pictureedit"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          사 진 결 정
        </Link>
      </div>
    </div>
  );
}

export default PictureUpload;
