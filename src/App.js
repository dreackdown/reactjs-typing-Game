import React from 'react'; 

const App = () => {
    return (
    <div className="container">
        <div className="valid-keys">
        <span className="matched">hu</span>  
        <span className="remainder">go</span>        
        </div>
        <div className="typed-keys">asdfhuasdf</div>
        <div className="completed-words">
            <ol>
                <li>cidade</li>
                <li>carro</li>
                <li>profissional</li>
            </ol>
        </div>
    </div>
    );
};

export default App;   