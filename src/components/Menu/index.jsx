import React, { useState, useEffect } from 'react';
import { Buttons } from '../Buttons';
import { data } from '../../data/data';
import { Info } from '../Info';
import './styles.css';
import correctSound from '../../assets/sounds/correct-choice-43861.mp3'
import wrongSound from '../../assets/sounds/negative_beeps-6008.mp3'
export const Menu = () => {
    const [currentData, setCurrentData] = useState([...data]);
    const [countryName2, setCountryName2] = useState('');
    const [countryName3, setCountryName3] = useState('');
    const [countryName4, setCountryName4] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [highScore, setHighScore] = useState(0);
    const [page, setPage] = useState(234);
    const [buttonColors, setButtonColors] = useState([]);
    const newButtonColors = [...buttonColors];

    function playCorrect(){
        new Audio(correctSound).play()
    }
    
    function playWrong(){
        new Audio(wrongSound).play()
    }
    const randomCountryGeneration = () => {
        const randomIndex = Math.floor(Math.random() * currentData.length);
        const randomObjectCorrect = currentData[randomIndex];
    
        const countryNameLocal = randomObjectCorrect.name; 
    
        setCountryCode(randomObjectCorrect.code.toLowerCase());
        setCountryName(countryNameLocal);
        setCurrentData(currentData.filter(country => country.code !== randomObjectCorrect.code));
    
        const randomNames = [];
        let i = 0;
        while (i < 3) {
            const randomIndex = Math.floor(Math.random() * currentData.length);
            const randomObject = currentData[randomIndex];
            if (randomObject.name !== countryNameLocal && !randomNames.includes(randomObject.name)) {
                randomNames.push(randomObject.name);
                i++;
            }
            console.log(randomNames)
        }
        const randomNamesLength = randomNames.length;
    
        setCountryName2(randomNames[randomNamesLength - 3]);
        setCountryName3(randomNames[randomNamesLength - 2]);
        setCountryName4(randomNames[randomNamesLength - 1]);
    };
    

    useEffect(() => {
        randomCountryGeneration();
    }, [page]);

    const correctAnswer = (index) =>{
        playCorrect();
        
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
        playWrong();
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
            {page > data.length ? (
                <div>
                    <p>CONGRATULATIONS YOU ARE A GEOGRAPHY MASTER!</p>
                </div>  
            ) : (
                <>
                    <Info highScore={highScore} page={page} allPages={data.length} />
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
                </>
            )}
        </div>
    );
    
};
