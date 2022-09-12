import React from "react";

const Button=({name}:{name:String})=>{
    return(
        <>
        <button className="flex rounded-md font-bmjua text-2xl m-5 bg-orange-100 items-center justify-items-ceneter hover:bg-orange-300"
                style={{width:'180px',height:'50px',alignItems:'center',justifyContent:'center'}}
        >
            <p>{name}</p>
        </button>
        </>
    );
};
export default Button;