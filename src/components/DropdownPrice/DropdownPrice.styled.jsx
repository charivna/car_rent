import styled from 'styled-components';

export const Label = styled.p`
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Select = styled.select`
  display: flex;
  width: 125px;
  padding: 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  border-color: transparent;
  background: #f7f7fb;
`;

export const Option = styled.option`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  overflow-y: auto;
  height: 40px;
`;
