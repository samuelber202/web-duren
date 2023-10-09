import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import exportDataInit from "highcharts/modules/export-data";
import Highcharts3D from "highcharts/highcharts-3d"; // Import Highcharts 3D module
import { Button, Flex, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

// Initialize the exporting, export-data, and 3D modules
exportingInit(Highcharts);
exportDataInit(Highcharts);
Highcharts3D(Highcharts);

// Your Highcharts configuration options for 3D Pie Chart
const options3D = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
      depth: 50,
      viewDistance: 25,
    },
  },
  title: {
    text: "GRAFIK SARANA PENDIDIKAN",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.y}",
      },
    },
  },
  series: [
    {
      name: "Jumlah",
      colorByPoint: true,
      data: [
        { name: "MDA", y: 4 },
        { name: "TK", y: 5 },
        { name: "SD", y: 5 },
        { name: "SMP/MI", y: 6 },
        { name: "SMA/MA/SMK", y: 4 },
      ],
    },
  ],
};

const optionsBar = {
  chart: {
    type: "bar",
  },
  title: {
    text: "GRAFIK JENJANG PENDIDIKAN WARGA",
  },
  xAxis: {
    categories: [
        "MDA",
        "TK",
      "SD",
      "SMP/MI",
      "SMA/MA/SMK",
      
    ],
  },
  yAxis: {
   
  },
  series: [
    {
      name: "Jumlah",
      data: [4,5,5,6,4],
    },
  ],
};

const tableData =  [
    { name: "MDA", y: 4 },
    { name: "TK", y: 5 },
    { name: "SD", y: 5 },
    { name: "SMP/MI", y: 6 },
    { name: "SMA/MA/SMK", y: 4 },
  ]

function ChartLulus() {
  const [chartOptions, setChartOptions] = useState(options3D);

  const switchTo3D = () => {
    setChartOptions(options3D);
  };

  const switchToBar = () => {
    setChartOptions(optionsBar);
  };

  return (
    <>
    <Flex justifyContent={'center'} gap={5}>
      <Button colorScheme="linkedin" onClick={switchTo3D}>3D Pie Chart</Button>
      <Button colorScheme="linkedin" onClick={switchToBar}>Bar Chart</Button>
      </Flex>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <Table variant="striped" colorScheme="blue" size="sm">
        <Thead>
          <Tr>
            <Th>Sarana Pendidikan</Th>
            <Th>Jumlah</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((dataItem, index) => (
            <Tr key={index}>
              <Td>{dataItem.name}</Td>
              <Td>{dataItem.y}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default ChartLulus;
