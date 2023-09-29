import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { login } from '../config/redux/actions/loginAction';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async () => {
    const res =  await dispatch(login(email, password)).catch(err=>err);
    res ? navigate('/dashboard') : console.log('failed')
  };


  return (
    <Stack spacing={3}>
      <FormControl>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
