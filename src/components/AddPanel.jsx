import { Stack, Spacer, Box, Button } from '@chakra-ui/react'
export const AddPanel = () => {

  return(
    <Stack h="100%" direction={['row','row','column', ]} spacing='24px' justify="space-between" align="center" bg='yellow.100'>
   <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
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