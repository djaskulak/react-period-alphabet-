import alphabet from '../data.json'
import './cards.css'

function Cards () {
    return (
        <div className="Cards">
            <ul className="alphabet">
                {alphabet.map(letter => 
                    <li className="card">
                        <h3>{letter.title}</h3>
                        <img src={process.env.PUBLIC_URL + '/images/' + letter.image} alt="card"/>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Cards