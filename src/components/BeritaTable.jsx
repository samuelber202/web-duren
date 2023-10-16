import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  IconButton,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Text,
} from '@chakra-ui/react';
import {  DeleteIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBerita, getBerita } from '../config/redux/actions/beritaAction';

function BeritaTable() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { getBeritaResult, deleteBeritaResult } = useSelector((state) => state.berita);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState({ type: '', message: '' });

  const handleDeleteBerita = (beritaId) => {
    dispatch(deleteBerita(beritaId));
  };

  useEffect(() => {
    dispatch(getBerita());
  }, [dispatch]);

  useEffect(() => {
    if (deleteBeritaResult) {
      dispatch(getBerita());
    }
  }, [deleteBeritaResult]);

  useEffect(() => {
    if (getBeritaResult) {
      setIsLoading(false);
    }
  }, [getBeritaResult]);

  useEffect(() => {
    if (deleteBeritaResult) {
      setIsAlertOpen(true);
      setAlertContent({
        type: 'success', // You can also use 'error' for an error message
        message: 'Berita deleted successfully!', // Customize the message
      });

      setTimeout(() => {
        setIsAlertOpen(false);
      }, 4000);
    }
  }, [deleteBeritaResult]);

  return (
    <Box p={4}>
      {isLoading ? (
        <Spinner />
      ) : (
        <><Text textAlign={'center'} fontWeight={'bold'} fontSize={'3xl'}>Hapus Berita</Text>
        <Table mt={10} variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Judul</Th>
              <Th>Tanggal</Th>
              <Th>Penulis</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {getBeritaResult.map((berita) => (
              <Tr key={berita.id}>
                <Td>{berita.title}</Td>
                <Td>{berita.createdAt}</Td>
                <Td>{berita.author}</Td>
                <Td>
                  <IconButton
                    onClick={() => handleDeleteBerita(berita.id)}
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </>
      )}

      {isAlertOpen && (
        <Alert status={alertContent.type} mt={4}>
          <AlertIcon />
          <AlertTitle mr={2}>{alertContent.message}</AlertTitle>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setIsAlertOpen(false)}
          />
        </Alert>
      )}
    </Box>
  );
}

export default BeritaTable;
