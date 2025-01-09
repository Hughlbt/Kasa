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
              {isOpen ? "▼" : "▲"}
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
    children: PropTypes.string.isRequired,
  };

export default Collapse;