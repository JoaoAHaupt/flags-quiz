// Menu.js
import { useState, useEffect } from 'react';
import { Buttons } from '../Buttons';
import {data} from '../../data/data'; 
import {Info} from '../Info'
import './styles.css';

export const Menu = () => {
    
    const [currentData, setCurrentData] = useState([...data])
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [highScore, setHighScore] = useState(0);
    const [page, setPage] = useState(1);
    
  
    
    const randomCountryGeneration = () => {
        const randomIndex = Math.floor(Math.random() * currentData.length);
        const randomObject = currentData[randomIndex];
      
        setCountryCode(randomObject.code.toLowerCase());
        setCountryName(randomObject.name);
        setCurrentData(currentData.filter(country => country.code !== randomObject.code));
    }
    
    useEffect(() => {
        randomCountryGeneration();
    }, []); 

    const handleClick = (enable) => {
        randomCountryGeneration();
        setPage(page+1);
        if(page>highScore){
            setHighScore(page);
        }
        console.log(currentData.length);
    }

    return (
        <div className="Menu">
            <Info highScore={highScore} page={page}></Info>
            <div className='flag-div'>
                {countryCode && <img src={require(`../../assets/images/png250px/${countryCode}.png`)} alt='Country Flag'/>}
            </div>
            <Buttons countryName={countryName} handleClick={handleClick} />
        </div>
    );
};
