import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams,  } from '@mui/x-data-grid';
// Modal, Button, Typography
import { Modal, Button, Typography  } from "@mui/material";
import { useState } from 'react';

export const BudgetDetailsModal = ({budget}) => {

  const style = {
    position: 'absolute',
    top: 10,
    left: 10,
   
    width: 800,
    height:"80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 80,
      editable: true,
    },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 160,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 100,
      editable: true,
    },
  ];
  
  const rows = budget.expenses.map(b=>({
    id:b.id, 
  name:b.name,
  value:b.value,
  description:b.description,
  date:b.date
}))


return(
  <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
          
        </Box>
      </Modal>
    </div>

)
}