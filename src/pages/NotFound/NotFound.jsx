import { Link } from 'react-router-dom';



const NotFound = () => {
  return (
    <div>
      <h3>
        404 Page not found, <Link to="/goit-react-hw-05-movies/">Go to Home Page</Link>
      </h3>
    </div>
  );
};

export default NotFound;