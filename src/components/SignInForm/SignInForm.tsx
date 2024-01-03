import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Audio } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { CustomizedSnackbar, Logo } from '../../UI';
import { AuthCredentials } from '../../types/authCredentials';
import { useLocalStorage } from '../../hooks';
import { toastStore } from '../../store';
import { AuthLayout, ViewIcon } from '../../components';
import {
  Button,
  Error,
  FormControl,
  FormWrapper,
  Login,
  OrangeText,
  Password,
  PasswordWrapper,
  SignUp,
  SignUpSpan,
  Text,
} from './SignInForm.styled';

export const SignInForm = observer(() => {
  const [isPassVisible, setIsPassVisible] = useState(true);
  const [isMockLoading, setIsMockLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { loginFunc, saveUser } = useLocalStorage();
  const navigate = useNavigate();
  const { showToast } = toastStore;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthCredentials>({
    defaultValues: {
      userLogin: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<AuthCredentials> = (data) => {
    setIsMockLoading(!isMockLoading);
    setDisabled(true);

    setTimeout(() => {
      const { userLogin, password } = data;

      const user = loginFunc({ userLogin: userLogin, password: password });

      if (user) {
        saveUser(user);
        navigate('/weather');
      } else {
        showToast();
      }

      setIsMockLoading(false);
      setDisabled(false);
      reset();
    }, 1000);
  };

  const hadleShowHidePass = () => {
    setIsPassVisible(!isPassVisible);
  };

  return (
    <AuthLayout height={320}>
      <Logo height={40} width={60} margin={`5px 0`} />
      <Text>
        Sign in <OrangeText>Dashik</OrangeText>
      </Text>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl>
          <Login
            placeholder="Phone or email"
            defaultValue="test"
            style={{ borderColor: errors?.userLogin ? 'rgb(153, 0, 0)' : '' }}
            {...register('userLogin', { required: 'login is required' })}
          />
          <Error>{errors.userLogin?.message}</Error>
        </FormControl>
        <FormControl>
          <PasswordWrapper>
            <Password
              placeholder="Password"
              style={{ borderColor: errors?.password ? 'rgb(153, 0, 0)' : '' }}
              type={`${isPassVisible ? 'password' : 'text'}`}
              {...register('password', { required: 'password is required' })}
            />
            <ViewIcon onClick={hadleShowHidePass} visible={isPassVisible} />
          </PasswordWrapper>
          <Error>{errors.password?.message}</Error>
        </FormControl>
        <Button disabled={disabled}>
          {isMockLoading ? <Audio height="15" width="15" color="rgb(2, 0, 31)" ariaLabel="loading" /> : <div>Sign in</div>}
        </Button>
      </FormWrapper>
      <SignUp>
        Dont have an account? <SignUpSpan onClick={() => navigate('/registration')}>Sign up</SignUpSpan>
      </SignUp>
      <CustomizedSnackbar text={'Invalid login/password'} />
    </AuthLayout>
  );
});
