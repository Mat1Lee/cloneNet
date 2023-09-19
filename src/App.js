import React, { useEffect, useState } from 'react';

import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Header from './components/Header/Header';
export default function App () {

 

  return (
    <div className='page'>
    
    <Header/>
    <Outlet/>
    </div>
  )
}