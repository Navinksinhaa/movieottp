export const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <div className="container-fluid">
        
            <div className="col-auto">
            {props.movies.map((movie,index) => (
            <div className="image-container d-flex justify-content-start m3">
                <img src={movie.Poster} alt='movie' />
            
            <div className="col-sm">
                <button
                onClick = {() =>props.handleFavouritesClick(movie)}
                className="btn btn-danger btn-block"
                >
                        <FavouriteComponent />
               </button>
            </div>
            </div>
           ))}  

            </div>
        
              
        
        </div>
    )
}
//overlay d-flex align-items-center justify-content-center