import heartImage from '../../common/normal.png';
import { ButtonLike } from './Heart.styled';

const Heart = () => {
  return (
    <ButtonLike>
      <img src={heartImage} width="18px" height="18px" alt="" />
    </ButtonLike>
  );
};

export default Heart;
