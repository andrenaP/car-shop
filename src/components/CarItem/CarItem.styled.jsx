import styled from 'styled-components';

export const CarList = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 274px;
  align-items: center;
  border-radius: 14px;

  border-style: solid;
`;
export const CarImg = styled.img`
  bject-fit: cover;
  width: 100%;
  height: 268px;

  background:
    linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    lightgray 50% / cover no-repeat;
`;

export const CarImgBox = styled.div`
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`;

export const CarData = styled.div``;

export const CarDataHeader = styled.h3``;

export const CarDataText = styled.p``;
