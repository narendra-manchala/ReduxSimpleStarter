import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';

const API_KEY = 'AIzaSyDFOu65Lteu3faZ4ZbUQavtEFT4257K_PU';

YTSearch( {key:API_KEY, term:"bahubali"}, function (data) {
    console.log(data)
})

const App = () => {
    return(
        <div>
            <SearchBar />
            <VideoDetails />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".container"));
