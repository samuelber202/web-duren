// src/components/PengumumanList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';
import { fetchPengumuman } from '../config/redux/actions/beritaAction';

const PengumumanList = () => {
  const pengumumanState = useSelector((state) => state.berita);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPengumuman());
  }, [dispatch]);

  const { loading, pengumuman, error } = pengumumanState;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      {pengumuman.map((item) => (
        <div key={item.id}>
          <Text fontWeight="bold">{item.title}</Text>
          {item.content.split('\n').map((line, index) => (
            <Text key={index}>{line}</Text>
          ))}
        </div>
      ))}
    </Box>
  );
};

export default PengumumanList;
