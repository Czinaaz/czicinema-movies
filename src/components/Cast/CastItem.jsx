import { PropTypes } from 'prop-types';



export const CastItem = ({ name, img, character }) => {
  return (
    <>
      <li>
        <img
          width="200"
          src={
            img
              ? `https://image.tmdb.org/t/p/w200${img}`
              : 'https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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