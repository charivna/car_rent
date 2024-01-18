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
  box-sizing: border-box;
  width: 541px;
  height: 752px;
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
  margin-bottom: 28px;
`;
