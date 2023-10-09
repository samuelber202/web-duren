import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
  title: '',
  theme: '',
  content: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Masukkan judul artikel').max(100, 'Judul harus kurang dari 100 karakter'),
  content: Yup.string().required('Masukkan artikel disini').min(20, 'Artikel harus memiliki setidaknya 20 karakter').max(10000, 'Artikel harus kurang dari 10000 karakter'),
});

const PengumumanForm = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const payload = {
        title: values.title,
        content: values.content,
      };

      const response = await axios.post('https://651635c709e3260018c9876d.mockapi.io/pengumuman', payload);

      if (response.status === 201) {
        console.log('Kegiatan successfully added:', response.data);
        resetForm();
      } else {
        console.error('Failed to add kegiatan:', response.status);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Box mx={'auto'} textAlign={'center'} maxW={{ base: '100%', sm: '400px' }} p={4} boxShadow="lg" rounded="md">
              <Heading mb={4} fontSize={{ base: 'xl', sm: '2xl' }}>Tambah Pengumuman</Heading>

              <Field name="title">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.title && form.touched.title}>
                    <FormLabel htmlFor="title">Masukkan Judul Pengumuman</FormLabel>
                    <Input {...field} id="title" placeholder="Masukkan judul artikel" />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

            

              <Field name="content">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.content && form.touched.content}>
                    <FormLabel htmlFor="content">Masukkan pengumuman disini</FormLabel>
                    <Textarea {...field} id="content" rows="5" placeholder="Masukkan artikel disini" />
                    <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                width="100%"
              >
                Add
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PengumumanForm;
