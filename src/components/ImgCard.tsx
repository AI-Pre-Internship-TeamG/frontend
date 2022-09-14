import React from 'react';
import { ReactComponent as Trash } from "../images/trash.svg";

export interface data {
    img_url: string;
    date: string;
}

const ImgCard = ({ data }: { data: data }) => (
    <div className="flex flex-col w-1/4">
        <img alt="Img" className="flex h-auto w-auto m-3" src={data.img_url} />
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <h1 className="text-lg">
                {data.date}
            </h1>
            <button type="button">
                <Trash className="hover:fill-red-500" />
            </button>
        </footer>
    </div>
)

export default ImgCard;