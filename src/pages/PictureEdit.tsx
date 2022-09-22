/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import { useLocation } from 'react-router-dom';

/* React canvas */
import { ReactSketchCanvas, ReactSketchCanvasRef, ExportImageType, ReactSketchCanvasProps, CanvasPath } from 'react-sketch-canvas';

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
  const [exportImageType, setexportImageType] =  React.useState<ExportImageType>('png');
  const [paths, setPaths] = React.useState<CanvasPath[]>([]);

  const [lastStroke, setLastStroke] = React.useState<{
    stroke: CanvasPath | null;
  }>({ stroke: null});

  const [canvasProps, setCanvasProps] = React.useState<
    Partial<ReactSketchCanvasProps>
  >({
    className: 'react-sketch-canvas',
    strokeWidth: 50,
    eraserWidth: 5,
    backgroundImage:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg',
    strokeColor: "blue",
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
    console.log(dataURI);
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
              onStroke={(stroke) =>
                setLastStroke({ stroke})
              }
              {...canvasProps}
              // id="canvas"
              // strokeWidth={50}
              // strokeColor="blue"
              // className="w-[60rem] h-[60rem] border-dashed border-8 opacity-20 rounden-3xl stroke-4 stroke-cyan-500 relative -top-full"
            />
          </div>
        )}
      </div>
      <button type="button" onClick={ () => imageExportHandler()}>확정하기</button> 
      <button type="button">마리보기</button> 
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
