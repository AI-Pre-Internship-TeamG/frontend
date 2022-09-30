/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useEffect } from 'react';
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
import { arrayBuffer } from 'stream/consumers';

export default function PictureEdit() {
  const location = useLocation();
  const state = location.state as string;
  const img = new Image();
  img.src = state;
  const [imgwidth, setWidth] = useState(0);
  const [imgheight, setHeight] = useState(0);

  useEffect(() => {
    imgChange();
  }, []);

  console.log(imgwidth, imgheight);

  const canvasRef = React.createRef<ReactSketchCanvasRef>();
  const canvas = canvasRef.current;

  const imgChange = () => {
    if (img.width >= 1000 || img.height >= 1000) {
      img.width /= 5;
      img.height /= 5;
      setWidth(img.width);
      setHeight(img.height);
    } else if (
      (img.width >= 500 && img.width < 1000) ||
      (img.height >= 500 && img.height < 1000)
    ) {
      img.width /= 2;
      img.height /= 2;
      setWidth(img.width);
      setHeight(img.height);
    } else {
      setWidth(img.width);
      setHeight(img.height);
    }
  };

  const [dataURI, setDataURI] = React.useState<string>('');
  console.log(dataURI);
  const [exportImageType, setexportImageType] =
    React.useState<ExportImageType>('jpeg');
  const [paths, setPaths] = React.useState<CanvasPath[]>([]);

  const [lastStroke, setLastStroke] = React.useState<{
    stroke: CanvasPath | null;
  }>({ stroke: null });

  type Handlers = [string, () => void, string][];

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
    const exportImg = canvasRef.current?.exportImage;

    if (exportImg) {
      console.log(exportImg);
      const exportedDataURI = await exportImg(exportImageType);
      setDataURI(exportedDataURI);
      console.log('안녕', exportedDataURI);
    }

    arr.length = currentIndex;

    const data = {
      imgData: dataURI,
      originImgUrl: arr[currentIndex],
    };

    axios
      .post('http://localhost:8000/api/v1/photos/process/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res: any) => {
        setArr((prev) => [
          ...prev,
          res.data.url,
        ]); /* arr은 state이므로 불변을 유지해야해서 코드를 수정했습니다. */
        console.log('나 arr', arr);
        onClick();
      });
  };

  // const undoHandler = () => {
  //   const undo = canvasRef.current?.undo;

  //   if (undo) {
  //     undo();
  //   }
  // };

  // const redoHandler = () => {
  //   const redo = canvasRef.current?.redo;

  //   if (redo) {
  //     redo();
  //   }
  // };

  // const createButton = (
  //   label: string,
  //   handler: () => void,
  //   themeColor: string
  // ) => (
  //   <button
  //     key={label}
  //     className={`btn btn-${themeColor} btn-block`}
  //     type="button"
  //     onClick={handler}
  //   >
  //     {label}
  //   </button>
  // );

  // const buttonsWithHandlers: Handlers = [
  //   ['Undo', undoHandler, 'primary'],
  //   ['Redo', redoHandler, 'primary'],
  // ];

  const [arr, setArr] = useState([state]);
  console.log('Arr이다.', arr);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClick = () => {
    if (currentIndex < arr.length) setCurrentIndex(currentIndex + 1);
  };
  const onTouch = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const files = [state, './Images/kakao.png', './Images/google.png'];
  console.log(files);

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
        {state && (
          <div className="flex justify-center items-center rounded-3xl h-[30rem] w-[30rem] p-4 ">
            <img
              className="flex mt-[0.6rem] absolute w-auto h-auto "
              alt="Upload"
              style={{ width: imgwidth, height: imgheight }}
              src={files[currentIndex]}
            />
            <ReactSketchCanvas
              ref={canvasRef}
              onChange={onChange}
              onStroke={(stroke) => setLastStroke({ stroke })}
              {...canvasProps}
              id="canvas"
              strokeWidth={50}
              strokeColor="black"
              canvasColor="white"
              style={{ width: imgwidth, height: imgheight }}
              className=" max-h-[31rem] max-w-[31rem]  mt-[0.6rem] opacity-20 rounden-3xl stroke-4 stroke-cyan-500 absolute"
            />
            {/* <div className="col-3 panel">
              <div className="d-grid gap-2">
                {buttonsWithHandlers.map(([label, handler, themeColor]) =>
                  createButton(label, handler, themeColor)
                )}
              </div>
            </div> */}
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
      <div className="flex float-right mt-[6rem] mr-[26rem]">
        <div className="flex w-[15rem] h-[4rem] shadow-2xl justify-center items-center border-solid border-2 border-zinc-800 rounded-full">
          <FaAngleLeft className="flex w-[4rem] h-[3rem]" onClick={onTouch} />
          <FaAngleRight className="flex w-[4rem] h-[3rem]" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
