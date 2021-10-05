import alphabet from '../data.json'
import './cards.css'

function Cards () {
    return (
        <div className="Cards">
            {alphabet.map(letter => 
                [<h1>{letter.title}</h1>,
                <img src={process.env.PUBLIC_URL + '/images/' + letter.image} alt="card"/>]
            )}
        </div>
    );
}

export default Cards