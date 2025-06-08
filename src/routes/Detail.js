import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.description_full}</p>
      <p>{movie.rating}</p>
      <p>{movie.runtime}</p>
      <p>{movie.year}</p>
      <p>{movie.download_count}</p>
      <p>{movie.like_count}</p>
      <p>{movie.dislike_count}</p>
      <p>{movie.language}</p>
      <ul>
        {movie.genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Detail;
