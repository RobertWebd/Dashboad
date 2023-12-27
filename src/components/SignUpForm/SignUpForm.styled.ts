import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 180px;
`;

export const FormControl = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  input {
    border: 1px solid rgb(21, 23, 26);
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    border-radius: 5px;
    padding: 5px;
    color: white;
    transition: 0.2s ease-in-out;
    background-color: #15171a;
    width: 100%;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const RegisterButton = styled.button`
  color: #02001f;
  background-color: rgb(234, 199, 0);
  padding: 5px 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25.5px;
  margin-top: 10px;
  border-radius: 5px;

  &:disabled {
    opacity: 0.7;
  }
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

export const Error = styled.p`
  color: rgb(217, 0, 0);
  font-style: 12px;
  text-align: left;
`;

export const SignUp = styled.p`
  margin-top: 10px;
  color: white;
  opacity: 0.7;
  font-size: 10px;
`;

export const SignUpSpan = styled.span`
  color: rgb(254, 175, 107);

  &:hover {
    cursor: pointer;
    color: rgb(251, 127, 19);
  }
`;