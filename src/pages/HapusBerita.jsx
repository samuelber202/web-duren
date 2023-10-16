import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import { Flex } from '@chakra-ui/react'
import BeritaTable from '../components/BeritaTable'

function HapusBerita() {
  return (
    <>
    <DashboardLayout>
      <Flex ml={'250px'} justifyContent={'center'} >

    <BeritaTable/>
      </Flex>
    </DashboardLayout>
    </>
  )
}

export default HapusBerita
