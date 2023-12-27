import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomizedSnackbar } from '../../UI';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks';
import { ViewIconWrapper } from '../../pages/styles';

import './SignUpForm.css';

export const SignUpForm = () => {
  const [isPassVisible1, setIsPassVisible1] = useState(true);
  const [isPassVisible2, setIsPassVisible2] = useState(true);

  const { setUsers } = useLocalStorage();

  const navigate = useNavigate();

  type SignUpInputs = {
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ mode: 'onChange' });

  const passwordsMatch = watch('password') === watch('confirmPassword');

  const hadleShowHidePass1 = () => {
    setIsPassVisible1(!isPassVisible1);
  };

  const hadleShowHidePass2 = () => {
    setIsPassVisible2(!isPassVisible2);
  };

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    setUsers(data);
  };

  return (
    <>
      <form style={{ width: '180px' }} onSubmit={handleSubmit(onSubmit)}>
        <div className="signUp_wrapper">
          <div className="form-control_up">
            <input placeholder="Username" {...register('name', { required: 'name is required' })}></input>
            <p className="error">{errors.name?.message}</p>
          </div>
          <div className="form-control_up">
            <input
              placeholder="Phone"
              {...register('phoneNumber', {
                required: 'phone is required',
              })}
            ></input>
            <p className="error">{errors.phoneNumber?.message}</p>
          </div>
          <div className="form-control_up">
            <input
              placeholder="email"
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                  message: 'Invalid email format',
                },
              })}
            ></input>
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="form-control_up">
            <div className="password__wrapper_up">
              <input
                type={isPassVisible1 ? 'password' : 'text'}
                style={{ borderColor: !passwordsMatch ? 'rgb(153, 0, 0)' : '' }}
                placeholder="Password"
                {...register('password', { required: 'password is required' })}
              ></input>
              <ViewIconWrapper onClick={hadleShowHidePass1}>
                <svg className="viewIcon__open" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <g clipRule="evenodd" fill="white" fillRule="evenodd">
                    {isPassVisible1 ? (
                      <>
                        <path d="M13 10a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                        <path d="M19 10c0 3.5-5 6-9 6s-9-2.5-9-6 5-6 9-6 9 2.5 9 6zm-1.5 0c0 .983-.72 2.084-2.279 3.03-1.516.92-3.497 1.47-5.221 1.47-1.725 0-3.705-.55-5.222-1.47C3.22 12.084 2.5 10.983 2.5 10c0-.983.72-2.084 2.278-3.03C6.295 6.05 8.275 5.5 10 5.5c1.724 0 3.705.55 5.221 1.47 1.56.946 2.279 2.047 2.279 3.03z"></path>
                      </>
                    ) : (
                      <path d="M9.964 5.5A.75.75 0 019.958 4a11.921 11.921 0 015.918 1.578C17.566 6.558 19 8.068 19 10c0 1.003-.393 1.901-.999 2.659a.75.75 0 11-1.171-.937c.442-.553.67-1.13.67-1.722 0-1.13-.858-2.245-2.376-3.125A10.411 10.411 0 009.964 5.5zM4.124 14.422C5.844 15.42 8.036 16 10 16c1.605 0 3.355-.388 4.873-1.066l.847.846a.75.75 0 101.06-1.06L5.28 3.22a.75.75 0 00-1.06 1.06l.823.824c-.974.445-1.87 1.02-2.57 1.712C1.606 7.672 1 8.752 1 10c0 1.932 1.433 3.443 3.124 4.422zM8.5 10a1.5 1.5 0 002.53 1.09L8.91 8.97c-.254.269-.41.631-.41 1.03zM7 10a3 3 0 005.09 2.151l1.635 1.635c-1.201.458-2.523.714-3.725.714-1.702 0-3.635-.513-5.124-1.375C3.358 12.245 2.5 11.13 2.5 10c0-.731.35-1.448 1.028-2.117.66-.653 1.593-1.217 2.66-1.635l1.66 1.661A2.99 2.99 0 007 10z"></path>
                    )}
                  </g>
                </svg>
              </ViewIconWrapper>
            </div>
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="form-control_up">
            <div className="password__wrapper_up">
              <input
                type={isPassVisible2 ? 'password' : 'text'}
                style={{ borderColor: !passwordsMatch ? 'rgb(153, 0, 0)' : '' }}
                placeholder="Confirm password"
                {...register('confirmPassword', { required: 'confirm password' })}
              ></input>
              <ViewIconWrapper onClick={hadleShowHidePass2}>
                <svg className="viewIcon__open" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <g clipRule="evenodd" fill="white" fillRule="evenodd">
                    {isPassVisible2 ? (
                      <>
                        <path d="M13 10a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                        <path d="M19 10c0 3.5-5 6-9 6s-9-2.5-9-6 5-6 9-6 9 2.5 9 6zm-1.5 0c0 .983-.72 2.084-2.279 3.03-1.516.92-3.497 1.47-5.221 1.47-1.725 0-3.705-.55-5.222-1.47C3.22 12.084 2.5 10.983 2.5 10c0-.983.72-2.084 2.278-3.03C6.295 6.05 8.275 5.5 10 5.5c1.724 0 3.705.55 5.221 1.47 1.56.946 2.279 2.047 2.279 3.03z"></path>
                      </>
                    ) : (
                      <path d="M9.964 5.5A.75.75 0 019.958 4a11.921 11.921 0 015.918 1.578C17.566 6.558 19 8.068 19 10c0 1.003-.393 1.901-.999 2.659a.75.75 0 11-1.171-.937c.442-.553.67-1.13.67-1.722 0-1.13-.858-2.245-2.376-3.125A10.411 10.411 0 009.964 5.5zM4.124 14.422C5.844 15.42 8.036 16 10 16c1.605 0 3.355-.388 4.873-1.066l.847.846a.75.75 0 101.06-1.06L5.28 3.22a.75.75 0 00-1.06 1.06l.823.824c-.974.445-1.87 1.02-2.57 1.712C1.606 7.672 1 8.752 1 10c0 1.932 1.433 3.443 3.124 4.422zM8.5 10a1.5 1.5 0 002.53 1.09L8.91 8.97c-.254.269-.41.631-.41 1.03zM7 10a3 3 0 005.09 2.151l1.635 1.635c-1.201.458-2.523.714-3.725.714-1.702 0-3.635-.513-5.124-1.375C3.358 12.245 2.5 11.13 2.5 10c0-.731.35-1.448 1.028-2.117.66-.653 1.593-1.217 2.66-1.635l1.66 1.661A2.99 2.99 0 007 10z"></path>
                    )}
                  </g>
                </svg>
              </ViewIconWrapper>
            </div>
            <p className="error">{errors.confirmPassword?.message}</p>
          </div>
          <button className={`register ${!passwordsMatch && 'disabled'}`} disabled={!passwordsMatch}>
            Register
          </button>
        </div>
      </form>
      <p className="signUp">
        Already have an account?{' '}
        <span className="signUp_span" onClick={() => navigate('/')}>
          Sign in
        </span>
      </p>
      <CustomizedSnackbar text={'Passwords must be the same'} extraState={!passwordsMatch} />
    </>
  );
};