import React from "react";

export default function Button({name}:{name:string}){
    return(
        <button type="button" className="flex w-48 h-12 rounded-md font-bmjua text-2xl m-5 bg-orange-100 items-center justify-items-ceneter hover:bg-orange-300">
            <p className="w-full">{name}</p>
        </button>
    
    );
}
