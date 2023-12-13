import { PropTypes } from 'prop-types';



export const CastItem = ({ name, img, character }) => {
  return (
    <>
      <li>
        <img
          width="200"
          src={
            img
              ? `https://image.tmdb.org/t/p/w500${img}`
              : 'https://media.istockphoto.com/id/1358773518/vector/black-thug-life-meme-glasses-in-pixel-art-style.jpg?s=612x612&w=0&k=20&c=93g1fyCWjMZQ1-f4WKgTC47k7xZhQXW_M_MJ2xo6IzY='
          }
          alt={name}
        />
        <h3>{name}</h3>
        <p>{character}</p>
      </li>
    </>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  character: PropTypes.string.isRequired,
};