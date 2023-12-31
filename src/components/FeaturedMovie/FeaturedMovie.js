import React from 'react';
import './FeaturedMovie.css';

export default function FeaturedMovie ({ item })  {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }
    return ( 
    <>
        <div className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
          
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} voted</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Sesion{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    
                    <div className="featured--genres"><strong>Thể Loại:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </div >
    </>
  
    );
}