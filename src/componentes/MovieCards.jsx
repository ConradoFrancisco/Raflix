import { useState } from "react";

export default function MovieCards({ allMovies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [hovered, setHovered] = useState(null);

    const handleMovieHover = (peli) => {
        
        setHovered(peli);

        
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    return (
        <>
            <section>
                <h3>Tendencias</h3>
                <div className='movies'>
                    {allMovies.length > 0 ? (
                        allMovies.map((peli, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`movie-container ${selectedMovie === peli ? 'hovered' : ''}`}
                                    onClick={() => { handleMovieHover(peli) }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        className={`poster-path ${hovered === peli ? "hovered" : ""}`}
                                        src={`https://image.tmdb.org/t/p/w500${hovered === peli ? peli.backdrop_path : peli.poster_path}`}
                                        alt=""
                                    />
                                    <p className={hovered === peli ? "hover" : "nohover"} >{peli.title}</p>   
                                </div>
                            );
                        })
                    ) : "asd"}
                </div>
            </section>
            
        </>
    );
}
