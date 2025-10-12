import React from 'react';
import './Loading.css';
import pikachuIcon from '../assets/pikachu_icon-icons.com_67535.png';

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={pikachuIcon} alt="Loading..." className="pikachu-loading" />
      <div className="loading-text">
        Cargando<span className="dots"><span>.</span><span>.</span><span>.</span></span>
      </div>
    </div>
  );
};

export default Loading;
