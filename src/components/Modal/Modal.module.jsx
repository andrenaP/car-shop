import styled from 'styled-components';

export const Modal_backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(4, 4, 4, 0.4);
`;

export const Modal_content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  height: 752px;
  transform: translate(-50%, -50%);
  padding: 48px 24px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`;

export const Close_x = styled.img`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
`;
