import { Stack, Spacer, Box, Button, Heading,Card } from '@chakra-ui/react'
export const AddPanel = () => {

  return(    
  <Stack h="100%" w="100%" direction={['row','row','column', ]} spacing='24px' justify="space-between" align="center" bg='yellow.100'>

    <Card  h="100%" w="100%">
  <Heading  p="2" size='md' noOfLines={1}>
    (3xl) In love with React & Next
    </Heading>
      
      <Stack h="100%" p="2" direction={['row','row','column', ]} spacing='24px' justify="space-between" align="center" >
        <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
   
</Stack>
</Card>      
</Stack>

  )
}

// {/* <Flex direction="column" justify="center" align="space-between">
// <Button colorScheme='blue'>Button</Button>
 
//   <Box>
//     <Button colorScheme='blue'>Button</Button>
//   <Button colorScheme='blue'>Button</Button>
//   </Box>
// </Flex> */}