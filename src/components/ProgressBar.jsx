import {Container, Card, Stack} from "@mui/material";
import MuiProgressBar from "./MuiProgressBar";

export const ProgressBar = ({value,color,panelColor}) => {
  


  return (

    <Card p={3} sx={{ m: 3, }}>
   <Stack p={1} justifyContent="center" sx={{ bgcolor: `${panelColor}`, height:60,  }} >
      <MuiProgressBar value={value} color={color} />
    </Stack>
    </Card>

  );
};
