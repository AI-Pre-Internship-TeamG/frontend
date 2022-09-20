/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Btn from '../components/Btn';
import { useLocation } from 'react-router-dom';

/* React canvas */
import { ReactSketchCanvas } from 'react-sketch-canvas';

/* React Icons */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsEraser } from 'react-icons/bs';
import EditTool from '../components/EditTool';

interface imgLocation {
  data: string;
}

export default function PictureEdit() {
  const location = useLocation();
  const state = location.state as imgLocation;
  const { data } = state;

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
      <div className="flex ml-[4rem] text-3xl font-myy">Edit</div>
      <div className="flex justify-center items-center">
        {data && (
          <div className="justify-center items-center border-dashed border-8 rounded-3xl h-[30rem] w-[30rem] p-4 ">
            <img
              className="flex mt-[0.6rem] w-auto h-auto max-h-[31rem]"
              alt="Upload"
              src={data}
            />

            <ReactSketchCanvas
              id="canvas"
              strokeWidth={50}
              strokeColor="blue"
              className="w-[60rem] h-[60rem] border-dashed border-8 opacity-20 rounden-3xl stroke-4 stroke-cyan-500 relative -top-full"
            />
          </div>
        )}
      </div>
      <Btn name={'확정하기'} />
      <Btn name={'미리보기'} />
      <EditTool />
      <div className="flex float-right mt-[6rem] mr-[26rem]">
        <div className="flex w-[15rem] h-[4rem] shadow-2xl justify-center items-center border-solid border-2 border-zinc-800 rounded-full">
          <FaAngleLeft className="flex w-[4rem] h-[3rem]" />
          <BsEraser className="flex w-[4rem] h-[3rem]" />
          <FaAngleRight className="flex w-[4rem] h-[3rem]" />
        </div>
      </div>
    </div>
  );
}
