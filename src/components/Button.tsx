import React from "react";
import axios from 'axios';

export default function Button({name, downUrl}:{name:string, downUrl:string|undefined}){

    const handleDownload = (downUrl: string|undefined) => {
        if (typeof downUrl === 'string'){   
		try{axios
			.get(downUrl, {
			  responseType:'blob'
			})
			.then((response: any) => response.data)
			.then ((response:any) =>{
				console.log(response);
				const url = window.URL.createObjectURL(response);
				const a = document.createElement('a');
				a.href = url;
				a.download = `image.jpg`;
				document.body.appendChild(a);
				a.click();
				a.remove();
			})
			
		  }
		  catch(e){
			console.log(e);
		  }
	}}
    return(
        <button onClick={() => handleDownload(downUrl)} type="button" className="flex w-48 h-12 rounded-md font-bmjua text-2xl m-5 bg-orange-100 items-center justify-items-ceneter hover:bg-orange-300">
            <p className="w-full">{name}</p>
        </button>
    );

}