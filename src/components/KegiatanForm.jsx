import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Grid, 
  GridItem, 
  CircularProgress,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  getDatabase,
  ref as rtdbRef,
  push,
  set,
} from 'firebase/database';
import ChakraAlert from './alerts/ChakraAlert';
import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';

const initialValues = {
  title: '',
  content: '',
  content1: '',
  content2: '',
  file: null,
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Masukkan judul artikel')
    .max(55, 'Judul harus kurang dari 55 karakter'),
  content: Yup.string()
    .required('Masukkan artikel disini')
    .min(250, 'Artikel harus memiliki setidaknya 250 karakter')
    .max(3000, 'Artikel harus kurang dari 10000 karakter'),
});

const KegiatanForm = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [alert, setAlert] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (image) {
      uploadImage();
    }
  }, [image]);

  const uploadImage = () => {
    setIsUploading(true);
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'tutorial');
    data.append('cloud_name', 'dttd52ltg');
    fetch('https://api.cloudinary.com/v1_1/dttd52ltg/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsUploading(false);
      });
  };

  return (
    <Box>
      {alert && (
        <ChakraAlert
          status={alert.status}
          title={alert.title}
          description={alert.description}
          onClose={() => setAlert(null)}
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          const db = getDatabase();
          const kegiatanRef = rtdbRef(db, 'kegiatan');
          const newKegiatanRef = push(kegiatanRef);
          const jakartaTimeZone = 'Asia/Jakarta';
          const now = new Date();
          const currentDateTime = format(utcToZonedTime(now, jakartaTimeZone), 'dd/MM/yyyy HH:mm');        
          const postData = {
            id: newKegiatanRef.key, 
            title: values.title,
            content: values.content,
            content1: values.content1,
            content2: values.content2,
            createdAt: currentDateTime,
            author: 'Admin Desa',
            image_url: url,
          };

          set(newKegiatanRef, postData)
            .then(() => {
              setAlert({
                status: 'success',
                title: 'Success',
                description: 'Berita Berhasil Ditambahkan!',
              });
              resetForm();
            })
            .catch((error) => {
              setAlert({
                status: 'error',
                title: 'Error',
                description: 'Failed to add pengumuman. ' + error.message,
              });
            })
            .finally(() => {
              setSubmitting(false);
              window.scrollTo(0, 0);
              setImage(null);
            });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <Box
              mx={'auto'}
              textAlign={'center'}
              maxW={{ base: '100%', sm: '800px' }}
              p={4}
              boxShadow="lg"
              rounded="md"
            >
              <Heading mb={4} fontSize={{ base: 'xl', sm: '2xl' }}>
                Tambah Berita Warga
              </Heading>

              <Grid templateColumns="1fr 1fr" gap={4}>
                <GridItem colSpan={1}>
                  <Field name="title">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.title && form.touched.title}
                      >
                        <FormLabel htmlFor="title">Masukkan Judul Berita</FormLabel>
                        <Input {...field} id="title" placeholder="Masukkan judul artikel" />
                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>

                <GridItem colSpan={1}>
                  <FormControl isInvalid={url === '' && image === null}>
                    <FormLabel htmlFor="file">Unggah Gambar</FormLabel>
                    <Input
                      type="file"
                      id="file"
                      accept="image/*"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        setFieldValue('file', e.target.files[0]);
                      }}
                    />
                    <FormErrorMessage>Membutuhkan Gambar</FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>

              <Field name="content">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.content && form.touched.content}
                  >
                    <FormLabel htmlFor="content">Masukkan Paragraph 1</FormLabel>
                    <Textarea
                      {...field}
                      id="content"
                      rows="5"
                      placeholder="Masukkan artikel disini"
                    />
                    <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="content1">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.content && form.touched.content}
                  >
                    <FormLabel htmlFor="content">Masukkan Paragraph 2</FormLabel>
                    <Textarea
                      {...field}
                      id="content"
                      rows="5"
                      placeholder="Masukkan artikel disini"
                    />
                    <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="content2">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.content && form.touched.content}
                  >
                    <FormLabel htmlFor="content">Masukkan Paragraph 3</FormLabel>
                    <Textarea
                      {...field}
                      id="content"
                      rows="5"
                      placeholder="Masukkan artikel disini"
                    />
                    <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {isUploading && (
                <CircularProgress
                  isIndeterminate
                  color="teal"
                  size="10px"
                  mt={2}
                  alignSelf="center"
                />
              )}

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting || isUploading}
                type="submit"
                width="100%"
                isDisabled={!url}
              >
                Tambah Berita
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default KegiatanForm;
