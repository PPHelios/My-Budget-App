import { MainBar } from "./MainBar";
import Container from '@mui/material/Container'
import { ChartsPanel } from "./ChartsPanel";
import {ProgressBar} from "./ProgressBar";
import { PanelsWindow } from "./PanelsWindow";
import {CardHeader, Card} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

export const MainAppWindow = () => {
  return (
<>
<MainBar />
<ChartsPanel/>
<PanelsWindow />
</>
    
  );
};
