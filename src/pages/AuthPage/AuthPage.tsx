import { AuthPageLayout, SignInForm, SignUpForm } from '../../components';

type AuthPageProps = {
  signIn?: boolean;
};

export const AuthPage = ({ signIn }: AuthPageProps) => {
  return <AuthPageLayout>{signIn ? <SignInForm /> : <SignUpForm />}</AuthPageLayout>;
};
