import React,{useEffect} from "react";
import axios, { Axios } from 'axios';


export default function KakaoRedirectHandler(){
    const axios = require('axios').default;
        const Params = document.location.search.substring(1).split('=');
        const token = Params[1]
        const data = {
            "data": token
        }
        
        useEffect(()=>{
        axios.post('http://localhost:8000/api/v1/users/kakao/callback/', data)
        .then((response:any) =>(console.log(response.data)));
    },[])

    return(
        <div>
            <p>로딩중</p>
        </div>   
    )
}