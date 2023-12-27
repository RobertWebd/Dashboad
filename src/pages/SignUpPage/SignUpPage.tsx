import styled from 'styled-components';
import { SignUpForm } from '../../components/SignUpForm';
import { Logo } from '../../UI';

const Wrapper = styled.div`
  width: 400px;
  height: 420px;
  position: relative;
  background-color: #303235;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  padding: 5px;
  margin: 0 0 20px 0;
  color: white;
  background-color: inherit;
  font-size: 18px;
  height: 24px;
`;

const SignUpPage = () => {
  return (
    <Wrapper>
      <Logo />
      <Text>Sign up</Text>
      <SignUpForm />
    </Wrapper>
  );
};

export default SignUpPage;
