import React from 'react';
import ImgCard from './ImgCard';

// interface Response { 페이지네이션 기능 추가시 필요
//     data: data[];
//     meta: Meta;
//   }

export interface data {
    img_url: string;
    date: string;
  }

const ImgList = ({ data }: { data: data[] }) => (
    <div className="container flex flex-row flex-wrap grow-0 box-border gap-y-5">
        {data.map(data => <ImgCard key={data.img_url} data={data} />)}
    </div>        
)

export default ImgList;