import React from 'react';
import ImgCard, {Data} from './ImgCard';

const ImgList = ({ data }: { data: Data[] | undefined }) => (
    <div className="container flex flex-row flex-wrap grow-0 box-border gap-y-5">
        {data?.map(data => <ImgCard key={data.id} data={data} />)}
    </div> 
)

export default ImgList;