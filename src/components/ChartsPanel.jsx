import Container from "@mui/material/Container";
import { TotalBudgetChart } from "./charts/TotalBudgetsChart";
import { TotalExpensesChart } from "./charts/TotalExpensesChart";
import { Stack, Grid, Grid2, Box  } from "@mui/material";
import { AddPanel } from "./AddPanel";
export const ChartsPanel = () => {
  return (

    <Grid container mt={3} p={0.2} >
 <Grid flexGrow= {1} xs={6} sm={6} md={4} alignItems="stretch">
<TotalBudgetChart />

  </Grid>
  <Grid item={true} xs={6} sm={6} md={4} >
  <TotalExpensesChart />
  </Grid>
  <Grid item={true} xs={12} sm={12} md={4}   justifyContent="center" alignItems="stretch" >
      <AddPanel />
    </Grid>
    </Grid>
  );
};
