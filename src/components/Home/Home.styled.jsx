import styled from 'styled-components';
import backgroundImage from '../../common/wallpapers-cars-019.jpg';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  height: 100vh;
  padding: 16px 115px;
`;

export const Tittle = styled.h1`
  color: #fff;
  font-size: 55px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  margin-top: 60px;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionHero = styled.div`
  width: 100%;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

export const BtnReady = styled(NavLink)`
  left: 50%;
  box-sizing: border-box;
  padding: 12px 99px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  margin-left: auto;
  position: absolute;
  text-decoration: none;
  color: #121417;
  border-radius: 12px;
  max-width: 400px;
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
    color: #fff;
  }
`;
