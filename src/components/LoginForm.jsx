import React from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../config/redux/actions/loginAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.auth.message);
  const isLoading = useSelector((state) => state.auth.isLoading);


  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
        'Password must contain at least 8 characters, one letter, and one number'
      ),
  });

  const handleSubmit = async (values) => {
    try {
      dispatch({ type: 'CHANGE_LOADING', value: true });

      const res = await dispatch(login(values.email, values.password));

      if (res) {
        dispatch({ type: 'LOGIN', value: true });
        location.replace('/dashboard');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Login error:', error.message);
    }
  };

  return (
    <>
     {errorMessage && (
        <Alert mb={10} status="error" variant="left-accent">
          <AlertIcon />
          {errorMessage}
        </Alert>
      )}
      <Flex alignItems="center" position={'absolute'} top={10} left={10}>
        <img src="/images/logo.png" width="30px" alt="" />
        <Text color={'black'} fontWeight="bold" size="sm" ml={2}>
          <span style={{ display: 'block' }}>Desa Duren</span>
          <span style={{ display: 'block', fontWeight: 'normal' }}>
            Kabupaten Karawang
          </span>
        </Text>
      </Flex>
      <Box bg={'white'} p={10} borderRadius={'md'}>
        <Text textAlign={'center'} fontWeight={'bold'} mb={10} fontSize={'3xl'}>
          Login Admin
        </Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="Email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input {...field} id="password" type="password" placeholder="Password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                type="submit"
                isDisabled={isLoading || isSubmitting}
                colorScheme="orange"
                w={'full'}
                mt={6}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Login;