import React from 'react';
import './styles.css';

export const Buttons = ({ countryName1, countryName2, countryName3, countryName4, handleClick,buttonColors }) => {
    const buttonOrders = [
        [countryName1, countryName2, countryName3, countryName4],
        [countryName2, countryName1, countryName3, countryName4],
        [countryName2, countryName3, countryName1, countryName4],
        [countryName2, countryName3, countryName4, countryName1]
    ];


    const randomNumber = Math.floor(Math.random() * buttonOrders.length);

    return (
        <div className="Buttons">
            <table>
                <tbody>
                    <tr>
                        {buttonOrders[randomNumber].map((countryName, index) => (
                            <button key={index} onClick={() => handleClick(countryName)} style={{ backgroundColor: buttonColors }}>{countryName}</button>
                            ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
