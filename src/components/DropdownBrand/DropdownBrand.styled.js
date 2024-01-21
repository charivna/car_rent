import styled from 'styled-components';

export const Label = styled.p`
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Select = styled.select``;

export const Option = styled.option`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  overflow-y: auto;
  height: 40px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  justify-content: space-between;
  display: flex;
  padding: 14px 89px 14px 18px;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  border-color: transparent;
  background: #f7f7fb;
  cursor: pointer;
  width: 224px;
`;

export const DropdownList = styled.ul`
  z-index: 100;
  list-style: none;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  margin-top: 14px;
  margin-bottom: 14px;
  padding-right: 112px;
  margin-right: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  max-width: 224px;
  height: 272px;
  overflow-y: auto;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 8px;
  color: rgba(18, 20, 23, 0.2); /* Цвет текста внутри выпадающего списка */
  cursor: pointer;

  &:hover {
    color: #121417;
  }
`;
