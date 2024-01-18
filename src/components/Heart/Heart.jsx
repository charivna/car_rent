import heartImage from '../../common/normal.png';
import { ButtonLike } from './Heart.styled';
import activeHeart from '../../common/active.png';

const Heart = ({ carId, onToggle, isLiked }) => {
  const toggleLike = () => {
    onToggle && onToggle(carId, !isLiked);
    console.log(carId);
  };

  return (
    <ButtonLike onClick={toggleLike}>
      {!isLiked ? (
        <img src={heartImage} width="18px" height="18px" alt="" />
      ) : (
        <img src={activeHeart} width="18px" height="18px" alt="" />
      )}
    </ButtonLike>
  );
};

export default Heart;
