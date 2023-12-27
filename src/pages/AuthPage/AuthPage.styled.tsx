import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  width: 400px;
  height: 350px;
  position: relative;
  background-color: #303235;
  border-radius: 10px;
`;

export const Text = styled.div`
  border-radius: 5px;
  padding: 5px;
  margin: 0 0 30px 0;
  color: white;
  background-color: inherit;
  font-size: 18px;
  height: 24px;
`;
export const OrangeText = styled.span`
  color: #fb7f12;
`;
