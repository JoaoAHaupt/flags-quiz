import './styles.css';

export const Info = ({highScore, page}) => {
    return(
        <div className='Info'>
            <p>High Score: {highScore}</p>
            <p>{page}/243</p>
        </div>
    );
}