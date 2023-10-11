/* eslint-disable no-undef */
import React from 'react'
import Navbar from '../Navbar'
import { Box } from '@chakra-ui/react'
import Footer from '../Footer'

function SinglePageLayout({children}) {
  return (
    <> 
    <Navbar />
      <Box
        maxW="100%"
        mx="auto"
        px={{ base: "16px", md: "60px" }} >
        {children}
      </Box>
      <Footer /></>
  )
}

export default SinglePageLayout