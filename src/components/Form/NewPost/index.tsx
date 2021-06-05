import { useState } from 'react';

import { useForm } from 'react-hook-form';

import api from './../../../services/api';

import useAuthContext from './../../../hooks/useAuthContext';

import {
  Container,
  Title,
  FormGroup,
  Label,
  TextArea,
  Error,
  Success
} from './../styles';

type PostData = {
  content: string;
};

export function Form() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const { state: { loading }, actions: { setLoading, setLoaded } } = useAuthContext();

  async function handleNewPost({ content }: PostData) {
    setErrorMessage(null);
    setSuccessMessage(null);

    setLoading();

    try {
      await api.post('/feed', { content });

      reset({
        content: ''
      });

      setSuccessMessage('Post criado com sucesso');

      setLoaded();
    } catch (error) {
      setErrorMessage('Não foi possível criar o post, tente novamente');

      setLoaded();
    }
  }

  const newPostOptions = {
    content: {
      required: true,
      minLength: 10
    }
  };

  return (
    <Container autoComplete="off" onSubmit={handleSubmit(handleNewPost)}>
      <Title>Novo Post</Title>

      <FormGroup>
        <Label>Conteúdo</Label>
        <TextArea
          placeholder="Conteúdo do seu post..."
          {...register('content', newPostOptions.content)}
        />
        {errors.content && errors.content.type === 'required' && (
          <Error>O conteúdo do post não pode ser vazio</Error>
        )}
        {errors.content && errors.content.type === 'minLength' && (
          <Error>O conteúdo do post deve conter pelo menos {newPostOptions.content.minLength} caracteres</Error>
        )}
      </FormGroup>

      <button
        type="submit"
        className="btn"
        disabled={loading}
      >
        Criar
      </button>
      {errorMessage && <Error className="center">{errorMessage}</Error>}
      {successMessage && <Success className="center">{successMessage}</Success>}
    </Container>
  );
}