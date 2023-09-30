import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { CalendarIcon, SunIcon } from '@chakra-ui/icons'


function MenuCard() {
  return (
    <>
    
     <Text fontWeight={'bold'} textAlign={'center'} mb={'5'} fontSize={'2xl'}>LOREM</Text>
    
 <Flex
          justifyContent="center"
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 5, md: 10 }}
          align={{ base: 'center', md: 'flex-start' }} // Center horizontally on mobile, align to the left on medium screens
          mb={10}
      >
         
          <Card
            title="Sejarah Desa"
            description="This is the first card."
            icon={<CalendarIcon/>}
          />
          <Card
            title="Kegiatan"
            description="This is the second card."
            icon={<SunIcon/>}
          />
          <Card
            title="Bisnis"
            description="This is the second card."
            icon={'sd'}
/>
          <Card
            title="Card 2"
            description="This is the second card."
            imageUrl="https://example.com/card2.jpg"
          />
          {/* Add more Card components as needed */}
        </Flex>
    </>
  )
}

export default MenuCard