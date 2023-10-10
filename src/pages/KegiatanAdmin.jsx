import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import PengumumanForm from '../components/PengumumanForm'
import { Flex } from '@chakra-ui/react'
import KegiatanForm from '../components/KegiatanForm'

function PengumumanAdmin() {
  return (
    <>
    <DashboardLayout>
      <Flex ml={'250px'} justifyContent={'center'} >
        <KegiatanForm />
        </Flex>
    </DashboardLayout>
    </>
  )
}

export default PengumumanAdmin