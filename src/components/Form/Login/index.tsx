import { useState } from 'react';

import { useForm } from 'react-hook-form';

import api from './../../../services/api';

import useAuthContext from './../../../hooks/useAuthContext';

import { Container, Title, FormGroup, Label, Input, Error } from './../styles';

export function Form() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {
    state: { loading },
    actions: { setLoading, setLoaded },
    doLogin
  } = useAuthContext();

  type LoginData = {
    username: string;
    password: string;
  };

  async function handleLogin({ username, password }: LoginData) {
    setErrorMessage(null);

    setLoading();

    try {
      const { data } = await api.post('/sign-in', {
        username,
        password
      });

      setLoaded();

      doLogin({
        token: data,
        authenticated: true
      });
    } catch (error) {
      setErrorMessage('Nome de usuário e/ou senha incorretos!');

      setLoaded();
    }
  }

  const loginOptions = {
    username: { required: 'O nome de usuário é obrigatório' },
    password: { required: 'A senha é obrigatória' },
  }

  return (
    <Container autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
      <Title>Acesse sua conta</Title>

      <FormGroup>
        <Label>Usuário</Label>
        <Input type="text" placeholder=" " {...register('username', loginOptions.username)} />
        {errors.username && <Error>{errors.username.message}</Error>}
      </FormGroup>

      <FormGroup>
        <Label>Senha</Label>
        <Input type="password" placeholder=" " {...register('password', loginOptions.password)} />
        {errors.password && <Error>{errors.password.message}</Error>}
      </FormGroup>

      <button
        type="submit"
        className="btn"
        disabled={loading}
      >
        Acessar
      </button>
      {errorMessage && <Error className="center">{errorMessage}</Error>}
    </Container>
  );
};
