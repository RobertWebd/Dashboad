import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CustomizedSnackbar, Logo } from '../../UI';
import { useLocalStorage } from '../../hooks';
import { RegisterCredentials } from '../../types';
import { Layout, ViewIcon } from '..';
import {
  Error,
  FieldsWrapper,
  FormControl,
  FormWrapper,
  PasswordWrapper,
  RegisterButton,
  SignUp,
  SignUpSpan,
  Text,
} from './SignUpForm.styled';

export const SignUpForm = () => {
  const [isPassVisible, setIsPassVisible] = useState(true);
  const [isRepeatedPassVisible, setIsRepeatedPassVisible] = useState(true);

  const { setUsers } = useLocalStorage();

  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({ mode: 'onChange' });

  const passwordsMatch = watch('password') === watch('confirmPassword');

  const handleTogglePass = () => {
    setIsPassVisible(!isPassVisible);
  };

  const handleToggleRepeatedPass = () => {
    setIsRepeatedPassVisible(!isRepeatedPassVisible);
  };

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => {
    setUsers(data);
  };

  return (
    <Layout height={450}>
      <Logo />
      <Text>Sign up</Text>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper>
          <FormControl>
            <input placeholder="Username" {...register('name', { required: 'name is required' })} />
            <p className="error">{errors.name?.message}</p>
          </FormControl>
          <FormControl>
            <input
              placeholder="Phone"
              {...register('phoneNumber', {
                required: 'phone is required',
              })}
            />
            <p className="error">{errors.phoneNumber?.message}</p>
          </FormControl>
          <FormControl>
            <input
              placeholder="email"
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                  message: 'Invalid email format',
                },
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </FormControl>
          <FormControl>
            <PasswordWrapper>
              <input
                type={isPassVisible ? 'password' : 'text'}
                style={{ borderColor: !passwordsMatch ? 'rgb(153, 0, 0)' : '' }}
                placeholder="Password"
                {...register('password', { required: 'password is required' })}
              />
              <ViewIcon onClick={handleTogglePass} visible={isPassVisible} />
            </PasswordWrapper>
            <Error>{errors.password?.message}</Error>
          </FormControl>
          <FormControl>
            <PasswordWrapper>
              <input
                type={isRepeatedPassVisible ? 'password' : 'text'}
                style={{ borderColor: !passwordsMatch ? 'rgb(153, 0, 0)' : '' }}
                placeholder="Confirm password"
                {...register('confirmPassword', { required: 'confirm password' })}
              />
              <ViewIcon onClick={handleToggleRepeatedPass} visible={isRepeatedPassVisible} />
            </PasswordWrapper>
            <Error>{errors.confirmPassword?.message}</Error>
          </FormControl>
          <RegisterButton disabled={!passwordsMatch}>Register</RegisterButton>
        </FieldsWrapper>
      </FormWrapper>
      <SignUp>
        Already have an account? <SignUpSpan onClick={() => navigate('/')}>Sign in</SignUpSpan>
      </SignUp>
      <CustomizedSnackbar text={'Passwords must be the same'} extraState={!passwordsMatch} />
    </Layout>
  );
};
