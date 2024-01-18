import styled from 'styled-components';

export const Label = styled.p`
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const InputFrom = styled.input`
  box-sizing: border-box;
  display: flex;
  max-width: 160px;
  height: 48px;
  align-items: center;
  border-color: transparent;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
`;
export const InputTo = styled.input`
  box-sizing: border-box;
  display: flex;
  max-width: 160px;
  height: 48px;
  align-items: center;
  border-color: transparent;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
`;

export const Range = styled.div`
  display: flex;
`;
