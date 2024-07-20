import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>${price}</p>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'} {/*Implement a "Read More"/"Show Less" button for each tour to toggle the visibility of more detailed information.*/}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}> {/*Not interested button*/}
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
