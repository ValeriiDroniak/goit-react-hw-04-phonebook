import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  opacity: 1;
  overflow: hidden;
  font-weight: 700;
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  min-width: 60px;
  height: 32px;
  font-weight: 700;
  font-size: 16px;
  background-color: rgba(16, 89, 255, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: rgba(16, 89, 255, 0.9);
  }
`;
