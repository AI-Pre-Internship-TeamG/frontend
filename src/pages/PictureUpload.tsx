import React,{useState,useRef,DragEvent,ChangeEvent, useEffect,} from 'react';
import axios from "axios";
import {blob} from "stream/consumers";
import { useNavigate} from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

function PictureUpload() {
  const navigate = useNavigate();

  const [fileImage,setFileImage] = useState<string>("");
  const [uploadFile, setUploadFile] = useState(new Blob());
  const dropBoxArea = document.getElementById("drop-box");
  dropBoxArea?.addEventListener("dragenter",(event)=>{
    dropBoxArea?.classList.add("highlight")
  })
  dropBoxArea?.addEventListener("dragover",(event)=>{
    dropBoxArea?.classList.add("highlight")
  })

  const handleFileOnChange = async (file:any)=>{
    const options = {  maxWidthOrHeight: 500 };
    try {
      const compressedFile = await imageCompression(file, options);
      const resultFile = new File([compressedFile], compressedFile.name, {
        type: compressedFile.type,
      });
      return resultFile;
    } catch (error) {
       return 0;
      
    }

  };
  
 
  const imageUpload = useRef<any>();
  const onClickImageUpload=()=>{
    imageUpload.current.click();

  };
   
  const saveFileImage = (e: ChangeEvent<HTMLInputElement>)=>{
    const target  = e.currentTarget;
    const files = (target.files as FileList)[0];
    const comp = handleFileOnChange(files);
    console.log('comp',comp)
    const  blob = new Blob([files],{type:"images/jpg+png+jpeg"})
    setUploadFile(blob);
    setFileImage(URL.createObjectURL(blob));
    console.log(blob);
  };

  const dragOver = (e:DragEvent<HTMLDivElement>)=>{
    e.preventDefault();

  };
  const onDropFiles = (e:DragEvent<HTMLDivElement>)=>{
    e.preventDefault();
    const Dropfile =( e.dataTransfer.files as FileList)[0];
    const Dropblob = new Blob([Dropfile],{type:"images/jpg+png+jpeg"})
    setFileImage(URL.createObjectURL(Dropblob))
  }

   const gotoFileEdit =(fileImage:string)=>{
        console.log(localStorage.getItem('token'))
        if (fileImage) {
          const frm = new FormData()
          frm.append('file', uploadFile)

          axios.post("http://localhost:8000/api/v1/photos/upload/", frm ,
              {headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            }})
            .then((res:any) =>(
              
              navigate("/pictureedit", {state:{data:fileImage ,url:res.data.url}})
          ));
          
        } else {
            alert('이미지를 업로드해주세요')
        }
    }

    return (
    <div className="bg-zinc-50">
      
      <Header />
      <div
        
      />
      <div className="flex ml-[4rem] text-3xl font-myy">Upload</div>
      <div className="flex justify-center items-center flex-col">
        {!fileImage &&
        <div id = "drop-box" className=" justify-center items-center border-dashed border-8 rounded-3xl h-[20rem] w-[20rem] p-4 border-4  hover:border-amber-600 focus:outline-none
            md:h-[30rem] md:w-[30rem]"
            onDrop={onDropFiles}
            onDragOver={dragOver}
        >
          <input
              name = "imageUpload"
              type = "file"
              style={{display:"none"}}
              />
          <div className="flex relative justify-center items-center mt-[5rem] top-[-20px] md:top-0">
            <img
              src="Images/Upload_Icon.png"
              alt="파일 아이콘"
              className="w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem]"
            />
          </div>
          <div>
            <div className="relative justify-center top-[-35px] text-2xl mt-[3rem] font-bmjua md:text-4xl md:top-0">
            <p>이미지를 업로드 해주세요.</p>
          </div>
        </div>
          
      </div>}
      {fileImage &&
        <div className="flex relative top-[15px] justify-center items-center  rounded-3xl h-[30rem] w-[30rem] p-4">
          <img className = "flex max-w-[31rem] h-auto max-h-[27rem] md:max-h-[31rem]" alt = "Upload" src={fileImage}/>
        </div>
      }
      <div className="flex w-44 h-12 rounded-md font-bmjua text-xl m-5 bg-orange-100 items-center justify-items-ceneter relative top-[2rem] hover:bg-orange-300 md:w-52 md:h-12 md:text-2xl">
        <button className="w-full" type ="button" onClick ={onClickImageUpload}>파일 업로드</button>
        <input
              name = "imageUpload"
              type = "file"
              onChange={saveFileImage} 
              style={{display:"none"}}
              ref = {imageUpload} />
      </div>
      </div>
      <div className="flex justify-center items-center ">
      <button type="button" className="flex rounded-md bg-orange-50	justify-center mt-[3rem] font-bmjua text-6xl md:text-6xl ease-in duration-300 "
    onClick={()=> gotoFileEdit(fileImage)}>
          <p>사 진 결 정</p>
      </button>
      </div>
    </div>
  );
}

export default PictureUpload;
