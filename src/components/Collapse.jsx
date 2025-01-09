import { useState } from "react";
import PropTypes from 'prop-types';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapse-header" onClick={toggleCollapse}>
                {title}
                <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

export default Collapse;