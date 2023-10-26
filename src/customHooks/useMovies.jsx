import { useState,useEffect } from "react"
export const useMovies = () => {
    const [movie,setMovie] = useState([])
    const [loading,setLoading] = useState(false)
    const [allMovies,setAllmovies] = useState([])

    useEffect(()=>{
  
      const getMovies = () =>{
        setLoading(true);
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTNlZWFjYWM3MjhjMzc5MGQ2OTU0YzgwYzRmYjNkMyIsInN1YiI6IjY1Mzk1YWFiNjc4MjU5MDBjN2U4MDEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8cfKpS4hAfutJfWBcx386RAGVinyQBYjoT0L9_Wk58'
          }
        };
      
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => {setMovie(response.results[0])
          response.results.shift()
          setAllmovies(response.results) 
          console.log(response.results)
          setLoading(false)
        })
      }
      
        
     
      getMovies();
    
      
   },[])
   return {movie,allMovies,loading}
  }