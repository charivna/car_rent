import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  border-radius: 14px;
  border-color: transparent;
  margin-bottom: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Tittle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Type = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Price = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Info = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;

  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const MoreButton = styled(NavLink)`
  box-sizing: border-box;
  padding: 12px 99px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: #fff;
  border-radius: 12px;
  max-width: 274px;
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background-color: #3470ff;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    background-color: #0b44cd;
  }
`;
