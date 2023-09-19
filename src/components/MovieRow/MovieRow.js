import React, { useState } from "react";
import './MovieRow.css';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardFlim from "../Card/Card";
import ErrorPage from "../pages/Error";
export default function MovieRow ({title, items })  {
    
console.log(items);
  if(items===undefined) return <ErrorPage/>
  else  return (
        <div className="movieRow">
            <h2>{title}</h2>
 
            <Swiper
        slidesPerView={5}
        spaceBetween={30}
       
        pagination={{
            dynamicBullets: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      
      >
        <div className="movieRow--listarea">
             
                    {items.results.length > 0 && items.results.map((item, key) => (         
                       
                             <SwiperSlide onClick={()=>{
                              
                             }}  key={key} className="movieRow--item">
                                <CardFlim item={item}/>
                           
                    </SwiperSlide>
                     
                      
                    ))}
                
            </div> 
      </Swiper>
        </div>
    );
}

