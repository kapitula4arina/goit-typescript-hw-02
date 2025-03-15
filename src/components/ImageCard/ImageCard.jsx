import css from './ImageCard.module.css';

import { ImHeart } from 'react-icons/im';
import { ImUser } from 'react-icons/im';

const ImageCard = ({ dataAttribute, onLoad }) => {
  return (
    <div>
      <img
        src={dataAttribute.urls.small}
        alt={dataAttribute}
        className={css.card}
        onLoad={onLoad}
      />
      <div className={css.cardDescription}>
        <div className={css.cardLikes}>
          <ImHeart className={css.likeIcon} />
          <p className={css.cartText}>{dataAttribute.likes}</p>
        </div>
        <div>
          <ImUser className={css.likeIcon} />
          <p className={css.cartText}>{dataAttribute.user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
