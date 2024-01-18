import styled from 'styled-components';

export const AllFilter = styled.div`
  gap: 18px;
  display: flex;
  max-width: 1440px;
  padding: 0 115px;
  padding-top: 150px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const SearchBtn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 14px 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  color: #fff;
  border-radius: 12px;
  max-width: 274px;
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;

  background-color: #3470ff;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;
