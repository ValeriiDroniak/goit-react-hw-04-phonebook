import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  padding-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-left: 12px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  max-width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-left: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-top: 12px;
  background-color: rgba(16, 89, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 18px;

  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: rgba(16, 89, 255, 0.9);
  }
`;
