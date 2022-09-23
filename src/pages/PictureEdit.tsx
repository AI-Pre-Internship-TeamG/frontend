/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import { useLocation } from 'react-router-dom';
import EditBtn from '../components/EditBtn';
import axios from 'axios';

/* React canvas */
import {
  ReactSketchCanvas,
  ReactSketchCanvasRef,
  ExportImageType,
  ReactSketchCanvasProps,
  CanvasPath,
} from 'react-sketch-canvas';

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
  const canvasRef = React.createRef<ReactSketchCanvasRef>();
  const [dataURI, setDataURI] = React.useState<string>('');
  const [exportImageType, setexportImageType] =
    React.useState<ExportImageType>('jpeg');
  const [paths, setPaths] = React.useState<CanvasPath[]>([]);

  const [lastStroke, setLastStroke] = React.useState<{
    stroke: CanvasPath | null;
  }>({ stroke: null });

  const [canvasProps, setCanvasProps] = React.useState<
    Partial<ReactSketchCanvasProps>
  >({
    className: 'react-sketch-canvas',
    backgroundImage: '',
    strokeWidth: 50,
    strokeColor: 'blue',
    canvasColor: '#FFFFFF',
    style: { borderRight: '1px solid #CCC' },
    svgStyle: {},
    exportWithBackgroundImage: false,
    withTimestamp: true,
    allowOnlyPointerType: 'all',
  });
  const onChange = (updatedPaths: CanvasPath[]): void => {
    setPaths(updatedPaths);
  };

  const imageExportHandler = async () => {
    const exportImage = canvasRef.current?.exportImage;

    if (exportImage) {
      const exportedDataURI = await exportImage(exportImageType);
      setDataURI(exportedDataURI);
    }

    const data = {
      "imgData": dataURI,
      "originImgUrl": "배경 이미지 url 삽입"
    }

    axios.post("http://localhost:8000/api/v1/photos/process/", data, 
    {
      headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
      }})
        .then((response:any) =>(
          console.log("respone이 들어오면 진행할 것")
        ));
  };

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
              ref={canvasRef}
              onChange={onChange}
              onStroke={(stroke) => setLastStroke({ stroke })}
              {...canvasProps}
              // id="canvas"
              // strokeWidth={50}
              // strokeColor="blue"
              className="w-[60rem] h-[60rem] border-dashed border-8 opacity-20 rounden-3xl stroke-4 stroke-cyan-500 relative -top-full"
            />
          </div>
        )}
      </div>
      <button
        className="float-right mt-[4rem] mr-[4rem] font-sds text-4xl"
        type="button"
      >
        확정하기
      </button>
      {/* <EditBtn name={'확정하기'} onClick={() => imageExportHandler()} /> */}
      <button
        className="float-right mt-[4rem] mr-[4rem] font-sds text-4xl"
        type="button"
        onClick={() => imageExportHandler()}
      >
        미리보기
      </button>
      {/* <div className="flex float-right mt-[6rem] mr-[26rem]">
        <div className="flex w-[15rem] h-[4rem] shadow-2xl justify-center items-center border-solid border-2 border-zinc-800 rounded-full">
          <FaAngleLeft className="flex w-[4rem] h-[3rem]" />
          <BsEraser className="flex w-[4rem] h-[3rem]" />
          <FaAngleRight className="flex w-[4rem] h-[3rem]" />
        </div>
      </div> */}
    </div>
  );
}
