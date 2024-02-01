import './styles.css';
import { Menu } from '../../components/Menu/index';
import { useEffect, useState } from 'react';


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">      
        <Menu/>
      </header>
    </div>
  );
}

export default Home;
