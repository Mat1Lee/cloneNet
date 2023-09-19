import React from 'react'
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';
import { useEffect } from 'react'
import Tmdb from '../../Tmdb';
import CardFlim from '../Card/Card';
import '../MovieRow/MovieRow.css'
export default function TvMovie({media_type}) {
  // const [movieList, setMovieList] = useState([]);
  const [movieTypeList, setMovieTypeList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
 
  // console.log('typeMovie',media_type);
  useEffect(() => {
    const loadAll = async () => {
      
      
      const listMovie = await Tmdb.getTypeMoive('tv')
      
      setMovieTypeList(listMovie?.results )
     
      let randomChosen = Math.floor(Math.random() * (listMovie.results.length - 1));
      let chosen = listMovie.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
  console.log('listtype',chosenInfo);
    }

    loadAll();
  }, []);

 
  return (
    <div className='page'>
      
      {featuredData &&
        <FeaturedMovie item={featuredData} />}
      <section className='lists'>
      <div className="movieRow">
            <h2>TV-Series</h2>
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
             
                    {movieTypeList.length > 0 && movieTypeList.map((item, key) => (         
                       
                             <SwiperSlide onClick={()=>{
                              
                             }}  key={key} className="movieRow--item">
                                <CardFlim item={item}/>
                           
                    </SwiperSlide>
                     
                      
                    ))}
                
            </div> 
      </Swiper>

        </div>
      </section>

      <footer>
        Direitos de imagem para Netflix<br></br>
        API do site themoviedb.org 
      </footer>

      {movieTypeList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando' size={13}></img>
        </div>
      }
    </div>
  )
}
