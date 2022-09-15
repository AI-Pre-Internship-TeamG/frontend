import React,{useState,useRef,DragEvent,ChangeEvent,} from 'react';
import { useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

function PictureUpload() {
  const navigate = useNavigate();
  const [fileImage,setFileImage] = useState<string>("");
  const dropBoxArea = document.getElementById("drop-box");
  dropBoxArea?.addEventListener("dragenter",(event)=>{
    dropBoxArea?.classList.add("highlight")
  })
  dropBoxArea?.addEventListener("dragover",(event)=>{
    dropBoxArea?.classList.add("highlight")
  })

 
  
  const imageUpload = useRef<any>();
  const onClickImageUpload=()=>{
    imageUpload.current.click();
  };
  
  const saveFileImage = (e: ChangeEvent<HTMLInputElement>)=>{
    const target  = e.currentTarget;
    const files = (target.files as FileList)[0];
    const  blob = new Blob([files],{type:"images/jpg+png+jpeg"})
    setFileImage(URL.createObjectURL(blob));
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
    if (fileImage){
      navigate("/pictureedit",{state:fileImage})
    }else{
        alert('이미지를 업로드해주세요')
    }
  }

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
      <div className="flex ml-[4rem] text-3xl font-myy">Upload</div>
      <div className="flex justify-center items-center flex-col">
        {!fileImage &&
        <div id = "drop-box" className="justify-center items-center border-dashed border-8 rounded-3xl h-[30rem] w-[30rem] p-4 border-4 hover:border-amber-600 focus:outline-none"
            onDrop={onDropFiles}
            onDragOver={dragOver}
        >
          <input
              name = "imageUpload"
              type = "file"
              style={{display:"none"}}
              />
          <div className="flex justify-center items-center mt-[5rem]">
            <img
              src="Images/Upload_Icon.png"
              alt="파일 아이콘"
              width="200rem"
              className="image"
            />
          </div>
          <div>
            <div className="justify-center text-4xl mt-[3rem] font-bmjua">
            <p>이미지를 업로드 해주세요.</p>
            </div>
          </div>
          
      </div>}
      {fileImage &&
        <div className="flex justify-center items-center  rounded-3xl h-[30rem] w-[30rem] p-4">
          <img className = "flex w-auto h-auto max-h-[31rem]" alt = "Upload" src={fileImage}/>
        </div>
      }
      <div className="flex w-48 h-12 rounded-md font-bmjua text-2xl m-5 bg-orange-100 items-center justify-items-ceneter relative top-[2rem] hover:bg-orange-300">
        <button className="w-full" type ="button" onClick ={onClickImageUpload}>파일 업로드</button>
        <input
              name = "imageUpload"
              type = "file"
              onChange={saveFileImage} 
              style={{display:"none"}}
              ref = {imageUpload} />
      </div>
      </div>
      <div className="flex justify-center items-center">
      <button type="button" className="flex justify-center mt-[3rem] font-sds text-6xl"
        onClick={()=>gotoFileEdit(fileImage)}>
          <p>사 진 결 정</p>
      </button>
      </div>
    </div>
  );
}

export default PictureUpload;
