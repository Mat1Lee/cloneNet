import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Header ({black})  {
    const [blackHeader, setBlackHeader] = useState(false);
    
    useEffect(() => {
        const scrollListener = () => {
          if (window.scrollY > 10) {
            setBlackHeader(true);
          } else {
            setBlackHeader(false);
          }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
        
      }, []);
    return (
        <header className={blackHeader ? 'black' : ''}>
            
        <div className="header--logo">
            <div>
                 <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"></img>
            </a>
            </div>
           
           <div className="linkPage">
          <span> <NavLink   to="/">Home</NavLink></span> 
           <span> <NavLink      to="/tv-series">TV-Series</NavLink></span>
        
          </div>
        </div> 
        
        <div className="header--user">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
            </a>
        </div>
        </header>
    );
}