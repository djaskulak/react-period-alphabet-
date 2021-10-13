import alphabet from '../data.json'
import './cards.css'

function Cards () {
    return (
        <div className="Cards">
            <div className="banner">
                <h1>ALPHABET</h1>
            </div>
            <ul className="alphabet">
                {alphabet.map(letter => 
                    <li className="card">
                        <img src={process.env.PUBLIC_URL + '/images/' + letter.image} alt="card"/>
                        <div className="word">
                            <h3>{letter.title}</h3>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Cards