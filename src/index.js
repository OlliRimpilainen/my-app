import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


var _ = require('lodash');

const Stars = (props) => {
   const numberOfStars = 1+Math.floor(Math.random()*9);

    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i =>
            <i key={i} className="fa fa-star"></i>
            )}
        </div>

    );
};

const Button = (props) => {
    return (
        <div className = 'col-2'>
        <button>=</button>
        </div>
      
    )
}

const Ansrew = (props) => {
    return (
        <div className='col-5'>
        <span>5</span>
        <span>6</span>
        </div>
    )
}

const Numbers = (props) => {
 
    
    return (
        <div className="card text-center">
            <div>
               {Numbers.list.map((number, i) =>
               <span key={i}>{number}</span>
            )}

            </div>
        </div>
    )
}

Numbers.list = _.range(1,10);

class Game extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <h3>Hanselmi</h3>
                <div className ='row'>
                    <Stars/>
                    <Button />
                    <Ansrew />
                </div>
                <br/>
                <Numbers />
            </div>
                    
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Game />
                
            </div>
                    
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('root'));



registerServiceWorker();

