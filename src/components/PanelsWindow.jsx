import { useBudgetsContext } from "../context/BudgetsContext";
import { Panel } from "./Panel";
import {Container, Stack } from '@mui/material'

export const PanelsWindow = () => {
 
  const { budgets } = useBudgetsContext();
  console.log(budgets)
 const Panels= budgets.map(budget=><Panel budget={budget} key={budget.id}/>)

return (
  <Container maxWidth="lg" sx={{mt:2}} >
    <Stack  direction="row" justifyContent="center" alignItems="center" sx={{flexWrap:"wrap",gap:2}}>
    {Panels}
    </Stack >
  </Container>
  
)
}