import React, { useEffect } from 'react';

export default function GoogleRedirect(){
    const axios = require('axios').default;
        const Params = document.location.search.substring(1).split('=');
        const Parmas2 = Params[1]
        const token = Parmas2.split('&')[0]
        console.log(token)
        const data = {
            "data": token
        }
        useEffect(()=>{
        axios.post('http://localhost:8000/api/v1/users/google/callback/', data)
        .then((response:any) =>{
            localStorage.clear()
            localStorage.setItem("token",JSON.stringify(response.data.Authorization).split(" ")[1].slice(0, -1))
            console.log(localStorage.getItem("token"))
            window.location.replace('http://localhost:8080/')
        });
    },[])

    return(
        <div className="w-full h-full justify-center items-center">
        {/* <img className ="flex w-1/5" alt="Spinner" src="images/spinner.gif"/> */}
            <p className="absolute text-center w-full top-1/2 text-7xl items-center font-bmjua justify-center">로딩중...</p>
        </div>    
    )
  }