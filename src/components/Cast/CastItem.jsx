import { PropTypes } from 'prop-types';



export const CastItem = ({ name, img, character }) => {
  return (
    <>
      <li>
        {/* <img
          width="200"
          src={
            img
              ? `https://image.tmdb.org/t/p/w500${img}`
              : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
          }
          alt={name}
        /> */}
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