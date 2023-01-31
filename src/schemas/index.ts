import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
  firstName: yup.string().min(3).max(13).required('Pole wymagane'),
  lastName: yup.string().min(3).max(35).required('Pole wymagane'),
  username: yup.string().min(6).max(20).required('Pole wymagane'),
  email: yup.string().email('Wprowadź poprawny adres email').required('Pole wymagane'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        'Wprowadź silniejsze hasło. Minimum 5 znaków, 1 duża litera, 1 mała litera, 1 cyfra.',
    })
    .required('Pole wymagane'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Hasło jest niepoprawne')
    .required('Pole wymagane'),
});
