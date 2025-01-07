import PropTypes from 'prop-types';

function Banner({ title, backgroundImage }) {
    return (
      <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>{title}</h1>
      </div>
    );
  }
  
  Banner.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  };

  export default Banner; 