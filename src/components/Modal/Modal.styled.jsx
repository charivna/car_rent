import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 541px;
  max-height: 100vh;
  overflow-y: auto;
  padding: 15px 35px;
  border-radius: 24px;
  background: #fff;
`;

export const ImageContainer = styled.div`
  width: 469px;
  height: 314px;
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  border-color: transparent;
  margin-bottom: 14px;
  margin-top: 25px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Info = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  max-width: 277px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const Tittle = styled.h3`
  margin-bottom: 8px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const Model = styled.span`
  color: #3470ff;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.42;
  width: 461px;
  margin-bottom: 24px;
`;

export const Accessories = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const AccessoriesDetail = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  max-width: 461px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Rental = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const Condition = styled.p`
  font-family: Montserrat;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 35px;
  background: #f9f9f9;
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Value = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const RentalButton = styled(NavLink)`
  box-sizing: border-box;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  white-space: nowrap;
  text-decoration: none;
  color: #fff;
  border-radius: 12px;
  width: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  margin-top: 24px;

  background-color: #3470ff;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const BtnClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;
