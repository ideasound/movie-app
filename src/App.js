import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';




class App extends Component {
    
    // Component Life Cycle
    // Render : componentWillMount() => render() => componentDidMount()
    // Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate
    componentWillMount() {
        // console.log("will mount");

    }
    
    componentDidMount() {
        this._getMovies();
    }
    
    state = {}

     _getMovies = async () => {
        // await : 결과가 무엇이던 _callApi() 가 '종료'되기 까지 기다림(성공이 아님)
        // async 를 쓰지 않으면 await은 작동하지 않음.
        const movies = await this._callApi()
        console.log(movies);
        this.setState({
            movies: movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating&order_by=desc')
            .then( potato => potato.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies = this.state.movies.map( movie => {
            return <Movie
                title={movie.title}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                key={movie.id}
                genres={movie.genres}
                synopsis={movie.synopsis}
            />
        })
        return movies
    }
    
  render() {

    console.log("did render");
      
    return (
      <div className={this.state.movies ? "App" : "App-loading"}>
          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
