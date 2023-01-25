import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../config/config';
import { checkLogin } from '../../redux/apiCalls';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { validateForm } from '../../helpers/validateForm';
import ClipLoader from 'react-spinners/ClipLoader';

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

const FormInputRow = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  min-width: 40%;
  margin: 10px 0 20px 0;
  padding: 10px;
  border: solid 1px #d3d3d3;

  &:focus {
    outline-color: #d3d3d3;
`;
const FormButton = styled.button`
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
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const UserData = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const userId = user?._id;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const resultError = validateForm({
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPass,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setLoading(true);
    try {
      await axios.put(
        `${url}/users`,
        { username, firstName, lastName, email, password },
        {
          withCredentials: true,
        },
      );
      setError(null);
      setSuccess('Dane zostały zaktualizowane.');
      setLoading(false);
    } catch (err) {
      setError('Aktualizacja nie powiodła się, spróbuj ponownie...');
    }
  };

  useEffect(() => {
    (async () => {
      await checkLogin(dispatch);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}/users/${userId}`, {
          withCredentials: true,
        });
        const { username, firstName, lastName, email } = res.data;
        setUsername(username);
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const formData = [
    {
      label: 'Nazwa użytkownika:',
      value: username,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
      type: 'text',
    },
    {
      label: 'Imię:',
      value: firstName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value),
      type: 'text',
    },
    {
      label: 'Nazwisko:',
      value: lastName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value),
      type: 'text',
    },
    {
      label: 'Email:',
      value: email,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'Hasło:',
      onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
      type: 'password',
    },
    {
      label: 'Potwierdź hasło:',
      onChange: (e: ChangeEvent<HTMLInputElement>) => setConfirmPass(e.target.value),
      type: 'password',
    },
  ];

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <ClipLoader />
        ) : (
          <Form onSubmit={handleSubmit}>
            <>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput type={el.type} value={el.value} onChange={el.onChange} />
                </FormInputRow>
              ))}
            </>
            {error && <FormMessage color='red'>{error}</FormMessage>}
            {success && <FormMessage color='green'>{success}</FormMessage>}
            <FormButton disabled={loading} type='submit'>
              Zapisz
            </FormButton>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
};
