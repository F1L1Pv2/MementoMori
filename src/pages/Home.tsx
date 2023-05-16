import {Link} from 'react-router-dom';
import React from 'react';
import '../App.css';

export default function Home() {
  return (
    <div className='HomeApp'>
      <h1 className='HomeH1'>Memento Mori</h1>
      <Link to='/app'>
      <button className='HomeRedirectButton'>See How Much you have left</button>
      </Link>
    </div>
  );
}