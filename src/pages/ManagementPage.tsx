import React from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

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
        <div className="justify-center items-center border-dashed border-8 rounded-3xl h-[30rem] w-[50rem] p-4 border-4">
          <div className="flex justify-center items-center mt-[5rem]">
            <div className="flex justify-center items-center border-solid border-2 rounded-2xl h-[5rem]">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementPage;
