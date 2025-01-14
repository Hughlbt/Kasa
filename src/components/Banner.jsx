import PropTypes from 'prop-types';
import '../style/banner.scss';
import { useEffect, useState } from 'react';

function Banner({ title, backgroundImage }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parts = title.split(',');

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-overlay"></div>
      <h1>
        {isMobile ? (
          <>
            {parts[0]}
            {parts[1] && (
              <>
                ,<br /> {parts[1]?.trim()}
              </>
            )}
          </>
        ) : (
          title
        )}
      </h1>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Banner;
