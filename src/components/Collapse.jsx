import { useState } from "react";
import PropTypes from 'prop-types';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
          <div className="collapse-header">
            <span className="collapse-title">{title}</span>
            <button className="collapse-toggle" onClick={toggleCollapse}>
            <img 
                src={isOpen ? "/pictures/picto/down-arrow.svg" : "/pictures/picto/up-arrow.svg"} 
                alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"} 
                width="25" 
                height="25"
              />
            </button>
          </div>
          <div className={`collapse-content ${isOpen ? "open" : ""}`}>
            {children}
          </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default Collapse;