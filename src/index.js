import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDFOu65Lteu3faZ4ZbUQavtEFT4257K_PU';

const App = () => {
    return(
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector(".container"));