import React ,{useEffect,useState } from 'react';
import Header from '../components/Header';
import LogoutBtn from '../components/LogoutBtn';
import MyPageBtn from '../components/MyPageBtn';
import Button from '../components/Button';
function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default function Results() {
  const [height, width] = useWindowSize();
  return (
    <div className='bg-zinc-50' style={{width:width,height:'auto'}}>
      <LogoutBtn />
      <MyPageBtn />
      <Header />
      <div
        style={{
          flex: 1,
          height: '5px',
          backgroundColor: 'black',
          marginBottom: '10px',
        }}
      />
      <div className='flex items-center justify-items-ceneter flex-col w-full mt-10'  >
        <img src={"https://via.placeholder.com/160"} style={{display:'flex',width:'40%', borderRadius:'2rem'}} className="image" />
     
      <div className='flex flex-row items-center justify-items-center w-1/3' >
        <Button name= {'다운로드'}/>
        <Button name = {'공유하기'}/>
      </div>
      </div>
    </div>
  )
}
