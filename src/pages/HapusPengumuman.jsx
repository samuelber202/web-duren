import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import { Flex } from '@chakra-ui/react'
import PengumumanTable from '../components/PengumumanTable'

function HapusPengumuman() {
  return (
    <>
    <DashboardLayout>
      <Flex ml={'250px'} justifyContent={'center'} >

<PengumumanTable/>
      </Flex>
    </DashboardLayout>
    </>
  )
}

export default HapusPengumuman
