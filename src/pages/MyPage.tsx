import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ImgList from '../components/imgList';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Pagination from '../components/Pagination';

export interface Data {
  img_url: string;
  date: string;
}

interface Response {
  data: Data[];
  meta: Meta;
}

export interface Meta {
  has_next: boolean;
  has_prev: boolean;
  next_page: number;
  page: number;
  pages: number;
  prev_page: number;
}

const MyPage = () => {
  const [datas, setDatas] = useState<Data[]>();
  const [page, setPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState(5);
  const handlePages = (updatePage: number) => setPage(updatePage);

  // const getData = async (page: number) => {
  //   try {
  //     const response = await axios.get('https://localhost:8000/api/v1/photos');
  //     const imgData = response.data.images;
  //     setTotalPages(response.data.meta.pages);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getData(page); //
  // }, [page]);

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
      <Pagination page={page} totalPages={totalPages} handlePagination={handlePages}/>
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
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.05"
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
  },
  {
    img_url: "https://picsum.photos/600/400/?random",
    date: "2022.09.05"
  }
]