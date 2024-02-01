import './styles.css';

export const Info = ({highScore, page, allPages}) => {
    return(
        <div className='Info'>
            <p>High Score: {highScore}</p>
            <p>{page}/{allPages}</p>
        </div>
    );
}