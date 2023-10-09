import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import exportDataInit from "highcharts/modules/export-data";
import Highcharts3D from "highcharts/highcharts-3d"; // Import Highcharts 3D module
import { Button, Flex } from "@chakra-ui/react";

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
    text: "GRAFIK JENJANG PENDIDIKAN WARGA",
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
      name: "Tingkat Pendidikan",
      colorByPoint: true,
      data: [
        { name: "SD", y: 7839 },
        { name: "SMP", y: 6803 },
        { name: "SMA", y: 10782 },
        { name: "D1", y: 505 },
        { name: "D2", y: 781 },
        { name: "D3", y: 390 },
        { name: "S1", y: 72 },
        { name: "S2", y: 55 },
        { name: "S3", y: 4 },
        { name: "S.D.T.T", y: 125 },
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
      "SD",
      "SMP",
      "SMA",
      "D1",
      "D2",
      "D3",
      "S1",
      "S2",
      "S3",
      "S.D.T.T",
    ],
  },
  yAxis: {
   
  },
  series: [
    {
      name: "Jumlah",
      data: [7839, 6803, 10782, 505, 781, 390, 72, 55, 4, 125],
    },
  ],
};

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
      <Button colorScheme="facebook" onClick={switchTo3D}>3D Pie Chart</Button>
      <Button colorScheme="facebook" onClick={switchToBar}>Bar Chart</Button>
      </Flex>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
}

export default ChartLulus;
