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
import { deletePengumuman, getPengumuman } from '../config/redux/actions/pengumumanAction';

function PengumumanTable() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { getPengumumanResult, deletePengumumanResult } = useSelector((state) => state.pengumuman);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState({ type: '', message: '' });

  const handleDeleteBerita = (beritaId) => {
    dispatch(deletePengumuman(beritaId));
  };

  useEffect(() => {
    dispatch(getPengumuman());
  }, [dispatch]);

  useEffect(() => {
    if (deletePengumumanResult) {
      dispatch(getPengumuman());
    }
  }, [deletePengumumanResult]);

  useEffect(() => {
    if (getPengumumanResult) {
      setIsLoading(false);
    }
  }, [getPengumumanResult]);

  useEffect(() => {
    if (deletePengumumanResult) {
      setIsAlertOpen(true);
      setAlertContent({
        type: 'success', // You can also use 'error' for an error message
        message: 'Pengumuman Berhasil Dihapus', // Customize the message
      });

      setTimeout(() => {
        setIsAlertOpen(false);
      }, 4000);
    }
  }, [deletePengumumanResult]);

  return (
    <Box p={4}>
      {isLoading ? (
        <Spinner />
      ) : (
        <><Text textAlign={'center'} fontWeight={'bold'} fontSize={'3xl'}>Hapus Pengumuman</Text>
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
            {getPengumumanResult.map((berita) => (
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

export default PengumumanTable;
