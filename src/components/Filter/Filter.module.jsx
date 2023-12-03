import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;

  flex-direction: column;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28; /* 128.571% */
`;

export const Filters = styled.form`
  display: flex;
  gap: 18px;
  margin-bottom: 150px;
  justify-content: center;
`;

export const Mileage = styled.div`
  display: flex;
  height: 48px;
`;

export const InputMinMileage = styled.input`
  display: block;
  width: 160px;
  align-items: center;
  text-indent: 70px;

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
`;

export const InputMaxMileage = styled.input`
  display: block;
  width: 160px;
  text-indent: 45px;

  align-items: center;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
`;

export const SpanMaxMileage = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 21px;
  z-index: 20;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const SpanMinMileage = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 21px;
  z-index: 20;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;
export const Button = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 48px;

  border-radius: 12px;
  background: #3470ff;
  &:hover {
    background: #0b44cd;
  }

  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;
