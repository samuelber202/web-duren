import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { login } from '../config/redux/actions/loginAction';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleLogin = async () => {
    try {
      dispatch({ type: 'CHANGE_LOADING', value: true });
  
      const res = await dispatch(login(email, password));
  
      if (res) {
        dispatch({ type: 'LOGIN', value: true });
  
        navigate('/dashboard');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Login error:', error.message);
    }
  };

  // useEffect(()=>{
  //   if(token){
  //     navigate('/dashboard')
  //   }
  // },[token, navigate])


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
