import { Stack, Button, Card, CardHeader, Typography, CardActions } from "@mui/material";

export const AddPanel = () => {

  return(
<Card  sx={{mt:{xs:1,md:0}}}>
<Stack height={{xs:70,md:204}} justifyContent="space-between" alignItems="center"  direction={{xs:"row",md:"column"}}>
<CardHeader title={`Remaining: 2000$`} />

  <Stack  spacing={1}  p={0.5} direction={{xs:"row",md:"column"}} justifyContent="center" alignItems="stretch">
<Button variant="contained" color="secondary" size="small" >
          Add Budget
        </Button>
        <Button variant="contained" color="primary" size="small">
          Add Expense
        </Button>
        </Stack>
       </Stack>
</Card>
  )
}