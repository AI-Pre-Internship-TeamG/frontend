/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { url } from 'inspector';

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
  const navigate = useNavigate();

  console.log(imgwidth, imgheight);

  const canvasRef = React.createRef<ReactSketchCanvasRef>();
  const canvas = canvasRef.current;

  const imgshow = () => (
    <img
      className="flex mt-[0.6rem] relative w-auto h-auto left-1	"
      alt="result"
      style={{ width: imgwidth, height: imgheight, zIndex: '999' }}
      src={files[2]}
    />
  );

  const imgChange = () => {
    if (img.width >= 1000 || img.height >= 1000) {
      img.width /= 5;
      img.height /= 5;
      setWidth(img.width);
      setHeight(img.height);
    } else if (
      (img.width >= 800 && img.width < 1000) ||
      (img.height >= 800 && img.height < 1000)
    ) {
      img.width /= 3;
      img.height /= 3;
      setWidth(img.width);
      setHeight(img.height);
    } else if (
      (img.width >= 500 && img.width < 800) ||
      (img.height >= 500 && img.height < 800)
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

  const [pictureResult, setpictureResult] = useState('');
  const [dataURI, setDataURI] = React.useState<string>('');
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
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
    const exportImg = canvasRef.current?.exportImage;

    if (exportImg) {
      const exportedDataURI = await exportImg(exportImageType);
      setDataURI(exportedDataURI);
      files.length = currentIndex;
      const data = {
        imgData: dataURI,
        originImgUrl: state,
      };

      console.log('데이터', data);

      axios
        .post('http://localhost:8000/api/v1/photos/process/', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response: any) => {
          console.log(response);
          const resulturl = `https://team-g-bucket.s3.ap-northeast-2.amazonaws.com/result/${
            response.data[0].split('/')[1]
          }`;
          setpictureResult(resulturl);
          files.push(resulturl);
          setCurrentIndex(2);
          navigate('/pictureedit', { state: resulturl });
          console.log(files[currentIndex]);
          console.log(resulturl);
          const resultimg = new Image();
          resultimg.src = resulturl;
        });
    }
  };

  const createButton = (
    label: string,
    handler: () => void,
    themeColor: string
  ) => (
    <button
      key={label}
      className={`btn btn-${themeColor} btn-block`}
      type="button"
      onClick={handler}
    >
      {label}
    </button>
  );

  const undoHandler = () => {
    const undo = canvasRef.current?.undo;

    if (undo) {
      undo();
    }
  };

  const redoHandler = () => {
    const redo = canvasRef.current?.redo;

    if (redo) {
      redo();
    }
  };

  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const onClick = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const onTouch = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const files = ['', state];
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
              src={files[1]}
            />

            <ReactSketchCanvas
              ref={canvasRef}
              onChange={onChange}
              onStroke={(stroke) => setLastStroke({ stroke })}
              {...canvasProps}
              id="canvas"
              strokeWidth={50}
              strokeColor="blue"
              style={{ width: imgwidth, height: imgheight }}
              className=" max-h-[31rem] max-w-[31rem]  mt-[0.6rem] opacity-20 rounden-3xl stroke-4 stroke-cyan-500 absolute"
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
      <button
        className="float-right mt-[4rem] mr-[4rem] font-sds text-4xl"
        type="button"
        onClick={() => imageExportHandler()}
      >
        미리보기
      </button>
      <div className="flex float-right mt-[6rem] mr-[26rem]">
        <div className="flex w-[15rem] h-[4rem] shadow-2xl justify-center items-center border-solid border-2 border-zinc-800 rounded-full">
          <FaAngleLeft
            className="flex w-[4rem] h-[3rem] mr-[3rem]"
            onClick={undoHandler}
          />
          <FaAngleRight
            className="flex w-[4rem] h-[3rem]"
            onClick={redoHandler}
          />
        </div>
      </div>
    </div>
  );
}
