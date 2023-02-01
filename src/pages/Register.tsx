import * as React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { register } from '../redux/apiCalls';
import { useNavigate } from 'react-router-dom';
import { FormikValues, useFormik } from 'formik';
import { registerSchema } from '../schemas';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: '80%' })}
  ${tablet({ width: '50%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form``;
const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
  ${mobile({ flexDirection: 'column' })}
`;

const OneInputWrapper = styled.div`
  flex: 1;
  min-width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 5px 0;
  padding: 10px;
  border: solid 1px #d3d3d3;
  &:focus {
    outline-color: #d3d3d3;
`;

const ErrorWrapper = styled.div`
  height: 1rem;
`;

const FormMessage = styled.p`
  font-size: 0.8rem;
  color: darkred;
`;

const WrapperButton = styled.div`
  flex: 1;
  width: 100%;
  ${mobile({ display: 'flex', flexDirection: 'column', marginTop: '10px' })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  margin: 20px 20px 10px 0;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #404040;
  }
  ${mobile({ width: '100%', margin: '10px 0' })}
`;

const BackButton = styled(Button)`
  width: 30%;
  ${mobile({ width: '100%' })}
`;

export const Register = () => {
  const { error } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values: FormikValues, actions: any) => {
    const { firstName, lastName, username, email, password } = values;
    await register(dispatch, { firstName, lastName, username, email, password });
    actions.resetForm();
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  return (
    <Container>
      <Wrapper>
        <Title>UTWÓRZ NOWE KONTO</Title>
        <Form onSubmit={handleSubmit} autoComplete='off'>
          <InputsWrapper>
            <OneInputWrapper>
              <Input
                value={values.firstName}
                onChange={handleChange}
                id='firstName'
                type='text'
                placeholder='Imię'
                onBlur={handleBlur}
              />
              <ErrorWrapper>
                {errors.firstName && touched.firstName && (
                  <FormMessage>{errors.firstName}</FormMessage>
                )}
              </ErrorWrapper>
            </OneInputWrapper>
            <OneInputWrapper>
              <Input
                value={values.lastName}
                onChange={handleChange}
                id='lastName'
                type='text'
                placeholder='Nazwisko'
                onBlur={handleBlur}
              />
              <ErrorWrapper>
                {errors.lastName && touched.lastName && (
                  <FormMessage>{errors.lastName}</FormMessage>
                )}
              </ErrorWrapper>
            </OneInputWrapper>
            <OneInputWrapper>
              <Input
                value={values.username}
                onChange={handleChange}
                id='username'
                type='text'
                placeholder='Nazwa użytkownika'
                onBlur={handleBlur}
              />
              <ErrorWrapper>
                {errors.username && touched.username && (
                  <FormMessage>{errors.username}</FormMessage>
                )}
              </ErrorWrapper>
            </OneInputWrapper>
            <OneInputWrapper>
              <Input
                value={values.email}
                onChange={handleChange}
                id='email'
                type='email'
                placeholder='Email'
                onBlur={handleBlur}
              />
              <ErrorWrapper>
                {errors.email && touched.email && <FormMessage>{errors.email}</FormMessage>}
              </ErrorWrapper>
            </OneInputWrapper>
            <OneInputWrapper>
              <Input
                id='password'
                type='password'
                placeholder='Hasło'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorWrapper>
                {errors.password && touched.password && (
                  <FormMessage>{errors.password}</FormMessage>
                )}
              </ErrorWrapper>
            </OneInputWrapper>
            <OneInputWrapper>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='Potwierdź hasło'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorWrapper>
                {errors.confirmPassword && touched.confirmPassword && (
                  <FormMessage>{errors.confirmPassword}</FormMessage>
                )}
              </ErrorWrapper>
            </OneInputWrapper>
          </InputsWrapper>
          <WrapperButton>
            <Button disabled={isSubmitting} type='submit'>
              zarejestruj
            </Button>
            <BackButton onClick={() => navigate('/')}>anuluj</BackButton>
          </WrapperButton>
        </Form>
        {error && <FormMessage>Coś poszło nie tak. Spóbuj ponownie.</FormMessage>}
      </Wrapper>
    </Container>
  );
};
