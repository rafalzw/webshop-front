import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/config';
import { checkLogin } from '../../redux/apiCalls';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormikValues, useFormik } from 'formik';
import { registerSchema } from '../../schemas';
import * as React from 'react';

const Container = styled.div`
  min-height: 80vh;
`;
const Wrapper = styled.div`
  padding: 40px;
  width: 40%;

  ${mobile({ padding: '10px', width: '90%' })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const OneInputWrapper = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
`;

const Label = styled.label``;

const Input = styled.input`
  min-width: 40%;
  margin: 10px 0 5px 0;
  padding: 10px;
  outline-color: ${(props) => props.color};
  border: solid 1px #d3d3d3;
  &:focus {
    outline-color: ${(props) => props.color};
  }
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #404040;
  }
`;

export const FormMessage = styled.div`
  color: ${(props) => props.color};
  font-size: 0.8rem;
  text-align: right;
`;

const ErrorWrapper = styled.div`
  height: 1rem;
`;

export const UserData = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const userId = user?._id;

  const onSubmit = async (values: FormikValues, actions: any) => {
    const { firstName, lastName, username, email, password } = values;
    try {
      await axios.put(
        `${apiUrl}/users`,
        { username, firstName, lastName, email, password },
        {
          withCredentials: true,
        },
      );
      setError(null);
      setSuccess('Dane zostały zaktualizowane.');
    } catch (err) {
      setError('Aktualizacja nie powiodła się, spróbuj ponownie...');
    }
    actions.resetForm();
  };
  const {
    values,
    setValues,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
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

  useEffect(() => {
    (async () => {
      await checkLogin(dispatch);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${apiUrl}/users/${userId}`, {
          withCredentials: true,
        });
        await setValues(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setSuccess, setError]);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <ClipLoader />
        ) : (
          <Form onSubmit={handleSubmit}>
            <>
              <OneInputWrapper>
                <Label>Imię:</Label>
                <Input
                  value={values.firstName}
                  onChange={handleChange}
                  id='firstName'
                  type='text'
                  onBlur={handleBlur}
                  color={errors.firstName && touched.firstName ? 'darkred' : '#d3d3d3'}
                />
                <ErrorWrapper>
                  {errors.firstName && touched.firstName && (
                    <FormMessage color='darkred'>{errors.firstName}</FormMessage>
                  )}
                </ErrorWrapper>
              </OneInputWrapper>
              <OneInputWrapper>
                <Label>Nazwisko:</Label>
                <Input
                  value={values.lastName}
                  onChange={handleChange}
                  id='lastName'
                  type='text'
                  onBlur={handleBlur}
                  color={errors.lastName && touched.lastName ? 'darkred' : '#d3d3d3'}
                />
                <ErrorWrapper>
                  {errors.lastName && touched.lastName && (
                    <FormMessage color='darkred'>{errors.lastName}</FormMessage>
                  )}
                </ErrorWrapper>
              </OneInputWrapper>
              <OneInputWrapper>
                <Label>Nazwa użytkownika:</Label>
                <Input
                  value={values.username}
                  onChange={handleChange}
                  id='username'
                  type='text'
                  onBlur={handleBlur}
                  color={errors.username && touched.username ? 'darkred' : '#d3d3d3'}
                />
                <ErrorWrapper>
                  {errors.username && touched.username && (
                    <FormMessage color='darkred'>{errors.username}</FormMessage>
                  )}
                </ErrorWrapper>
              </OneInputWrapper>
              <OneInputWrapper>
                <Label>Adres email:</Label>
                <Input
                  value={values.email}
                  onChange={handleChange}
                  id='email'
                  type='email'
                  onBlur={handleBlur}
                  color={errors.email && touched.email ? 'darkred' : '#d3d3d3'}
                />
                <ErrorWrapper>
                  {errors.email && touched.email && (
                    <FormMessage color='darkred'>{errors.email}</FormMessage>
                  )}
                </ErrorWrapper>
              </OneInputWrapper>
              <OneInputWrapper>
                <Label>Hasło:</Label>
                <Input
                  id='password'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={errors.password && touched.password ? 'darkred' : '#d3d3d3'}
                />
                <ErrorWrapper>
                  {errors.password && touched.password && (
                    <FormMessage color='darkred'>{errors.password}</FormMessage>
                  )}
                </ErrorWrapper>
              </OneInputWrapper>
              <OneInputWrapper>
                <Label>Potwierdź hasło:</Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={errors.confirmPassword && touched.confirmPassword ? 'darkred' : '#d3d3d3'}
                />
                <ErrorWrapper>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <FormMessage color='darkred'>{errors.confirmPassword}</FormMessage>
                  )}
                </ErrorWrapper>
              </OneInputWrapper>
            </>
            {error && <FormMessage color='red'>{error}</FormMessage>}
            {success && <FormMessage color='green'>{success}</FormMessage>}
            <Button disabled={isSubmitting} type='submit'>
              Zapisz
            </Button>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
};
