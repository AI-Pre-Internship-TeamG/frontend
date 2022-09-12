import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ImgList from '../components/imgList';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';

export interface Data {
  img_url: string;
  date: string;
}

const MyPage = () => {
  const [datas, setDatas] = useState<Data[]>();

  useEffect(() => {
    setDatas(example);
  }, []); 

  return (
    <>
      <LogoutBtn />
      <MyPageBtn />
      <Header/>
      <div className="m-4">  
        <ImgList data={datas} />
      </div>
    </>
  )
}

export default MyPage;

const example: Data[] = [
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.08.30"
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.01"
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.02"
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.03"
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.04"
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.05"
  }
]