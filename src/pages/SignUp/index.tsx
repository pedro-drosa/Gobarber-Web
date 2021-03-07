import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Gobarber" />
        <form>
          <h1>Faça seu Cadastro</h1>
          <Input name="user" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="createaccount">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
