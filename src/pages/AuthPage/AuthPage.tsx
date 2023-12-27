import { Logo } from '../../UI';
import { SignInForm } from '../../components/SignInForm';
import { SignUpForm } from '../../components/SignUpForm';
import { Text, Wrapper } from './AuthPage.styled';

type AuthPageProps = {
  signIn?: boolean;
};

export const AuthPage = ({ signIn }: AuthPageProps) => {
  return (
    <Wrapper>
      <Logo />
      <Text>Sign up</Text>
      {signIn ? <SignInForm /> : <SignUpForm />}
    </Wrapper>
  );
};
