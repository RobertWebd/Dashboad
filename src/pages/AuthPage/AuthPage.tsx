import { PageLayout } from '../../components';
import { SignInForm } from '../../components/SignInForm';
import { SignUpForm } from '../../components/SignUpForm';

type AuthPageProps = {
  signIn?: boolean;
};

export const AuthPage = ({ signIn }: AuthPageProps) => {
  return <PageLayout>{signIn ? <SignInForm /> : <SignUpForm />}</PageLayout>;
};
