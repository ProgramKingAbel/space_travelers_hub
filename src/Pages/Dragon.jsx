import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import DragonCSS from '../styles/Dragon.module.css';
import { cancelReservation, reserveDragon } from '../redux/features/dragons/dragonsSlice';

const Dragon = ({
  id, name, flickrImages, description, reserved,
}) => {
  const dispatch = useDispatch();
  const [isReserved, setIsReserved] = useState(reserved);

  const handleReserve = () => {
    dispatch(reserveDragon(id));
    setIsReserved(true);
  };

  const cancelReserve = () => {
    dispatch(cancelReservation(id));
    setIsReserved(false);
  };

  return (
    <div className={DragonCSS.dragon}>
      <div className={DragonCSS.dragonImg}>
        <img src={flickrImages} alt={name} />
      </div>
      <div className={DragonCSS.dragonInfo}>
        <h2>{name}</h2>
        <p>
          {isReserved && <span className={DragonCSS.reservedText}>Reserved</span>}
          {description}
        </p>
        {!isReserved ? (
          <button type="button" onClick={handleReserve} className={DragonCSS.reserve}>
            Reserve Dragon
          </button>
        ) : (
          <button type="button" onClick={cancelReserve} className={DragonCSS.cancel}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
