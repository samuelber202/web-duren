import React, { useEffect, useState } from 'react';
import PengumumanCard from './PengumumanCard';
import { Divider, Flex, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPengumuman } from '../config/redux/actions/pengumumanAction';
import PengumumanCardSkeleton from './PengumumanCardSkeleton';

function Pengumuman() {
  const [data, setData] = useState([]);
  const { getPengumumanResult } = useSelector((state) => state.pengumuman);
  const dispatch = useDispatch();
  const loading = !getPengumumanResult

  useEffect(() => {
    dispatch(getPengumuman());
  }, [dispatch]);

  useEffect(() => {
    if (getPengumumanResult) {
      setData(getPengumumanResult);
    }
  }, [getPengumumanResult]);

  return (
    <Flex flexDirection={'column'} flexGrow={12}>
      <Text fontSize={'2xl'}>Pengumuman <ChevronRightIcon/></Text>
      <Divider orientation="horizontal" borderWidth="1px" borderColor={'blue.500'} />
      <Flex mt={3} flexDir={'column'} gap={5}>
        {loading ? (
          [1, 2, 3, 4].map((_, index) => (
            <PengumumanCardSkeleton key={index} />
          ))
        ) : (
          data.map((item) => (
            <PengumumanCard
              key={item.id}
              title={item.title}
              content={
                item.content.length > 250 ? (
                  <Link to={`/pengumuman-warga/${item.id}`}>{item.content.slice(0, 150) + '... \nBaca Selanjutnya'}</Link>
                ) : (
                  <Link to={`/pengumuman/${item.id}`}>{item.content + ' ...'}</Link>
                )
              }
              date={format(new Date(item.createdAt * 1000), 'dd/MM/yyyy')}
              jenis="pengumuman"
            />
          ))
        )}
      </Flex>
    </Flex>
  );
}

export default Pengumuman;
