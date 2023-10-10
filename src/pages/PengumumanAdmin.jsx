import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import PengumumanForm from '../components/PengumumanForm'
import { Flex } from '@chakra-ui/react'

function PengumumanAdmin() {
  return (
    <>
    <DashboardLayout>
      <Flex ml={'250px'} justifyContent={'center'} >
        <PengumumanForm />
        </Flex>
    </DashboardLayout>
    </>
  )
}

export default PengumumanAdmin