interface Props {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPass: string;
}

export function validateForm({
  username,
  firstName,
  lastName,
  email,
  password,
  confirmPass,
}: Props) {
  if (!username.trim()) {
    return 'Nazwa użytkownika jest wymagana!';
  }
  if (!firstName.trim()) {
    return 'Imię jest wymagane!';
  }
  if (!lastName.trim()) {
    return 'Nazwisko jest wymagane!';
  }
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return 'Email jest wymagany!';
  } else if (!regex.test(email.toLocaleLowerCase())) {
    return 'Adres email jest nieprawidłowy!';
  }
  if (!password) {
    return 'Podaj hasło!';
  } else if (password.length < 4) {
    return 'Hasło powinno składać się przynajmniej z 4 znaków!';
  }

  if (!confirmPass) {
    return 'Potwierdź swoje hasło!';
  } else if (confirmPass !== password) {
    return 'Niepoprawne hasło!';
  }
  return null;
}
