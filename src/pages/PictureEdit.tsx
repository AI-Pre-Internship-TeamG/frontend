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
import Loading from '../components/Loading';
import Picturemodal from '../components/picturemodal';
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



export default function PictureEdit() {
  const [loading, setLoading] = useState(false);
  const [reload, setreload] = useState(0);
  const location = useLocation();
  const state = location.state as any;
  const downloadurl = state.data
  const img = new Image()
  img.src = state.data
  const [imgwidth, setWidth] = useState(0);
  const [imgheight, setHeight] = useState(0);
  const [picmodal, setPicmodal] = useState(false);
  const [load, setLoad] = useState(false)
  // useEffect(window.location.reload(),[]);

  useEffect(() => {
    setWidth(img.width);
    setHeight(img.height);
    // window.location.reload()
  }, []);

  const navigate = useNavigate()



  const canvasRef = React.createRef<ReactSketchCanvasRef>();
  const canvas = canvasRef.current;


  const imgshow = () => (
    <img
      className="flex mt-[0.6rem] relative w-auto h-auto left-1	"
      alt="result"
      style={{ width: imgwidth, height: imgheight, zIndex: '999' }}
      src={files[2]}
    />
  )

  const [saveurl, setSaveurl] = useState('');
  const [pictureResult, setpictureResult] = useState('');

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


  const gotoFilesave = (fileImage: string) => {
    console.log(localStorage.getItem('token'))

    const frm = new FormData()
    frm.append('img_url', fileImage)
    console.log(fileImage);
    const data = {
      img_url: fileImage
    }

    try {
      axios.post("http://localhost:8000/api/v1/photos/", data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then((res: any) => (
        console.log(res)

      ));
    }
    catch (e) {
      console.log(e);


    }
  }


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
        imgData: exportedDataURI,
        originImgUrl: state.url,
      };

      setLoading(true);
      if (data.imgData) {
        try {
          await axios
            .post('http://localhost:8000/api/v1/photos/process/', data, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            })
            .then((response: any) => {
              const resulturl = `https://team-g-bucket.s3.ap-northeast-2.amazonaws.com/result/${response.data[0].split('/')[1]}`;
              setpictureResult(resulturl);
              files.push(resulturl);
              navigate("/pictureedit", { state: { data: resulturl } })
              const resultimg = new Image();
              resultimg.src = resulturl
              setLoading(false);
              setSaveurl(resulturl)
            });

        }
        catch (e) {
          console.log('??????');
          setLoading(false);
        }

      }
    }
  }



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

  const buttonsWithHandlers: Handlers = [
    ['Undo', undoHandler, 'primary'],
    ['Redo', redoHandler, 'primary'],
  ];

  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const onClick = () => {
    if (currentIndex < arr.length) setCurrentIndex(currentIndex + 1);
  };
  const onTouch = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const files = ['', state.data,];

  return (
    <div className="bg-zinc-50">

      <Header />
      <div
      />
      <div className="flex ml-[4rem] text-3xl font-myy">Edit</div>
      <div className="flex justify-center items-center">
        {state.data && (


          <div className="flex justify-center items-center rounded-3xl h-[30rem] w-[30rem] p-4 ">
            <img
              className="flex mt-[0.6rem] absolute w-auto h-auto "
              alt="Upload"
              style={{ width: imgwidth, height: imgheight }}
              src={files[1]}
            />

            {/* <img
             className="flex mt-[0.6rem] relative w-auto h-auto left-1	"
             alt="result"
             style={{width:imgwidth,height:imgheight,zIndex:'999'}}
             src={files[2]}
           />
             */}

            <ReactSketchCanvas
              ref={canvasRef}
              onChange={onChange}
              onStroke={(stroke) => setLastStroke({ stroke })}
              {...canvasProps}
              id="canvas"
              strokeWidth={50}
              strokeColor="blue"
              style={{ width: imgwidth, height: imgheight }}
              className=" mt-[0.6rem] opacity-20 rounden-3xl stroke-4 stroke-cyan-500 absolute"
             
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
        className="float-right mt-[4rem] mr-[4rem] font-bmjua text-3xl rounded-md bg-orange-100  w-48 h-12 hover:bg-orange-300 transition duration-150 ease-out hover:ease-in"
        type="button"
        onClick={() => { setPicmodal(true); gotoFilesave(saveurl) }}
      >
        ????????????
      </button>
      {/* <EditBtn name={'????????????'} onClick={() => imageExportHandler()} /> */}
      <button
        className="float-right mt-[4rem] mr-[4rem] font-bmjua text-3xl rounded-md bg-orange-100  w-48 h-12 hover:bg-orange-300"
        type="button"
        onClick={() => imageExportHandler()}
      >
        ????????????
      </button>
      <div className="flex float-right absolute mt-[6rem] ml-[8rem] left-1/3">
        <div className="flex w-[15rem] h-[4rem] shadow-2xl justify-center items-center border-solid border-2 border-orange-100 flex bg-amber-100 rounded-full">
          <FaAngleLeft style={{color:'#F59E0B'}} className="flex	w-[4rem] h-[3rem] mr-[3rem] " onClick={undoHandler} />
          <FaAngleRight style= {{color:'#F59E0B'}} className="flex 	w-[4rem] h-[3rem]	" onClick={redoHandler} />

        </div>
      </div>
      {loading &&
        <div className="justify-center items-center fixed inset-0 bg-white/[.8]">
          <Loading setloadingmodal={loading} />
        </div>
      }
      {picmodal &&
        <div className="fixed inset-0 bg-zinc-900/[.8]">
          <Picturemodal imgurl={state.data} picmodal={setPicmodal} />
        </div>
      }
    </div>
  );
}
