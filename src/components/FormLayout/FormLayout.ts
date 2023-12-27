import styled from 'styled-components';

export const Layout = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  width: 400px;
  height: ${({ height }) => height}px;
  position: relative;
  background-color: #303235;
  border-radius: 10px;
`;
