import PropTypes from 'prop-types';

function Card({ title}) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3> 
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;