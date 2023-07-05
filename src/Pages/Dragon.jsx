import React from 'react';
import PropTypes from 'prop-types';
import DragonCSS from '../styles/Dragon.module.css';

const Dragon = ({
  id, name, type, flickrImages, description,
}) => (
  <div className={DragonCSS.dragon}>
    <div className={DragonCSS.dragonImg}>
      <img src={flickrImages} alt={name} />
    </div>
    <div className={DragonCSS.dragonInfo}>
      <h2 className={id}>{name}</h2>
      <p className={type}>{description}</p>
      <button type="button">Reserve Dragon</button>
    </div>
  </div>
);

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dragon;
