/* eslint-disable import/order */
import React from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

/* React Icons */
import { BsTrash } from 'react-icons/bs';

function ManagementPage() {
  return (
    <div className="bg-zinc-50">
      <LogoutBtn />
      <MyPageBtn />
      <Header />
      <div
        style={{
          flex: 1,
          height: '5px',
          backgroundColor: 'black',
          marginBottom: '10px',
        }}
      />
      <div className="flex ml-[4rem] text-3xl font-myy">Management</div>
      <div className="flex justify-center items-center">
        <div className="justify-center items-center border-solid border-8 rounded-3xl mt-[1rem] h-[35rem] w-[105rem] p-4">
          <div>
            <p className="flex text-4xl ml-[8rem] font-bmjua">
              ID
              <p className="ml-[15rem]">Email</p>
              <p className="ml-[16rem]">Username</p>
              <p className="ml-[13rem]">Date</p>
              <p className="ml-[13rem]">Remove</p>
            </p>
          </div>
          <div
            style={{
              flex: 1,
              height: '5px',
              backgroundColor: 'black',
              marginBottom: '10px',
            }}
          />
          <div className="flex justify-center items-center bg-gray-300 border-solid border-2 rounded-2xl h-[5rem]">
            <p className="flex text-4xl font-bmjua">기능부분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementPage;
