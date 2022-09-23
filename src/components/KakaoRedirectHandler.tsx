import React,{useEffect} from "react";
import axios, { Axios } from 'axios';


export default function KakaoRedirectHandler(){
    const axios = require('axios').default;
    axios.defaults.withCredentials = true;

        const Params = document.location.search.substring(1).split('=');
        const token = Params[1]
        console.log(Params[1]);
     
    //    useEffect(()=>{
    //     fetch('http://localhost:8000/api/v1/users/kakao/callback',{
    //         method: "post",
    //         mode:'cors',
    //         cache:'no-cache',
    //         credentials:'include',            
    //         headers: {
    //             ' Access-Control-Allow-Headers':'Content-Type',
    //             'Content-Type':'application/json',
    //             // 'Access-Control-Allow-Origin': '*',
    //             // 'Authorization': 'Basic APIToken',
            
           
    //         },
    //         body:JSON.stringify(Params)
    //     })
    //     .then((response)=>{console.log(response.json)})
    //    },[])
         axios.defaults.withCredentials = true;       
        useEffect(()=>{
        axios.post('http://localhost:8000/api/v1/users/kakao/callback/',JSON.stringify(token),
        {   
            withCredentials: true,
            crossDomain: true, 
            // credentials: "include",
            
        },
        {headers: {
            'Access-Control-Allow-Credentials':'true',
            'Content-Type' : 'application/x-www-form-urlencoded',
            // 'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Access-Control-Allow-Headers':'*',

        }},
        
        )
        .then((response:any) =>(response.data))
        .then((response:any) => {
          console.log(response);
        });
    },[])

    return(
        <div>
            <p>로딩중</p>
        </div>   
    )
}