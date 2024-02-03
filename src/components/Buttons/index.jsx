import React, { useState, useEffect } from 'react';
import './styles.css';

export const Buttons = ({ countryName1, countryName2, countryName3, countryName4, handleClick, buttonColors }) => {
    const [buttonOrders, setButtonOrders] = useState([]);

    useEffect(() => {
        const generateButtonOrders = () => {
            const orders = [
                [countryName1, countryName2, countryName3, countryName4],
                [countryName2, countryName1, countryName3, countryName4],
                [countryName2, countryName3, countryName1, countryName4],
                [countryName2, countryName3, countryName4, countryName1]
            ];
            const randomNumber = Math.floor(Math.random() * orders.length);
            setButtonOrders(orders[randomNumber]);
        };

        generateButtonOrders();
    }, [countryName1, countryName2, countryName3, countryName4]);

    return (
        <div className="Buttons">
            <table>
                <tbody>
                    <tr>
                        {buttonOrders.map((countryName, index) => (
                            <button key={index} onClick={() => handleClick(countryName, index)} style={{ backgroundColor: buttonColors[index] }}>{countryName}</button>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
