import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
export const MainBar = () => {
  return (
   <AppBar position="static" color="primary">
     <Toolbar>
       <Typography variant="h6" sx={{ flexGrow: 1, fontStyle: 'italic'  }}>
         My Budget
       </Typography>
       <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained" color="secondary" size="small">
          Add Budget
        </Button>
        <Button variant="contained" color="primary" size="small">
          Add Expense
        </Button>
      </Stack>
     </Toolbar>
   </AppBar>
      

  
);
}