import React from 'react'
import PengumumanCard from './PengumumanCard'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

function Pengumuman() {
  return (
    <Flex flexDirection={'column'} flexGrow={12}>
 <Text
     fontSize={'2xl'}
    >
      Pengumuman <ChevronRightIcon/>
    </Text>
    <Divider orientation="horizontal" borderWidth="1px" borderColor={'blue.500'} />
    <Flex mt={3} flexDir={'column'} gap={5}>
    <PengumumanCard title={'Syarat Daftar Kartu Prakerja'} date={'6/10/2023'} content={'Syarat-syarat untuk mendaftar Kartu Prakerja perlu diperhatikan. Kartu Prakerja adalah program yang bertujuan untuk mengembangkan kompetensi kerja dan kewirausahaan bagi pencari kerja, pekerja yang terkena pemutusan hubungan kerja, serta pekerja yang membutuhkan peningkatan kompetensi, termasuk pelaku usaha mikro dan kecil.  '}/>
    <PengumumanCard title={'Seleksi Pengurus BUMDes'} content={'Diinformasikan kepada seluruh warga Masyarakat Desa secara khusus, Berdasarkan Keputusan Kepala Desa Nomor 7 Tahun 2019 bahwa Masa Bakti Kepengurusan Badan Usaha Milik Desa (BUMDES)  berakhir pada tanggal 31 Januari 2019, maka dari itu Pemerintah Desa membentuk Panitia Pemilihan Direktur Badan Usaha Milik Desa (BUMDES)  pada tanggal 24 Januari 2019 untuk melaksanakan Kegiatan Pemilihan tersebut, setelah terbentuk dengan ditertibkanya Surat Keputusan Kepala Desa  Nomor 14 Tahun 2019 tentang Pengangkatan Panitia Pemilihan Direktur Badan Usaha Milik Desa (BUMDES) '}/>
    <PengumumanCard title={'Lokasi Posyandu'} content={'BLABLABLA'}/>

    </Flex>
    </Flex>
  )
}

export default Pengumuman