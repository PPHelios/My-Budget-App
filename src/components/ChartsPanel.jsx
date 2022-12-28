import { Grid, GridItem,Container,SimpleGrid,Box } from '@chakra-ui/react'
import { AddPanel } from './AddPanel'
import { TotalBudgetChart } from './charts/TotalBudgetChart'

export const ChartsPanel = () => {

  return(
    <>
<SimpleGrid minChildWidth='200px' spacing='10px'>
    <Box h="150" >
<TotalBudgetChart />
</Box>
<Box  bg="red.100">
<TotalBudgetChart />
</Box>
<Box  >
  <AddPanel/>
</Box>
</SimpleGrid>
   
    </>
  )
}