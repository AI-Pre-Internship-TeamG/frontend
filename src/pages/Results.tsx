import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Button from '../components/Button';
import { Data } from '../components/ImgCard';


export default function Results() {

  const { id } = useParams();    
  const photo = id;
  const [data, setData] = useState<Data>();

  const GetData = async () => {
    try {
      const result = await axios.get<Data>(`http://localhost:8000/api/v1/photos/${photo}/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `` // 추후 관리하는 Token 삽입 할 것
    }});
    setData(result.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    GetData(); 
  }, []);

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
      <div className="flex items-center justify-items-ceneter flex-col w-full mt-10"  >
        <img src={data?.url} alt="이미지" style={{display:"flex", width:"40%", borderRadius:"2rem"}} className="image" />
      <div className="flex flex-row items-center justify-items-center w-1/3" >
        <Button name= "다운로드" downUrl={data?.url}/>
        <Button name = "공유하기" downUrl=" "/>
      </div>
      </div>
    </div>
  )
}
