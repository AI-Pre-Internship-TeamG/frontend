import React,{useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

function PictureUpload() {
  const [fileImage,setFileImage] = useState("");
  const imageInput = useRef<any>();
  const onClickImageUpload=()=>{
      imageInput.current.click();
    
  };
  
  const saveFileImage = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const target  = e.currentTarget;
    const files = (target.files as FileList)[0];
    const  blob = new Blob([files],{type:"images/jpg+png+jpeg"})
    setFileImage(URL.createObjectURL(blob));
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
      <div className="flex ml-[4rem] text-3xl font-myy">Upload</div>
      <div className="flex justify-center items-center flex-col">
        {!fileImage &&
        <div className="justify-center items-center border-dashed border-8 rounded-3xl h-[30rem] w-[30rem] p-4 border-4">
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
              ref = {imageInput} />
      </div>
      </div>
      <div className="flex justify-center mt-[3rem] font-sds text-6xl">
        <Link
          to="/pictureedit"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          state={{data:fileImage}}
        >
          사 진 결 정
        </Link>
      </div>
    </div>
  );
}

export default PictureUpload;
