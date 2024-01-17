import styled from 'styled-components';

export const Card = styled.li`
  list-style: none;
  box-sizing: border-box;
  max-width: 274px;
  flex-basis: calc((100% - 87px) / 4);
`;

export const ImageContainer = styled.div`
  width: 274px;
  height: 274px;
  overflow: hidden;
  position: relative;
`;
