import React from 'react'
import { useQuery } from 'react-query'
import MovieRow from '../MovieRow/MovieRow'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import { useState } from 'react'
import { useEffect } from 'react'
import Tmdb from '../../Tmdb'
export default function Home({media_type}) {
  const [movieList, setMovieList] = useState([]);
  const [movieTypeList, setMovieTypeList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  
  useEffect(() => {
    const loadAll = async () => {
      
      let list = await Tmdb.getHomeList();
      const listMovie = await Tmdb.getTypeMoive('movie')
      
      setMovieTypeList(listMovie.results)
      setMovieList(list);
      
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
      setFeaturedData(chosenInfo);

      
    }

    loadAll();
  }, []);

  

  return (

   
    <div className='page'>
    
      {featuredData &&
        <FeaturedMovie item={featuredData} />}
      <section className='lists'>
        {movieList.map((item, key) => (<MovieRow key={key} media_type={'movie'} title={item.title} items={item.items} />))}
      </section>
      <footer>
        Direitos de imagem para Netflix<br></br>
        API do site themoviedb.org 
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando' size={13}></img>
        </div>
      }
    </div>
  )
}
