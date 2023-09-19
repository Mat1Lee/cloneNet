import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './backFlim.css';
import { FaPlay, FaPlus } from 'react-icons/fa';
import Tmdb from '../../Tmdb';
import MovieRow from '../MovieRow/MovieRow';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import {useParams } from "react-router-dom";

export default function Detail(props) {
    const {media_type} = props;
    console.log(media_type);
    const [movieList, setMovieList] = useState([]);
    const [recomment,setRecommment] = useState();
    const [trailerId,setTrailerId] = useState('')
    const { id } = useParams();
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        const Load = async () => {
            const chosenInfo = await Tmdb.getMovieInfo(id,media_type);
            setMovieList(chosenInfo); 
           const listRecomment = await Tmdb.getRecomment(id,media_type); 
           setRecommment(listRecomment);
           setTrailerId(chosenInfo.videos?.results[0].key);  
                }
            Load() 
    }, []) 
    
    const firstDate = new Date(movieList.first_air_date);
    let genres = [];
    for (let i in movieList.genres) {
        genres.push(movieList.genres[i].name);
    }
    
    return (
       
        <>
          
            <div className="featured" style={{
           
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieList.backdrop_path})`
            }}>
             
                <div className="featured--vertical">
                    <div className="featured--content">
                               <div className="featured--card">
                        <LazyLoadImage className='card--img' src={`https://image.tmdb.org/t/p/original${movieList.poster_path}`} loading='lazy' />
                    </div>
                    <div className="featured--horiztal">
                        <div className="featured--name">
                            {movieList.name}
                        </div>
                        <div className="featured--info">
                            <div className="featured--points">{movieList.vote_average} voted</div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                            <div className="featured--seasons">{movieList.number_of_seasons} Sesion{movieList.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className="featured--description">{movieList.overview}</div>
                        <div className="featured--buttons">
                            <button  onClick={() => setModalShow(true)} className="featured--watchbutton"><FaPlay size={13} /> Trailer</button>
                            <a href='/list/add/${item.id}' className="featured--mylistbutton"><FaPlus size={13} /> My List</a>
                        </div>
                        <div className="featured--genres"><strong>Thể Loại:</strong> {genres.join(', ')}</div>
                    </div>
                    </div>
                    
                </div>
            </div >
            <section className='lists'>
     <div className="movieRow">
            <h2>Recommended</h2>
            <MovieRow items={recomment}/>
           
        </div>
        <Trailer
        show={modalShow}
        onHide={() => setModalShow(false)}
        embed={`https://www.youtube.com/embed/${trailerId|| ""}`}
      />
                
      </section>

        </> 

    );
}

function Trailer(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Trailer Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="ratio ratio-16x9" controls>
     
        <iframe
          src={props?.embed}
          title="YouTube video"
          allowfullscreen
        ></iframe>
     
   </div>
   
        </Modal.Body>
        
      </Modal>
    );
  }
  