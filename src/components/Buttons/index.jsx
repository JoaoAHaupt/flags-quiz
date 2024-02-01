// Buttons.js
import './styles.css';

export const Buttons = ({ countryName, handleClick }) => {
    
    return (
        <div className="Buttons">
            <table>
                <tbody>
                    <tr>
                        <button onClick={handleClick}>{countryName}</button>
                        <button>lepo</button>
                    </tr>
                    <tr>
                        <button>lepoasdasda</button>
                        <button>lepo</button>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};
