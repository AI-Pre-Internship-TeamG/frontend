import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import ImgList from '../components/ImgCard';
import ImgCard from '../components/ImgCard';

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
      <Header/>
      {datas?.map(data => <ImgList key={data.img_url} data={data} />)}
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