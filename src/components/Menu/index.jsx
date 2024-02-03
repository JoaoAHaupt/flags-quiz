import React, { useState, useEffect } from 'react';
import { Buttons } from '../Buttons';
import { data } from '../../data/data';
import { Info } from '../Info';
import './styles.css';

export const Menu = () => {
    const [currentData, setCurrentData] = useState([...data]);
    const [countryName2, setCountryName2] = useState('');
    const [countryName3, setCountryName3] = useState('');
    const [countryName4, setCountryName4] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [highScore, setHighScore] = useState(0);
    const [page, setPage] = useState(1);
    const [buttonColors, setButtonColors] = useState([]);
    const newButtonColors = [...buttonColors];


    const randomCountryGeneration = () => {
        const randomNames = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * currentData.length);
            const randomObject = currentData[randomIndex];
            randomNames.push(randomObject.name);
        }

        setCountryName2(randomNames[0]);
        setCountryName3(randomNames[1]);
        setCountryName4(randomNames[2]);

        const randomIndex = Math.floor(Math.random() * currentData.length);
        const randomObjectCorrect = currentData[randomIndex];

        setCountryCode(randomObjectCorrect.code.toLowerCase());
        setCountryName(randomObjectCorrect.name);
        setCurrentData(currentData.filter(country => country.code !== randomObjectCorrect.code));
    };

    useEffect(() => {
        randomCountryGeneration();
    }, [page]);

    const correctAnswer = (index) =>{
        const audio = new Audio('./correct-choice-43861.mp3');
        audio.play();
        
        newButtonColors[index] = '#37bd6a'; 
        setButtonColors(newButtonColors); 

        setTimeout(() => {
            newButtonColors[index] = '#FFFFFF';
            setButtonColors(newButtonColors); 
            setPage(page + 1);
            if (page + 1 > highScore) {
                setHighScore(page + 1);
            }
        }, 2000);
    }

    const wrongAnswer = (index) =>{
        newButtonColors[index] = '#bd3737'; 
        setButtonColors(newButtonColors); 

        setTimeout(() => {
            newButtonColors[index] = '#FFFFFF'; 
            setButtonColors(newButtonColors); 
            randomCountryGeneration();
            setCurrentData([...data]);
            setPage(1);
        }, 2000);
    }


    const handleClickCountry = (country, index) => {
        if (country === countryName) {
            correctAnswer(index);
        } else if (country !== countryName){
            wrongAnswer(index);
        }
    };
    

    return (
        <div className="Menu">
            <Info highScore={highScore} page={page} allPages={data.length}></Info>
            <div className='flag-div'>
                {countryCode && <img src={require(`../../assets/images/png250px/${countryCode}.png`)} alt='Country Flag' />}
            </div>
            <Buttons
                countryName1={countryName}
                countryName2={countryName2}
                countryName3={countryName3}
                countryName4={countryName4}
                handleClick={handleClickCountry}
                buttonColors={buttonColors}
            />
        </div>
    );
};
