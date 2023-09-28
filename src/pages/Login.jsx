/* eslint-disable no-unused-vars */
import React from "react";
import LoginForm from "../components/layouts/LoginForm";
import { Box, Container } from "@chakra-ui/react";

function Login() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Container>
          <LoginForm />
        </Container>
      </Box>
    </>
  );
}

export default Login;
