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
    text: "GRAFIK PEKERJAAN",
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
      name: "Pekerjaan",
      colorByPoint: true,
      data: [
    
            { name: 'Petani', y: 56 },
            { name: 'PNS', y: 3350 },
            { name: 'Wiraswasta', y: 500 },
            { name: 'Dokter Swasta', y: 30 },
            { name: 'Karyawan Swasta', y: 9166 },
            { name: 'Pedagang', y: 1218 },
            { name: 'Perbengkelan', y: 2007 },
            { name: 'Pengrajin', y: 8 },
            { name: 'Pengumpul Barang Bekas', y: 15 },
            { name: 'Bidan', y: 15 },
            { name: 'Dosen Swasta', y: 10 },

          
          
      ],
    },
  ],
};

const optionsBar = {
  chart: {
    type: "bar",
  },
  title: {
    text: "GRAFIK PEKERJAAN",
  },
  xAxis: {
    

    categories: [
      "Petani",
      "PNS",
      "Wiraswasta",
      "Dokter Swasta",
      "Karyawan Swasta",
      "Pedagang",
      "Perbengkelan",
      "Pengrajin",
      "Pengumpul Barang Bekas",
      "Bidan",
      "Dosen Swasta"
    ],
  },
  yAxis: {
   
  },

  series: [
    {
      name: "Jumlah",
      data: [56, 3350, 500, 30, 9166, 1218, 2007, 8, 15, 15, 10],
    },
  ],
};

function ChartPekerjaan() {
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

export default ChartPekerjaan;
