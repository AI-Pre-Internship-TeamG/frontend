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
    </div>
  );
}

export default ManagementPage;
