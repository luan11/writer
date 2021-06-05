import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { NavLink } from 'react-router-dom';

import api from './../../../services/api';

import useAuthContext from './../../../hooks/useAuthContext';

import { Container, Title, FormGroup, Label, Input, Error, Success } from './../styles';

export function Form() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const { state: { loading }, actions } = useAuthContext();

  type LoginData = {
    username: string;
    password: string;
  };

  async function handleRegister({ username, password }: LoginData) {
    setErrorMessage(null);
    setSuccessMessage(null);

    actions.setLoading();

    try {
      await api.post('/sign-up', {
        username,
        password
      });

      reset({
        username: '',
        password: ''
      });

      setSuccessMessage('Conta criada com sucesso');

      actions.setLoaded();
    } catch (error) {
      setErrorMessage('Não foi possível criar a conta, tente novamente');

      actions.setLoaded();
    }
  }

  const loginOptions = {
    username: { required: 'O nome de usuário é obrigatório' },
    password: { required: 'A senha é obrigatória' },
  }

  return (
    <Container autoComplete="off" onSubmit={handleSubmit(handleRegister)}>
      <Title>Crie sua conta</Title>

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
        Criar
      </button>
      {errorMessage && <Error className="center">{errorMessage}</Error>}
      {
        successMessage
        && (
          <>
            <Success className="center">{successMessage}</Success>
            <NavLink className="btn success" to="/">Acessar conta</NavLink>
          </>
        )
      }
    </Container>
  );
};
