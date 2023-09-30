import { Table, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function InformationTable() {
  return (
    <Table variant="striped">
      <Tbody>
        <Tr>
          <Th width="40%" isNumeric>
            Kode Pos
          </Th>
          <Td>:</Td>
          <Td>41371</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Tahun Pembentukan
          </Th>
          <Td>:</Td>
          <Td>1930</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Tipologi
          </Th>
          <Td>:</Td>
          <Td>Pertenakan</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Klasifikasi
          </Th>
          <Td>:</Td>
          <Td>SWAKARYA</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Kategori
          </Th>
          <Td>:</Td>
          <Td>MULA</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Luas Wilayah
          </Th>
          <Td>:</Td>
          <Td>252 ha</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Batas Sebelah Utara
          </Th>
          <Td>:</Td>
          <Td>Keluharan Cibalongsari</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Batas Sebelah Selatan
          </Th>
          <Td>:</Td>
          <Td>Kelurahan Walahar</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Batas Sebelah Timur
          </Th>
          <Td>:</Td>
          <Td>Kelurahan Pancawati</Td>
        </Tr>
        <Tr>
          <Th width="40%" isNumeric>
            Batas Sebelah Barat
          </Th>
          <Td>:</Td>
          <Td>Kelurahan Waringin</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default InformationTable;
