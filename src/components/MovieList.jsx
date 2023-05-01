import {Row,Col} from 'react-bootstrap';

export const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <div className="container-fluid row">
            <Row>
                <Col>
            <div className="row" style={{border: "2px solid white"}}>
                    {props.movies.map((movie,index) => (
            <div className="image-container m3" style={{width:'305px',margin:'22px'}}>
                <img src={movie.Poster} alt='movie' />
            
            <div className="col" style={{ marginLeft:'60px', width:'200px'}}>
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
                </Col>
            </Row>
            
        
              
        
        </div>
    )
}
//overlay d-flex align-items-center justify-content-center
