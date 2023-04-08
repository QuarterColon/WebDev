import React from 'react'
import {Text, Box, Container} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
const HomePage = () => {
  return( 
    <Container maxW='xl' centerContent>
      <Box 
      d = 'flex'
      textAlign= 'center'
      p = {3}
      bg = {"white"}
      w = "100%"
      m = "40px 0 15px 0"
      borderRadius= "lg"
      borderWidth= "1px"
      >
        <Text fontSize= "5xl" fontFamily="Prompt">
          LogIn
          </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius='lg' borderWidth="1px"> 
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Box>
    </Container>
  )
  
}

export default HomePage 