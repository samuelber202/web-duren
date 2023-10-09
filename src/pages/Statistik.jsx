import React, { useState } from 'react';
import GrayBox from '../components/GrayBox';
import PageLayout from '../components/layouts/PageLayout';
import ChartAgama from '../components/charts/ChartAgama';
import ChartKesehatan from '../components/charts/ChartKesehatan';
import ChartLulus from '../components/charts/ChartLulus';
import ChartSekolah from '../components/charts/ChartSekolah';
import ChartPekerjaan from '../components/charts/ChartPekerjaan';
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';

function Statistik() {
  const [activeChart, setActiveChart] = useState(1);

  const renderChart = () => {
    switch (activeChart) {
      case 1:
        return <ChartAgama />;
      case 2:
        return <ChartKesehatan />;
      case 3:
        return <ChartLulus />;
      case 4:
        return <ChartSekolah />;
      case 5:
        return <ChartPekerjaan />;
      default:
        return null;
    }
  };

  return (
    <section>
      <PageLayout>
        <Flex mt={10} flexDirection="column" alignItems="center">
          <Text fontWeight="bold" fontSize="2xl" textAlign="center">
            Statistik Penduduk
          </Text>
          <ButtonGroup
            variant="solid"
            size="md"
            isAttached
            mt={4}
            flexDirection={{ base:'column', md:'row' }}
          >
            <Button
              colorScheme={activeChart === 1 ? 'blue' : 'gray'}
              onClick={() => setActiveChart(1)}
              mb={2}
            >
              Agama
            </Button>
            <Button
              colorScheme={activeChart === 2 ? 'blue' : 'gray'}
              onClick={() => setActiveChart(2)}
              mb={2}
            >
              Kesehatan
            </Button>
            <Button
              colorScheme={activeChart === 3 ? 'blue' : 'gray'}
              onClick={() => setActiveChart(3)}
              mb={2}
            >
              Lulus
            </Button>
            <Button
              colorScheme={activeChart === 4 ? 'blue' : 'gray'}
              onClick={() => setActiveChart(4)}
              mb={2}
            >
              Sekolah
            </Button>
            <Button
              colorScheme={activeChart === 5 ? 'blue' : 'gray'}
              onClick={() => setActiveChart(5)}
            >
              Pekerjaan
            </Button>
          </ButtonGroup>
          <Box mt={10} width="100%">
            {renderChart()}
          </Box>
        </Flex>
      </PageLayout>
    </section>
  );
}

export default Statistik;
