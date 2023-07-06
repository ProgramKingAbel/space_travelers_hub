import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, cancelReservation, reserveDragon } from '../redux/features/dragons/dragonsSlice';
import style from '../styles/DragonsPage.module.css';

const DragonsPage = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((store) => store.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragons.length]);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <section className="dragons">
      {dragons.map((dragon) => (
        <div className={style.dragon} key={dragon.id}>
          <div className={style.dragonImg}>
            <img src={dragon.flickr_images[0]} alt={dragon.name} />
          </div>
          <div className={style.dragonInfo}>
            <h2>{dragon.name}</h2>
            <p>
              {dragon.reserved && <span className={style.reservedText}>Reserved</span>}
              {dragon.description}
            </p>
            {!dragon.reserved ? (
              <button
                type="button"
                onClick={() => handleReserve(dragon.id)}
                className={style.reserve}
              >
                Reserve Dragon
              </button>
            ) : (
              <button
                type="button"
                onClick={() => cancelReserve(dragon.id)}
                className={style.cancel}
              >
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DragonsPage;
