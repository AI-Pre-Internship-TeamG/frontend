import React from 'react';
import axios from 'axios';
import { ReactComponent as Trash } from "../images/trash.svg";

export interface Data {
    id: number;
    url: string;
    created_at: string;
}

const deleteData = async (photo: number) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/photos/${photo}/`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `` // 추후 관리하는 Token 삽입 할 것
    }});
    } catch(err) {
      console.log(err);
    }
    window.location.reload();
  }

const ImgCard = ({ data }: { data: Data }) => 
(
    <div className="flex flex-col w-1/4 justify-end justify-self-center">
        <div className="flex h-full w-auto h-auto m-3 object-center justify-center ">
            <img alt="Img" className="flex h-auto w-auto object-contain " src={data.url} />
        </div>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <h1 className="text-lg">
                {data.created_at}
            </h1>
            <button type="button" onClick={() => deleteData(data.id)}>
                <Trash className="hover:fill-red-500"/>
            </button>
        </footer>
    </div>
)

export default ImgCard;