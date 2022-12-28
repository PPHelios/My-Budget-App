import {Card, Typography, Box, CardContent, Container} from '@mui/material'
import { ProgressBar } from "./ProgressBar"

export const Panel = ({budget}) => {

  const budgetValue = +budget.budget;
  const expenses = budget.totalExpenses();

  const value = Math.round((expenses / budgetValue) * 100);;
  let color = "primary";

  if (value >90){
    color="error"
  }else if (value >70) {
    color="warning"
  } else if (value >50){
 color="success"
  }
  let panelColor = value >100?"error.main":"primary"
return(


<Card sx={{width:220,p:1}}>
  
    <Typography variant="h6" color="initial" sx={{textAlign:"end"}}>{`${expenses} / ${budgetValue}`}</Typography>
   <ProgressBar value={value} color={color} panelColor={panelColor}/>
  
 </Card>

)

}