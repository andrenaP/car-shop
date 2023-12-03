import styled from 'styled-components';

export const CarCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  align-items: center;

  height: 426px;
  align-items: flex-start;
  transition: box-shadow;
  &:hover {
    box-shadow: 0px 1px 6px rgb(46 47 66 / 30%);
  }
`;
export const CarImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 268px;

  height: 280px;
  margin-bottom: 14px;
  user-select: none;
`;

export const CarData = styled.div`
  margin-bottom: 28px;
`;
export const CarDataHeaderName = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const CarDataHeader = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  display: flex;
  justify-content: space-between;

  padding-right: 9px;
  margin-bottom: 8px;
`;

export const CarDataText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 0px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TextItem = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  transition: background;
  &:hover {
    background: #0b44cd;
  }
`;
