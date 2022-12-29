import { Grid, GridItem,Container,SimpleGrid,Box,Card ,Heading} from '@chakra-ui/react'
import { AddPanel } from './AddPanel'
import { TotalBudgetChart } from './charts/TotalBudgetChart'
import {TotalExpensesChart} from './charts/TotalExpensesChart'

export const ChartsPanel = () => {

  return(
    <>

<Grid  templateColumns={['1fr','repeat(2, 1fr)','repeat(3, 1fr)']} gap={4} w="90%">

<GridItem h="150">
  
<TotalBudgetChart />

  </GridItem>

  <GridItem h="150">

<TotalExpensesChart />

  </GridItem>

  <GridItem >
  
 
  <AddPanel/>

  </GridItem>
    


</Grid>
   
    </>
  )
}