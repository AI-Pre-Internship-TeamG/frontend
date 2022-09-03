import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PictureUpload from './pages/PictureUpload';
import PictureEdit from './pages/PictureEdit';
import Results from './pages/Results';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pictureupload" element={<PictureUpload />} />
        <Route path="/pictureedit" element={<PictureEdit />} />
        <Route path="/results" element={<Results />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
