import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/features/dragons/dragonsSlice';
import Dragon from './Dragon';

const DragonsPage = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((store) => store.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragons.length]);

  return (
    <section className="dragons">
      {dragons.map((dragon) => (
        <Dragon
          key={dragon.id}
          id={dragon.id}
          name={dragon.name}
          type={dragon.type}
          flickrImages={dragon.flickr_images[0]}
          description={dragon.description}
          reserved={dragon.reserved || false}
        />
      ))}
    </section>
  );
};

export default DragonsPage;
