import React from 'react';
import { ReactComponent as Trash } from "../images/trash.svg";

export interface Data {
    id: number;
    url: string;
    created_at: string;
}

const ImgCard = ({ data }: { data: Data }) => 
(
    <div className="flex flex-col w-1/4">
        <img alt="Img" className="flex h-auto w-auto m-3" src={data.url} />
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <h1 className="text-lg">
                {data.created_at}
            </h1>
            <button type="button">
                <Trash className="hover:fill-red-500" />
            </button>
        </footer>
    </div>
)

export default ImgCard;