import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ImgList from '../components/imgList';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Pagination from '../components/Pagination';

export interface Data {
  id: number;
  url: string;
  created_at: string;
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
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
  const handlePages = (updatePage: number) => setPage(updatePage);

  const getData = async (page: number) => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/photos/', {
        params: {"page": page},
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}` // 추후 관리하는 Token 삽입 할 것
    }});
      setDatas(response.data.images);
      setTotalPages(response.data.meta.pages);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(page); //
   
  }, [page]);
  console.log(datas);
  return (
    <>
      
      <Header/>
      <div className="m-4">  
        <ImgList data={datas} />
      </div>
      <Pagination page={page} totalPages={totalPages} handlePagination={handlePages}/>
    </>
  )
}

export default MyPage;
