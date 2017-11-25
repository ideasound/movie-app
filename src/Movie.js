import React, { Component } from 'react';
import PropTypes from '../node_modules/prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import './Movie.css';

// class Movie extends Component {
//
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }
//
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster} />
//             </div>
//         )
//     }
// }

function Movie({title, poster, rating, genres, synopsis}) {
    return (
        <div className='Movie'>
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map( (genre, index) => <MovieGenre genre={genre} key={index}/> )}
                </div>
                <div className='Movie__Synopsis'>
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

// stateless functional component - only return., none state, non lifecycle
function MoviePoster({poster, alt}){

    return (
        <img src={poster} alt={alt} title={alt} className='Movie__Poster' />
    )

}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

function MovieRate({rating}) {
    return (
        <progress value={rating} max={10}/>
    )
}

MovieRate.propTypes = {
    rating:PropTypes.number.isRequired
}



function MovieGenre({genre}) {
    return (
        <span className='Movie__Genre'>{genre} </span>
    )
}

MovieRate.propTypes = {
    rating:PropTypes.number.isRequired
}
export default Movie