import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedBlock.css'; 

const AnimatedBlock = ({ width, height }) => {
  const blockStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className="animated-block" style={blockStyle}>
      <div className="content">
        <p className="default-state">Акция</p>
        <div className="hover-state">
          <h2 className='animated_h2'> Дорогие покупатели</h2>
          
          <p className='animated_p'> Все товары вы можете купить в Kaspi рассрочку 0-0-12.</p>
        </div>
      </div>
    </div>
  );
};

AnimatedBlock.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default AnimatedBlock;