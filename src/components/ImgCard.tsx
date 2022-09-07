import React from 'react';
import { ReactComponent as Trash } from "../images/trash.svg";

export interface data {
    img_url: string;
    date: string;
}

const ImgCard = ({ data }: { data: data }) => (
    <div className="flex ">
        <p>
            <img alt="Img" className="object-cover block h-auto w-[20rem]" src={data.img_url} />
        </p>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <h1 className="text-lg">
                {data.date}
            </h1>
            <button type="button">
                <Trash className="hover:bg-red-500" />
            </button>
        </footer>
    </div>
)

export default ImgCard;