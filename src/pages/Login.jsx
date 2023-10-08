/* eslint-disable no-unused-vars */
import React from 'react'
import LoginForm from '../components/LoginForm'
import { Box, Container } from '@chakra-ui/react'

function Login() {
  return (
    <section>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgImage={'/images/kantor_desa.jpeg'}
        bgPosition={'center'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
      >
        <Container>
          <LoginForm />
        </Container>
      </Box>
    </section>
  );
}

export default Login;
