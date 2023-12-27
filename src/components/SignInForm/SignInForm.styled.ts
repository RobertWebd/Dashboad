import styled from 'styled-components';

export const FormWrapper = styled.form`
  input {
    color: white;
    border: 1px solid #15171a;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Error = styled.p`
  color: rgb(217, 0, 0);
  font-style: 12px;
  text-align: left;
`;

export const FormControl = styled.div`
  width: 100%;
  height: 60px;
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

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SharedStyles = `
    border-radius: 5px;
    padding: 5px;
    background-color: #15171a;
`;

export const Login = styled.input`
  ${SharedStyles};
  margin: 5px 0;
  width: 100%;
`;

export const Password = styled.input`
  ${SharedStyles}
  margin: 5px 0;
  padding-right: 40px;
  width: 100%;
`;

export const Button = styled.button`
  ${SharedStyles}
  margin-top: 20px;
  color: #02001f;
  background-color: rgb(234, 199, 0);
  padding: 5px 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25.5px;

  &:disabled {
    cursor: unset;
    background-color: rgb(145, 123, 0);
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

export const OrangeText = styled.span`
  color: #fb7f12;
`;