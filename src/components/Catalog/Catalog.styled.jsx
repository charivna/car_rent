import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 0 115px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  gap: 29px;
  padding: 0;
`;

export const MoreBtn = styled.button`
  color: #3470ff;
  display: flex;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;

  font-size: 16px;
  background-color: transparent;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`;
